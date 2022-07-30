import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useViewport } from '@/utils'
import { useMutation, gql } from '@apollo/client'
import { Button, CheckBox, TextField } from '@/components/atoms'
import { CheckoutCard } from '@/components/molecules/CheckoutCard'
import { PaymentGateway } from '@/components/sections/PaymentGateway'
import { AddressCard } from '@/components/molecules/AddressCard'
import { useRouter } from 'next/router'

import { Common as CommonLayout } from '@/components/layouts'
import { AddressModal } from '@/components/molecules'

import { toast } from '@/components/molecules'

import { useAppContext } from '@/context'

import { useStripePayment } from '@/utils/useStripePayment'

import { UPDATE_SHIPPING, UPDATE_BILLING, PLACE_ORDER } from '../../lib/graphql'
import Link from 'next/link'

const Page: NextPage = () => {
  const router = useRouter()
  const { payment, stripe_session_id } = router.query
  const { isMobile, isTablet, isDesktop } = useViewport()
  const { handleStripePayment, handleVerifyStripePayment } = useStripePayment()

  const { user, fullUser, refetchFullUser, cart, refetchCart }: any = useAppContext()

  const [showAddressModal, setShowAddressModal] = useState(false)
  const [addressModalHeading, setAddressModalHeading] = useState('')
  const [selectedAddress, setSelectedAddress] = useState<any>({})
  const [selectedAddressType, setSelectedAddressType] = useState<any>('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('stripe')

  const [updateShipping, { loading: loadingUpdateShipping }] = useMutation(UPDATE_SHIPPING)
  const [updateBilling, { loading: loadingUpdateBilling }] = useMutation(UPDATE_BILLING)
  const [placeOrder, { loading: loadingPlaceOrder }] = useMutation(PLACE_ORDER)

  const handleCloseAddressModal = async () => {
    await refetchFullUser()
    setShowAddressModal(false)
    setAddressModalHeading('')
    setSelectedAddress({})
    setSelectedAddressType('')
  }

  const handleSubmit = async () => {
    if (selectedPaymentMethod === 'stripe') {
      const paymentLink = await handleStripePayment(cart)
      return router.push(paymentLink)
    }
  }

  useEffect(() => {
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
  }, [payment, stripe_session_id])

  const handlePaymentValidation = async (cartValue: number, cart: any) => {
    if (payment && payment === 'success' && stripe_session_id) {
      setSelectedPaymentMethod('stripe')
      const { status, amount } = await handleVerifyStripePayment(stripe_session_id)

      if (status === 'complete' && amount === cartValue) {
        toast({ message: 'Payment successful', type: 'success' })
        await refetchFullUser()
        return handleOrder(cart)
      } else if (status === 'complete' && amount !== cartValue) {
        return toast({
          message:
            "Your cart amount and paid amount doesn't match. Please contact support@teslaowners.org.uk",
          type: 'error',
        })
      } else {
        return toast({
          message:
            'Payment failed. Please re-try. If the problem persists, please contact support@teslaowners.org.uk',
          type: 'error',
        })
      }
    }
  }

  const handleOrder = async (cart: any) => {
    refetchFullUser()
      .then(({ data }: any) => {
        const billingAddress = data?.customer?.billing
        const shippingAddress = data?.customer?.shipping

        console.log(billingAddress)
        console.log(shippingAddress)

        placeOrder({
          variables: {
            input: {
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
          .then((res: any) => {
            console.log(res)
            refetchCart()
              .then((res: any) => {
                console.log(res)
              })
              .catch((res: any) => {
                console.log(res)
              })
          })
          .catch((res: any) => {
            console.log(res)
          })
      })
      .catch((res: any) => {
        console.log(res)
      })
  }

  // useEffect(() => {
  //   console.log(cart)
  // }, [cart])

  return (
    <>
      <Head>
        <title>Checkout - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        {showAddressModal && (
          <AddressModal
            heading={addressModalHeading}
            onClose={handleCloseAddressModal}
            isLoading={loadingUpdateShipping || loadingUpdateBilling}
            address={selectedAddress}
            onSubmit={(address: any) => {
              if (selectedAddressType === 'shipping') {
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
            <h1 className='text-h4 font-600 text-N-800 md:text-h3 md:font-700'>Checkout</h1>
          </div>

          <div className='grid grid-cols-[7fr_2fr] gap-[32px]'>
            <div className='w-full'>
              <CheckoutCard />

              <div className='py-[40px] md:py-[32px]'>
                <h4 className='text-h4 font-600 text-N-800'>Payment method</h4>

                <div className='flex flex-col gap-[16px] pt-[32px]'>
                  {/* Payment method */}
                  <PaymentGateway
                    onChange={(method: any) => {
                      setSelectedPaymentMethod(method)
                    }}
                  />

                  {/* Place order button */}
                  <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[16px]'>
                      <p className='max-w-[600px] text-md font-400 text-N-800'>
                        Your personal data will be used to process your order, support your
                        experience throughout this website, and for other purposes described in our
                        privacy policy.
                      </p>

                      {/* This checkbox does not appear in the direct debit page version */}
                      <div className='flex items-center gap-[12px]'>
                        <CheckBox />
                        <p className='text-base font-400'>
                          I have read and agree to the website {''}
                          <Link href='/terms-and-conditions'>
                            <a className='text-base font-600'>terms and conditions {''}</a>
                          </Link>
                          <span className='text-base text-B-500'>*</span>
                        </p>
                      </div>
                    </div>
                    <div className='flex'>
                      <Button
                        className='w-full lg:w-[unset]'
                        onClick={handleSubmit}
                        isLoading={loadingPlaceOrder}>
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
      </CommonLayout>
    </>
  )
}

export default Page
