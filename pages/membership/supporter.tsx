import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox, DropdownMenu } from '@/components/atoms'
import { ArrowUpRight } from 'react-feather'
import { Common as CommonLayout } from '@/components/layouts'
import { useMutation, useQuery } from '@apollo/client'
import { teslaModels } from '@/static-data/tesla-models'
import { toast } from '@/components/molecules'
import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR_CART,
  UPDATE_USER,
  GET_CURRENT_USER,
  LOGOUT,
} from '../../lib/graphql'
import { useRegistration } from '@/utils/useRegistration'

import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const Page: NextPage = () => {
  const router = useRouter()
  const { status, session_id } = router.query

  const {
    logout,
    loadingLogout,
    updateUser,
    loadingUpdateUser,
    addToCart,
    loadingAddToCart,
    clearCart,
    loadingClearCart,
    checkout,
    loadingCheckout,
    runClearCart,
    runCheckout,
    runGetRegisteredUser,
    runUpdateOrderStatus,
  } = useRegistration({
    productId: 1739,
  })

  const [formData, setFormData] = useState<any>({
    model: 'model-3',
  })

  const [orderId, setOrderId] = useState()

  /* FINALIZE */
  const handleFinalize = () => {
    runGetRegisteredUser({
      username: formData.username,
      password: formData.password,
      onSuccess: ({ data }: any) => {
        updateUser({
          variables: {
            id: data?.viewer?.databaseId,
            model: formData.model,
            vin: formData.vin,
            source: formData.refSource,
          },
        })
          .then(() => {
            runUpdateOrderStatus({
              variables: {
                orderId: orderId,
                status: 'PENDING',
              },
              onSuccess: () => {
                stripeSubscribe()
              },
            })
          })
          .catch((e: any) => {
            logout().catch(() => {
              return
            })
            return toast({ message: e.message, type: 'error' })
          })
      },
      onFail: {},
    })
  }

  /* HANDLE SUBMISSION */
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { data: logoutRes } = await logout()

    if (logoutRes.logout.status === 'SUCCESS') {
      runCheckout({
        variables: {
          paymentMethod: 'stripe',
          isPaid: true,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          vin: formData.vin,
          model: formData.model,
          refSource: formData.refSource,
          username: formData.username,
          password: formData.password,
        },
        onSuccess: ({ data }: any) => {
          setOrderId(data?.checkout?.order?.databaseId)
        },
        onFail: () => {
          runClearCart()
          return toast({ message: e.message, type: 'error' })
        },
      })
    }
  }

  useEffect(() => {
    if (orderId) {
      handleFinalize()
    }
  }, [orderId])

  /* Stripe => Create Subscription */
  const stripeSubscribe = async () => {
    const { data }: any = await axios.post('/api/payment', {
      name: `${formData.firstName} ${formData.lastName}`,
      email: `${formData.email}`,
      orderId: orderId,
    })

    router.push(data?.subscription?.url)
  }

  /* Stripe => Verify Payment */
  const stripeVerifyPayment = async () => {
    const { data }: any = await axios.post('/api/verify-payment', {
      session_id,
    })

    if (data && data.session && data.session.payment_status === 'paid') {
      runUpdateOrderStatus({
        variables: {
          orderId: Number(data.session.client_reference_id),
          status: 'COMPLETED',
        },
        onSuccess: () => {
          logout().catch((e: any) => {
            return toast({ message: e.message, type: 'error' })
          })
          return router.push(`/auth/login?newAccountCreated=true`)
        },
        onFail: (e: any) => {
          logout().catch(() => {
            return
          })
          return toast({ message: e.message, type: 'error' })
        },
      })
    }
  }

  useEffect(() => {
    if (session_id) {
      stripeVerifyPayment()
    }
  }, [session_id])

  return (
    <>
      <Head>
        <title>Supporter member registration - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container'>
          {/* bg-[url(/images/hero-pattern.svg)] */}
          <div className='flex flex-col items-center rounded-[8px] bg-N-50 bg-cover bg-no-repeat py-[24px] md:pt-[40px] md:pb-[80px] lg:pt-[80px] lg:pb-[80px]'>
            <SectionHeading
              overline='Register as a'
              heading='Supporter member'
              align='center'
              headingClassName='!mb-0'
              className='mb-[20px]'
            />

            <div className='w-[90%] pt-[32px] md:w-[672px] lg:w-[672px]'>
              <div className='relative flex w-full justify-center rounded-t-[8px]'>
                <img src='/images/register-banner.png' className='w-full rounded-t-[8px]' />
              </div>

              <div className='w-full rounded-b-[8px] bg-white px-[16px] pt-[24px] pb-[32px] md:px-[40px] lg:px-[48px]'>
                <div className='flex border-b-[1px] border-b-N-200 pb-[24px]'>
                  <div className='flex w-full flex-col gap-[8px]'>
                    <div className='flex'>
                      <p className='text-sm font-500 text-N-600'>You are purchasing</p>
                    </div>

                    <div className='flex flex-col justify-between md:flex-row lg:flex-row'>
                      <div className='flex flex-col gap-[8px] md:w-[258px] lg:w-[258px]'>
                        <p className='text-md font-400 text-N-800'>
                          Tesla Owners UK Annual Supporter Fee + Official Supporter Welcome Pack
                        </p>
                        <p className='text-sm font-500 text-N-600'>
                          Official Supporter Tesla Owners UK Subscription
                        </p>
                      </div>

                      <div className='flex flex-col gap-[12px] pt-[24px] md:items-end md:pt-0 lg:items-end lg:pt-0'>
                        <p className='text-md font-500 text-B-500'>
                          £35.00/year and a £15.00 Sign-up fee
                        </p>
                        <Link href='/membership' passHref>
                          <Button
                            className='w-full text-base !text-N-800 md:w-[190px] lg:w-[190px]'
                            appearance='secondary'
                            iconAfter={<ArrowUpRight size={20} />}
                            size='sm'>
                            See all benefits
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-[16px] pt-[24px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      placeholder='Enter first name'
                      value={formData.firstName || ''}
                      label='First Name'
                      onChange={(e: any) => {
                        setFormData({ ...formData, firstName: e.target.value })
                      }}
                      required
                    />
                    <TextField
                      placeholder='Enter last name'
                      label='Last name'
                      value={formData.lastName || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, lastName: e.target.value })
                      }}
                      required
                    />
                  </div>

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      placeholder='Enter username'
                      label='Username'
                      value={formData.username || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, username: e.target.value })
                      }}
                      required
                    />
                    <TextField
                      placeholder='Enter email address'
                      label='Email address'
                      value={formData.email || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, email: e.target.value })
                      }}
                      required
                    />
                  </div>

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      type='password'
                      placeholder='Enter password here'
                      label='Password'
                      value={formData.password || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, password: e.target.value })
                      }}
                      required
                    />
                    <TextField
                      type='password'
                      placeholder='Re-type password'
                      label='Confirm password'
                      value={formData.confirmPassword || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, confirmPassword: e.target.value })
                      }}
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-[4px]'>
                    <TextField
                      label='Vehicle VIN No (Available from app)'
                      required
                      placeholder='Enter vehicle Vin No'
                      value={formData.vin || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, vin: e.target.value })
                      }}
                    />
                  </div>

                  <div className='flex flex-col justify-between gap-[8px] md:flex-row md:gap-[48px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <DropdownMenu
                        label='Tesla Model'
                        list={teslaModels || []}
                        onChange={(e: any) => {
                          setFormData({ ...formData, model: e.target.value })
                        }}
                        value={formData.model}
                        placeholder='Select model'
                        required
                      />

                      <p className='text-sm font-500 text-N-600'>
                        Select your model of Tesla owned here (if multiple then pick the one that
                        matches the VIN No above)
                      </p>
                    </div>

                    <div className='flex h-[160px] w-[300px] flex-shrink-0 justify-center'>
                      {formData.model && formData.model !== 'other' && (
                        <img
                          src={`/images/models/${formData.model}.png`}
                          width={300}
                          height={160}
                          className='object-contain object-center'
                        />
                      )}
                    </div>
                  </div>

                  <div className='flex flex-col gap-[8px]'>
                    <TextField
                      placeholder='Enter name here'
                      label='Name to appear on the badge'
                      value={formData.badgeName || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, badgeName: e.target.value })
                      }}
                      required
                    />
                    <p className='text-sm font-500 text-N-600'>
                      So we can print your name badge please supply your name as you would like it
                      to appear on your badge
                    </p>
                  </div>

                  <div className='flex flex-col gap-[8px]'>
                    <TextField
                      placeholder='House number and street name'
                      label='Your location (to appear on badge)'
                      value={formData.locationName || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, locationName: e.target.value })
                      }}
                      required
                    />
                    <p className='text-sm font-500 text-N-600'>
                      So we can print your name badge please supply your location (nearest large
                      town/city) e.g. Milton Keynes. This will appear directly below your name on
                      your badge.
                    </p>
                  </div>

                  <TextField
                    label='How did you find out about Tesla Owners UK'
                    required
                    placeholder='Google / Search engine'
                    value={formData.refSource || ''}
                    onChange={(e: any) => {
                      setFormData({ ...formData, refSource: e.target.value })
                    }}
                  />
                </div>

                <div className='flex flex-col pt-[20px]'>
                  <p className="mb-[8px] text-md font-500 text-N-600 after:ml-[2px] after:text-B-500 after:content-['*']">
                    Club rules, Articles of Association and Privacy Policy
                  </p>

                  <div className='flex w-[unset] flex-col items-start gap-[4px] pt-[12] pb-[8px]'>
                    <Link href='/articles-of-association' passHref>
                      <a>
                        <Button
                          className='h-[unset] w-[unset] border-none px-0 text-md !font-600 !text-N-800 hover:!text-R-400'
                          appearance='ghost'
                          iconAfter={<ArrowUpRight size={20} />}>
                          Club’s rules
                        </Button>
                      </a>
                    </Link>

                    <Link href='/articles-of-association' passHref>
                      <a>
                        <Button
                          className='h-[unset] w-[unset] border-none px-0 text-md !font-600 !text-N-800 hover:!text-R-400'
                          appearance='ghost'
                          iconAfter={<ArrowUpRight size={20} />}>
                          Articles of Association
                        </Button>
                      </a>
                    </Link>

                    <Link href='/privacy-policy' passHref>
                      <a>
                        <Button
                          className='h-[unset] w-[unset] border-none px-0 text-md !font-600 !text-N-800 hover:!text-R-400'
                          appearance='ghost'
                          iconAfter={<ArrowUpRight size={20} />}>
                          Privacy Policy
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='flex flex-col justify-between !pt-[12px] md:flex-row md:pt-[24px] lg:flex-row lg:pt-[24px]'>
                  <div className='flex gap-[12px]'>
                    <CheckBox
                      checked={formData.privacyPolicy || false}
                      onChange={(e: any) => {
                        setFormData({ ...formData, privacyPolicy: e.target.checked })
                      }}
                    />
                    <p className='text-sm font-500 text-N-600'>
                      By clicking, I agree to adhere to the Club Rules and to the Club Privacy
                      Policy (outlined in the footer below). I agree that the Club may contact me
                      for the purposes of membership administration, marketing and other
                      communications as set out in our Club Privacy Policy. You may opt out at any
                      time.
                    </p>
                  </div>
                </div>

                <div className='flex flex-col gap-[24px] pt-[24px] lg:pt-[28px]'>
                  <div className='flex w-full flex-wrap gap-[12px] lg:w-[unset]'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      isLoading={
                        loadingLogout ||
                        loadingUpdateUser ||
                        loadingAddToCart ||
                        loadingClearCart ||
                        loadingCheckout
                      }
                      onClick={handleSubmit}>
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
