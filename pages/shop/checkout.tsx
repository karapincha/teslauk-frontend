import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Button, CheckBox } from '@/components/atoms'
import { PaymentGateway } from '@/components/sections/PaymentGateway'
import { Common as CommonLayout } from '@/components/layouts'
import {
  CheckoutCard,
  PagePlaceholder,
  PageLockOverlay,
  AddressModal,
  AddressCard,
  toast,
} from '@/components/molecules'

import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useViewport, useStripePayment, useGoCardLessPayment } from '@/utils'
import { useAppContext } from '@/context'

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
  const { handleStripePayment, handleVerifyStripePayment } = useStripePayment()
  const { handleGoCardLessPayment, handleVerifyGoCardLessPayment } = useGoCardLessPayment()

  const { user, fullUser, refetchFullUser, cart, refetchCart }: any = useAppContext()

  const [showAddressModal, setShowAddressModal] = useState(false)
  const [addressModalHeading, setAddressModalHeading] = useState<any>(null)
  const [selectedAddress, setSelectedAddress] = useState<any>(null)
  const [selectedAddressType, setSelectedAddressType] = useState<any>(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('stripe')

  const [agreedToTerms, setAgreedToTerms] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isLockedPage, setIsLockedPage] = useState(false)
  const [showUseBillingAddress, setShowUseBillingAddress] = useState(false)

  const [updateShipping, { loading: loadingUpdateShipping }] = useMutation(UPDATE_SHIPPING)
  const [updateBilling, { loading: loadingUpdateBilling }] = useMutation(UPDATE_BILLING)

  const [placeOrder, { loading: loadingPlaceOrder }] = useMutation(PLACE_ORDER)
  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [verifyOrderPaymentKey, { loading: loadingVerifyOrderPaymentKey }] =
    useMutation(VERIFY_ORDER_PAYMENT_KEY)

  /* ===== START Address Modal Logics ===== */
  const handleCloseAddressModal = async ({ status }: any) => {
    setShowAddressModal(false)
    setAddressModalHeading(null)
    setSelectedAddress(null)
    setSelectedAddressType(null)

    if (status === 'success') {
      return toast({ message: 'Address updated', type: 'success' })
    } else if (status === 'error') {
      return toast({ message: 'Error updating address', type: 'error' })
    }
  }

  const handleSubmitAddressModal = async ({ address }: any) => {
    const successHandle = async () => {
      await refetchFullUser()
      return handleCloseAddressModal({ status: 'success' })
    }

    if (selectedAddressType === 'shipping') {
      updateShipping({ variables: { ...address, id: user?.databaseId } })
        .then(async () => successHandle())
        .catch(() => handleCloseAddressModal({ status: 'error' }))
    }

    if (selectedAddressType === 'billing') {
      updateBilling({
        variables: { ...address, id: user?.databaseId },
      })
        .then(async () => successHandle())
        .catch(() => handleCloseAddressModal({ status: 'error' }))
    }
  }
  /* ===== END Address Modal Logics ===== */

  const handleSubmit = async () => {
    /* Billing address validation */
    if (
      !fullUser?.customer?.billing?.address1 ||
      !fullUser?.customer?.billing?.city ||
      !fullUser?.customer?.billing?.postcode ||
      !fullUser?.customer?.billing?.phone
    ) {
      setSelectedAddress(fullUser?.customer?.billing)
      setAddressModalHeading('Update billing Address')
      setSelectedAddressType('billing')
      setShowAddressModal(true)
      return toast({ message: 'Please update your billing address', type: 'warning' })
    }

    /* Shipping address validation */
    if (
      !fullUser?.customer?.shipping?.address1 ||
      !fullUser?.customer?.shipping?.city ||
      !fullUser?.customer?.shipping?.postcode ||
      !fullUser?.customer?.shipping?.phone
    ) {
      setSelectedAddress(fullUser?.customer?.shipping)
      setAddressModalHeading('Update Shipping Address')
      setSelectedAddressType('shipping')
      setShowUseBillingAddress(true)
      setShowAddressModal(true)
      return toast({ message: 'Please update your shipping address', type: 'warning' })
    }

    /* TOS agreement validation */
    if (!agreedToTerms) {
      return toast({ message: 'You must agree to the terms and conditions', type: 'error' })
    }

    /* Start loader */
    setIsLoading(true)

    /* Process Stripe */
    if (selectedPaymentMethod === 'stripe') {
      const paymentLink = await handleStripePayment({ cart, email: user?.email })
      return router.push(paymentLink)
    }

    /* Process GoCardLess */
    if (selectedPaymentMethod === 'gocardless') {
      const paymentLink = await handleGoCardLessPayment({ cart, email: user?.email })
      return router.push(paymentLink)
    }
  }

  useEffect(() => {
    if (!payment || payment === 'cancelled') return

    const refreshCart = async () => {
      setIsLockedPage(true)
      let cartValue = 0
      await refetchCart().then(({ data }: any) => {
        cartValue = Number(data?.cart?.total?.substring(1))
        return handlePaymentValidation(cartValue, data?.cart)
      })
      return cartValue
    }

    refreshCart()
  }, [payment, stripe_session_id, gocardless_session_id])

  /* Verify Payment by Returned Key */
  const handlePaymentValidation = async (cartValue: number, cart: any) => {
    const handleClose = ({ toastMessage, toastType }: any) => {
      setIsLockedPage(false)
      toast({ message: toastMessage, type: toastType })
    }

    /* Handle Empty Cart */
    if (cart?.contents?.nodes?.length === 0) {
      handleClose({ toastMessage: 'Your cart is empty', toastType: 'error' })
      return router.push({ query: {} })
    }

    /* Handle Stripe */
    if (payment && payment === 'success' && stripe_session_id) {
      await verifyOrderPaymentKey({
        variables: {
          input: { paymentKey: stripe_session_id },
        },
      }).then(async ({ data }: any) => {
        setSelectedPaymentMethod('stripe')
        const existingOrders = JSON.parse(data?.verifyOrderByOrderKey?.orders)

        if (existingOrders?.length > 0) {
          return handleClose({
            toastMessage:
              'You have already placed an order with this payment key. If you are certain this is a mistake, please contact support@teslaowners.org.uk',
            toastType: 'error',
          })
        }

        const { status } = await handleVerifyStripePayment(stripe_session_id)

        if (status === 'complete') {
          toast({ message: 'Payment successful', type: 'success' })
          return handleOrder(cart)
        }

        return handleClose({
          toastMessage:
            'Payment failed. If the problem persists, please contact support@teslaowners.org.uk',
          toastType: 'error',
        })
      })
    }

    /* Handle GoCardLess */
    if (payment && payment === 'success' && gocardless_session_id) {
      await verifyOrderPaymentKey({
        variables: {
          input: { paymentKey: gocardless_session_id },
        },
      }).then(async ({ data }: any) => {
        setSelectedPaymentMethod('gocardless')
        const existingOrders = JSON.parse(data?.verifyOrderByOrderKey?.orders)

        if (existingOrders?.length > 0) {
          return handleClose({
            toastMessage:
              'You have already placed an order with this payment key. If you are certain this is a mistake, please contact support@teslaowners.org.uk',
            toastType: 'error',
          })
        }

        const { status } = await handleVerifyGoCardLessPayment(gocardless_session_id)

        if (status === 'confirmed') {
          toast({ message: 'Payment successful', type: 'success' })
          await refetchFullUser()
          return handleOrder(cart)
        }

        return handleClose({
          toastMessage:
            'Payment failed. If the problem persists, please contact support@teslaowners.org.uk',
          toastType: 'error',
        })
      })
    }
  }

  /* Process Order */
  const handleOrder = async (cart: any) => {
    await refetchFullUser().then(async ({ data }: any) => {
      const billingAddress = data?.customer?.billing
      const shippingAddress = data?.customer?.shipping

      await placeOrder({
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
      }).then(async ({ data }: any) => {
        if (data?.checkout?.result === 'success') {
          toast({ message: 'Order successful', type: 'success' })
          await clearCart()
          await refetchCart()
          return router.push('/shop/order-success')
        }
      })
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
                isLoading={loadingUpdateShipping || loadingUpdateBilling}
                heading={addressModalHeading}
                showUseBillingAddress={showUseBillingAddress}
                billingAddress={fullUser?.customer?.billing}
                shippingAddress={fullUser?.customer?.shipping}
                address={selectedAddress}
                onClose={handleCloseAddressModal}
                onSubmit={handleSubmitAddressModal}
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
                    name={`${fullUser?.customer?.billing?.firstName} ${fullUser?.customer?.billing?.lastName}`}
                    address={`
                      ${fullUser?.customer?.billing?.address1 || ''} <br />
                      ${fullUser?.customer?.billing?.city || ''} <br />
                      ${fullUser?.customer?.billing?.postcode || ''} <br />
                      ${fullUser?.customer?.billing?.state || ''} <br />
                      ${fullUser?.customer?.billing?.phone || ''} <br />
                      ${fullUser?.customer?.billing?.email || ''}
                    `}
                    onEditClick={() => {
                      setSelectedAddress(fullUser?.customer?.billing)
                      setAddressModalHeading('Update billing address')
                      setSelectedAddressType('billing')
                      setShowAddressModal(true)
                    }}
                  />

                  <AddressCard
                    heading='Shipping address'
                    name={`${fullUser?.customer?.shipping?.firstName} ${fullUser?.customer?.shipping?.lastName}`}
                    address={`
                      ${fullUser?.customer?.shipping?.address1 || ''} <br />
                      ${fullUser?.customer?.shipping?.city || ''} <br />
                      ${fullUser?.customer?.shipping?.postcode || ''} <br />
                      ${fullUser?.customer?.shipping?.state || ''} <br />
                      ${fullUser?.customer?.shipping?.phone || ''}
                    `}
                    onEditClick={() => {
                      setSelectedAddress(fullUser?.customer?.shipping)
                      setAddressModalHeading('Update shipping address')
                      setSelectedAddressType('shipping')
                      setShowAddressModal(true)
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
