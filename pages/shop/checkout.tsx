import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useViewport } from '@/utils'
import { useMutation, gql } from '@apollo/client'
import { Button, CheckBox, TextField } from '@/components/atoms'
import { CheckoutCard, PagePlaceholder, PageLockOverlay } from '@/components/molecules'
import { PaymentGateway } from '@/components/sections/PaymentGateway'
import { AddressCard } from '@/components/molecules/AddressCard'
import { useRouter } from 'next/router'

import { Common as CommonLayout } from '@/components/layouts'
import { AddressModal } from '@/components/molecules'

import { toast } from '@/components/molecules'

import { useAppContext } from '@/context'
import { useStripePayment, useGoCardLessPayment } from '@/utils'

import {
  UPDATE_SHIPPING,
  UPDATE_BILLING,
  PLACE_ORDER,
  CLEAR_CART,
  VERIFY_ORDER_PAYMENT_KEY,
} from '../../lib/graphql'
import Link from 'next/link'

const Page: NextPage = () => {
  const router = useRouter()
  const { payment, stripe_session_id, gocardless_session_id } = router.query
  const { isMobile, isTablet, isDesktop } = useViewport()
  const { handleStripePayment, handleVerifyStripePayment } = useStripePayment()
  const { handleGoCardLessPayment, handleVerifyGoCardLessPayment } = useGoCardLessPayment()

  const { user, fullUser, refetchFullUser, cart, refetchCart }: any = useAppContext()

  const [showAddressModal, setShowAddressModal] = useState(false)
  const [addressModalHeading, setAddressModalHeading] = useState('')
  const [selectedAddress, setSelectedAddress] = useState<any>({})
  const [selectedAddressType, setSelectedAddressType] = useState<any>('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('gocardless')

  const [agreedToTerms, setAgreedToTerms] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isLockedPage, setIsLockedPage] = useState(false)

  const [updateShipping, { loading: loadingUpdateShipping }] = useMutation(UPDATE_SHIPPING)
  const [updateBilling, { loading: loadingUpdateBilling }] = useMutation(UPDATE_BILLING)
  const [placeOrder, { loading: loadingPlaceOrder }] = useMutation(PLACE_ORDER)
  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [verifyOrderPaymentKey, { loading: loadingVerifyOrderPaymentKey }] =
    useMutation(VERIFY_ORDER_PAYMENT_KEY)

  const handleCloseAddressModal = async () => {
    await refetchFullUser()
    setShowAddressModal(false)
    setAddressModalHeading('')
    setSelectedAddress({})
    setSelectedAddressType('')
  }

  const handleSubmit = async () => {
    setIsLoading(true)

    if (!fullUser?.customer?.shipping?.address1 || !fullUser?.customer?.shipping?.city) {
      setIsLoading(false)
      setSelectedAddressType('confirm-shipping')
      setSelectedAddress(fullUser?.customer?.shipping)
      setAddressModalHeading('Confirm Shipping Address')
      setShowAddressModal(true)
      return toast({ message: 'Please confirm your shipping address', type: 'warning' })
    }

    if (!agreedToTerms) {
      setIsLoading(false)
      return toast({ message: 'You must agree to the terms and conditions', type: 'error' })
    }

    /* Stripe */
    if (selectedPaymentMethod === 'stripe') {
      const paymentLink = await handleStripePayment({ cart, email: user?.email })
      setIsLoading(false)
      return router.push(paymentLink)
    }

    /* GoCardLess */
    if (selectedPaymentMethod === 'gocardless') {
      const paymentLink = await handleGoCardLessPayment({ cart, email: user?.email })
      setIsLoading(false)
      return router.push(paymentLink)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    if (!payment) {
      return
    }

    if (payment === 'success') {
      setIsLockedPage(true)
    }

    if (payment === 'cancelled') {
      return
    }

    const refreshCart = async () => {
      let cartValue = 0

      refetchCart()
        .then(({ data }: any) => {
          cartValue = Number(data?.cart?.total?.substring(1))
          return handlePaymentValidation(cartValue, data?.cart)
        })
        .catch()

      return cartValue
    }

    refreshCart()
  }, [payment, stripe_session_id, gocardless_session_id])

  const handlePaymentValidation = async (cartValue: number, cart: any) => {
    if (cart?.contents?.nodes?.length === 0) {
      setIsLoading(false)
      setIsLockedPage(false)
      toast({ message: 'Your cart is empty', type: 'warning' })
      return router.push({ query: {} })
    }

    /* Stripe */
    if (payment && payment === 'success' && stripe_session_id) {
      verifyOrderPaymentKey({
        variables: {
          input: { paymentKey: stripe_session_id },
        },
      })
        .then(async ({ data }: any) => {
          const existingOrders = JSON.parse(data?.verifyOrderByOrderKey?.orders)

          if (existingOrders.length === 0) {
            setSelectedPaymentMethod('stripe')

            const { status } = await handleVerifyStripePayment(stripe_session_id)
            if (status === 'complete') {
              toast({ message: 'Payment successful', type: 'success' })
              await refetchFullUser()
              return handleOrder(cart)
            } else {
              setIsLoading(false)
              return toast({
                message:
                  'Payment failed. Please re-try. If the problem persists, please contact support@teslaowners.org.uk',
                type: 'error',
              })
            }
          } else {
            setIsLoading(false)
            setIsLockedPage(false)
            return toast({
              message:
                'You have already placed an order with this payment key. If you think this is a mistake, please contact support@teslaowners.org.uk',
              type: 'error',
            })
          }
        })
        .catch()
    }

    /* GoCardLess */
    if (payment && payment === 'success' && gocardless_session_id) {
      verifyOrderPaymentKey({
        variables: {
          input: { paymentKey: gocardless_session_id },
        },
      })
        .then(async ({ data }: any) => {
          const existingOrders = JSON.parse(data?.verifyOrderByOrderKey?.orders)

          if (existingOrders.length === 0) {
            setSelectedPaymentMethod('gocardless')
            const { status } = await handleVerifyGoCardLessPayment(gocardless_session_id)

            if (status === 'confirmed') {
              toast({ message: 'Payment successful', type: 'success' })
              await refetchFullUser()
              return handleOrder(cart)
            } else {
              setIsLoading(false)
              return toast({
                message:
                  'Payment failed. Please re-try. If the problem persists, please contact support@teslaowners.org.uk',
                type: 'error',
              })
            }
          } else {
            setIsLoading(false)
            setIsLockedPage(false)
            return toast({
              message:
                'You have already placed an order with this payment key. If you think this is a mistake, please contact support@teslaowners.org.uk',
              type: 'error',
            })
          }
        })
        .catch()
    }
  }

  const handleOrder = async (cart: any) => {
    refetchFullUser()
      .then(({ data }: any) => {
        const billingAddress = data?.customer?.billing
        const shippingAddress = data?.customer?.shipping

        placeOrder({
          variables: {
            input: {
              metaData: [{ key: 'paymentKey', value: stripe_session_id || gocardless_session_id }],
              paymentMethod: selectedPaymentMethod,
              isPaid: true,
              shipToDifferentAddress: true,
              billing: {
                address1: billingAddress?.address1,
                firstName: billingAddress?.firstName,
                lastName: billingAddress?.lastName,
                phone: billingAddress?.phone,
                city: billingAddress?.city,
                postcode: billingAddress?.postcode,
                state: billingAddress?.state,
                email: billingAddress?.email,
              },
              shipping: {
                address1: shippingAddress?.address1,
                firstName: shippingAddress?.firstName,
                lastName: shippingAddress?.lastName,
                phone: shippingAddress?.phone,
                city: shippingAddress?.city,
                postcode: shippingAddress?.postcode,
                state: shippingAddress?.state,
                email: shippingAddress?.email,
              },
            },
          },
        })
          .then(async ({ data }: any) => {
            if (data?.checkout?.result === 'success') {
              toast({ message: 'Order successful', type: 'success' })
              await clearCart()
              await refetchCart()
              return router.push('/shop/order-success')
            }
          })
          .catch((res: any) => {
            console.log(res)
          })
      })
      .catch((res: any) => {
        console.log(res)
      })
  }

  const renderPagePlaceholder = () => {
    return (
      <div className='container'>
        <PagePlaceholder
          heading='Shopping Cart'
          description={
            <div className='max-w-[600px]'>
              Your cart is currently empty. Before proceed to checkout you must add some products to
              your shopping cart.
            </div>
          }
          cta={
            <Link href='/shop'>
              <Button appearance='primary'>Browse products</Button>
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Shopping Cart - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        {isLockedPage && (
          <PageLockOverlay
            heading='We are placing your order'
            description='Please do not close this window, until we are finished.'
          />
        )}

        {cart?.contents?.nodes?.length === 0 ? (
          renderPagePlaceholder()
        ) : (
          <>
            {showAddressModal && (
              <AddressModal
                heading={addressModalHeading}
                showUseBillingAddress={selectedAddressType === 'confirm-shipping'}
                onClose={handleCloseAddressModal}
                isLoading={loadingUpdateShipping || loadingUpdateBilling}
                billingAddress={fullUser?.customer?.billing}
                shippingAddress={fullUser?.customer?.shipping}
                address={selectedAddress}
                selectedAddressType={selectedAddressType}
                onSubmit={(address: any) => {
                  if (
                    selectedAddressType === 'shipping' ||
                    selectedAddressType === 'confirm-shipping'
                  ) {
                    updateShipping({ variables: { ...address, id: user?.databaseId } })
                      .then((res: any) => {
                        handleCloseAddressModal()
                        return toast({ message: 'Shipping address updated', type: 'success' })
                      })
                      .catch((res: any) => {
                        handleCloseAddressModal()
                        return toast({ message: 'Something went wrong.', type: 'error' })
                      })
                  }

                  if (selectedAddressType === 'billing') {
                    updateBilling({ variables: { ...address, id: user?.databaseId } })
                      .then((res: any) => {
                        handleCloseAddressModal()
                        return toast({ message: 'Billing address updated', type: 'success' })
                      })
                      .catch((res: any) => {
                        handleCloseAddressModal()
                        return toast({ message: 'Something went wrong.', type: 'error' })
                      })
                  }
                }}
              />
            )}

            <div className='container'>
              <div className='flex flex-col pb-[24px] md:pb-[32px]'>
                <h1 className='text-h2'>Shopping Cart</h1>
              </div>

              <div className='grid grid-cols-[7fr_2fr] gap-[32px]'>
                <div className='w-full'>
                  <CheckoutCard />

                  <div className='py-[40px] md:py-[32px]'>
                    <h4 className='text-h4 font-600 text-N-800'>Payment method</h4>

                    <div className='flex flex-col gap-[16px] pt-[32px]'>
                      {/* Payment method */}
                      <PaymentGateway
                        defaultPaymentMethod={selectedPaymentMethod}
                        onChange={(method: any) => {
                          setSelectedPaymentMethod(method)
                        }}
                      />

                      {/* Place order button */}
                      <div className='flex flex-col gap-[24px]'>
                        <div className='flex flex-col gap-[32px]'>
                          <p className='max-w-[600px] text-sm font-500 text-N-800'>
                            Your personal data will be used to process your order, support your
                            experience throughout this website, and for other purposes described in
                            our privacy policy. We do NOT save your card/bank details.
                          </p>

                          <div className='flex items-center gap-[12px]'>
                            <CheckBox
                              defaultChecked={agreedToTerms}
                              onChange={(e: any) => {
                                setAgreedToTerms(e.target.checked)
                              }}
                              labelClassName='leading-[1]'>
                              <p className='pt-[4px] text-base font-400 leading-[1]'>
                                I have read and agree to the website {''}
                                <Link href='/terms-and-conditions'>
                                  <a className='font-600'>terms and conditions {''}</a>
                                </Link>
                                <span className='text-B-500'>*</span>
                              </p>
                            </CheckBox>
                          </div>
                        </div>
                        <div className='flex'>
                          <Button
                            className='w-full lg:w-[unset]'
                            onClick={handleSubmit}
                            isLoading={isLoading || loadingPlaceOrder}>
                            Pay and Place order
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Addresses */}
                <div className='flex w-full flex-col gap-[32px]'>
                  <AddressCard
                    heading='Billing address'
                    type='billing'
                    name={`${fullUser?.customer?.billing?.firstName} ${fullUser?.customer?.billing?.lastName}`}
                    address={`
          ${fullUser?.customer?.billing?.address1 || ''} <br />
          ${fullUser?.customer?.billing?.city || ''} <br />
          ${fullUser?.customer?.billing?.postcode || ''} <br />
          ${fullUser?.customer?.billing?.state || ''}
          `}
                    phoneNumber={fullUser?.customer?.billing?.phone}
                    email={fullUser?.customer?.billing?.email}
                    onEditClick={() => {
                      setSelectedAddress(fullUser?.customer?.billing)
                      setAddressModalHeading('Update billing address')
                      setShowAddressModal(true)
                      setSelectedAddressType('billing')
                    }}
                  />

                  <AddressCard
                    heading='Shipping address'
                    type='shipping'
                    name={`${fullUser?.customer?.shipping?.firstName} ${fullUser?.customer?.shipping?.lastName}`}
                    address={`
          ${fullUser?.customer?.shipping?.address1 || ''} <br />
          ${fullUser?.customer?.shipping?.city || ''} <br />
          ${fullUser?.customer?.shipping?.postcode || ''} <br />
          ${fullUser?.customer?.shipping?.state || ''}
          `}
                    phoneNumber={fullUser?.customer?.shipping?.phone}
                    onEditClick={() => {
                      setSelectedAddress(fullUser?.customer?.shipping)
                      setAddressModalHeading('Update shipping address')
                      setShowAddressModal(true)
                      setSelectedAddressType('shipping')
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </CommonLayout>
    </>
  )
}

export default Page
