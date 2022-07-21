import _ from 'lodash'
import type { NextPage } from 'next'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { useRegistration } from '@/utils/useRegistration'

import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox, DropdownMenu } from '@/components/atoms'
import { ArrowUpRight } from 'react-feather'
import { Common as CommonLayout } from '@/components/layouts'
import { teslaModels } from '@/static-data/tesla-models'
import { toast } from '@/components/molecules'

import { VERIFY_USER } from '../../lib/graphql'

const Page: NextPage = () => {
  const router = useRouter()
  const { status, session_id } = router.query
  const [isWelcomePackIncluded, setIsWelcomePackIncluded] = useState(true)
  const [defaultModel, setDefaultModel] = useState('model-3')

  const [isSessionVerified, setIsSessionVerified] = useState(false)
  const [showBrowserWindowAlert, setShowBrowserWindowAlert] = useState(false)
  const [showPaymentFailedAlert, setShowPaymentFailedAlert] = useState(false)
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)

  const [selectedMembershipProduct, setSelectedMembershipProduct] = useState(
    Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITH_WELCOME_PACK_ID)
  )

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
  } = useRegistration()

  const [formData, setFormData] = useState<any>({
    model: 'model-3',
    isWelcomePackIncluded: true,
  })

  const { refetch: verifyUser } = useQuery(VERIFY_USER, {
    skip: true,
  })

  /* FINALIZE */
  const handleFinalize = (orderId: any) => {
    runGetRegisteredUser({
      username: formData.username,
      password: formData.password,
      onSuccess: ({ data }: any) => {
        updateUser({
          variables: {
            id: data?.viewer?.databaseId,
            model: formData.model || defaultModel,
            vin: formData.vin,
            source: formData.refSource,
          },
        })
          .then(() => {
            runUpdateOrderStatus({
              variables: {
                orderId: orderId,
                status: formData?.isWelcomePackIncluded ? 'AWAITING_SHIPMENT' : 'COMPLETED',
              },
              onSuccess: (res: any) => {
                router.push('/account?new_account=true')
                localStorage.clear()
              },
              onFail: (e: any) => {
                router.push('/account?order_status_update=failed')
                localStorage.clear()
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

  /* HANDLE VALIDATION */
  const handleValidation = (e: any) => {
    e.preventDefault()

    if (!formData?.firstName) {
      return toast({ message: 'Please enter first name', type: 'error' })
    }

    if (!formData?.lastName) {
      return toast({ message: 'Please enter last name', type: 'error' })
    }

    if (!formData?.username) {
      return toast({ message: 'Please enter a username', type: 'error' })
    }

    if (!formData?.email) {
      return toast({ message: 'Please enter email address', type: 'error' })
    }

    if (!formData?.password) {
      return toast({ message: 'Please enter a password', type: 'error' })
    }

    if (!formData?.confirmPassword) {
      return toast({ message: 'Please enter confirm password', type: 'error' })
    }

    if (formData?.confirmPassword !== formData?.password) {
      return toast({ message: "Passwords don't match", type: 'error' })
    }

    if (!formData?.vin) {
      return toast({ message: "Please enter your primary vehicle's VIN number", type: 'error' })
    }

    if (isWelcomePackIncluded && !formData?.badgeName) {
      return toast({ message: 'Please enter a name to appear on your badge', type: 'error' })
    }

    if (isWelcomePackIncluded && !formData?.locationName) {
      return toast({
        message: 'Please enter a location name to appear on your badge',
        type: 'error',
      })
    }

    if (!formData?.privacyPolicy) {
      return toast({
        message: 'Please agree to Club rules and Privacy policy',
        type: 'error',
      })
    }

    return handleSubmit(e)
  }

  /* HANDLE SUBMISSION */
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { data: logoutRes } = await logout()

    if (logoutRes.logout.status === 'SUCCESS') {
      verifyUser({ email: formData?.email, username: formData?.username })
        .then(({ data }: any) => {
          if (!data?.verifyUser?.byUsername?.id && !data?.verifyUser?.byEmail?.id) {
            return stripeSubscribe()
          }

          toast({
            message: 'An user already exists with provided email and/or username',
            type: 'error',
          })
        })
        .catch((res: any) => {
          toast({ message: res.message, type: 'error' })
        })
    }
  }

  /* Stripe => Create Subscription */
  const stripeSubscribe = async () => {
    const { data }: any = await axios.post('/api/payment', {
      name: `${formData.firstName} ${formData.lastName}`,
      email: `${formData.email}`,
      clientRef: _.uniqueId(),
      product: selectedMembershipProduct,
      isWelcomePackIncluded: isWelcomePackIncluded || formData?.isWelcomePackIncluded,
    })

    router.push(data?.subscription?.url)
  }

  /* Stripe => Verify Payment */
  const stripeVerifyPayment = async () => {
    const { data }: any = await axios.post('/api/verify-payment', {
      session_id,
    })
    setIsCreatingAccount(true)

    if (data && data.session && data.session.payment_status === 'paid') {
      setIsSessionVerified(true)

      verifyUser({ email: formData?.email, username: formData?.username }).then(({ data }: any) => {
        if (!data?.verifyUser?.byUsername?.id && !data?.verifyUser?.byEmail?.id) {
          setShowBrowserWindowAlert(true)
          toast({ message: "Payment complete. We'll now create your account", type: 'success' })

          return runCheckout({
            productId:
              formData?.isWelcomePackIncluded || isWelcomePackIncluded
                ? Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITH_WELCOME_PACK_ID)
                : Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITHOUT_WELCOME_PACK_ID),
            variables: {
              isPaid: true,
              paymentMethod: 'stripe',
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
              vin: formData.vin,
              model: formData.model || defaultModel,
              refSource: formData.refSource,
              username: formData.username,
              password: formData.password,
            },
            onSuccess: ({ data }: any) => {
              if (data?.checkout?.order?.databaseId) {
                handleFinalize(data?.checkout?.order?.databaseId)
              } else {
                toast({
                  message:
                    'Something went wrong. Please contact us at membership@teslaowners.org.uk',
                  type: 'error',
                })
              }
            },
            onFail: (e: any) => {
              runClearCart()
              return toast({ message: e.message, type: 'error' })
            },
          })
        } else {
          localStorage.clear()
        }
      })
    } else if (data && data.session && data.session.payment_status === 'unpaid') {
      setShowPaymentFailedAlert(true)
      setIsCreatingAccount(false)
      setShowBrowserWindowAlert(false)
    } else {
      setShowPaymentFailedAlert(false)
      setShowBrowserWindowAlert(false)
      setIsSessionVerified(false)
      setIsCreatingAccount(false)
    }
  }

  useEffect(() => {
    if (session_id && formData?.email) {
      stripeVerifyPayment()
    }
  }, [session_id, formData])

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('registration') || '{}')
    setFormData({ model: 'model-3', isWelcomePackIncluded: true, ...localStorageData })
  }, [])

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

            {status === 'success' && showBrowserWindowAlert && (
              <div className='alert flex w-full max-w-[672px] rounded-[12px] bg-Y-50 px-[40px] py-[16px] text-md font-500 text-R-800'>
                We are creating your account. Please don't close this browser window until we
                re-direct you to your account after completion.
              </div>
            )}

            {showPaymentFailedAlert && (
              <div className='alert flex w-full max-w-[672px] rounded-[12px] bg-R-50 px-[40px] py-[16px] text-md font-500 text-R-500'>
                We couldn't create your account due to payment failure. You may re-try with a
                different card or method.
              </div>
            )}

            <div className='w-[90%] pt-[32px] md:w-[672px]'>
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
                        <p className='text-base font-400 text-N-800'>
                          {formData?.isWelcomePackIncluded || isWelcomePackIncluded
                            ? `Tesla Owners UK Annual Subscription + Official Supporter Welcome Pack`
                            : `Tesla Owners UK Annual Subscription`}
                        </p>
                        <p className='text-sm font-500 text-N-600'>
                          <CheckBox
                            defaultChecked={
                              formData?.isWelcomePackIncluded || isWelcomePackIncluded
                            }
                            disabled={isCreatingAccount}
                            onChange={(e: any) => {
                              setIsWelcomePackIncluded(e.target.checked)
                              setSelectedMembershipProduct(
                                Number(
                                  process.env
                                    .NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITHOUT_WELCOME_PACK_ID
                                )
                              )
                              localStorage.setItem(
                                'registration',
                                JSON.stringify({
                                  ...formData,
                                  isWelcomePackIncluded: e.target.checked,
                                })
                              )
                            }}>
                            Include welcome pack
                          </CheckBox>
                        </p>
                      </div>

                      <div className='flex flex-col gap-[12px] pt-[24px] md:items-end md:pt-0 lg:items-end lg:pt-0'>
                        <p className='text-md font-500 text-B-500'>
                          {isWelcomePackIncluded
                            ? `£35.00/Year + £15.00 Welcome pack`
                            : `£35.00/Year`}
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
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, firstName: e.target.value })
                        )
                      }}
                      disabled={isCreatingAccount}
                      required
                    />
                    <TextField
                      placeholder='Enter last name'
                      label='Last name'
                      value={formData.lastName || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, lastName: e.target.value })
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, lastName: e.target.value })
                        )
                      }}
                      disabled={isCreatingAccount}
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
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, username: e.target.value })
                        )
                      }}
                      disabled={isCreatingAccount}
                      required
                    />
                    <TextField
                      placeholder='Enter email address'
                      label='Email address'
                      value={formData.email || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, email: e.target.value })
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, email: e.target.value })
                        )
                      }}
                      disabled={isCreatingAccount}
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
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, password: e.target.value })
                        )
                      }}
                      disabled={isCreatingAccount}
                      required
                    />
                    <TextField
                      type='password'
                      placeholder='Re-type password'
                      label='Confirm password'
                      value={formData.confirmPassword || ''}
                      onChange={(e: any) => {
                        setFormData({ ...formData, confirmPassword: e.target.value })
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, confirmPassword: e.target.value })
                        )
                      }}
                      disabled={isCreatingAccount}
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
                        localStorage.setItem('registration', JSON.stringify(formData))
                      }}
                      disabled={isCreatingAccount}
                    />
                  </div>

                  <div className='flex flex-col justify-between gap-[8px] md:flex-row md:gap-[48px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <DropdownMenu
                        label='Tesla Model'
                        list={teslaModels || []}
                        onChange={(e: any) => {
                          setFormData({ ...formData, model: e.target.value })
                          setDefaultModel(e.target.value)
                          localStorage.setItem(
                            'registration',
                            JSON.stringify({ ...formData, model: e.target.value })
                          )
                        }}
                        value={formData?.model || defaultModel}
                        placeholder='Select model'
                        disabled={isCreatingAccount}
                        required
                      />

                      <p className='text-sm font-500 text-N-600'>
                        Select your model of Tesla owned here (if multiple then pick the one that
                        matches the VIN No above)
                      </p>
                    </div>

                    <div className='flex h-[160px] w-[300px] flex-shrink-0 justify-center'>
                      {(formData?.model || defaultModel) &&
                        (formData?.model || defaultModel) !== 'other' && (
                          <img
                            src={`/images/models/${formData.model || defaultModel}.png`}
                            width={300}
                            height={160}
                            className='object-contain object-center'
                          />
                        )}
                    </div>
                  </div>

                  {isWelcomePackIncluded && (
                    <>
                      <div className='flex flex-col gap-[8px]'>
                        <TextField
                          placeholder='Enter name here'
                          label='Name to appear on the badge'
                          value={formData.badgeName || ''}
                          onChange={(e: any) => {
                            setFormData({ ...formData, badgeName: e.target.value })
                            localStorage.setItem(
                              'registration',
                              JSON.stringify({ ...formData, badgeName: e.target.value })
                            )
                          }}
                          disabled={isCreatingAccount}
                          required
                        />
                        <p className='text-sm font-500 text-N-600'>
                          So we can print your name badge please supply your name as you would like
                          it to appear on your badge
                        </p>
                      </div>

                      <div className='flex flex-col gap-[8px]'>
                        <TextField
                          placeholder='House number and street name'
                          label='Your location (to appear on badge)'
                          value={formData.locationName || ''}
                          onChange={(e: any) => {
                            setFormData({ ...formData, locationName: e.target.value })
                            localStorage.setItem(
                              'registration',
                              JSON.stringify({ ...formData, locationName: e.target.value })
                            )
                          }}
                          disabled={isCreatingAccount}
                          required
                        />
                        <p className='text-sm font-500 text-N-600'>
                          So we can print your name badge please supply your location (nearest large
                          town/city) e.g. Milton Keynes. This will appear directly below your name
                          on your badge.
                        </p>
                      </div>
                    </>
                  )}

                  <TextField
                    label='How did you find out about Tesla Owners UK'
                    required
                    placeholder='Google / Search engine'
                    value={formData.refSource || ''}
                    disabled={isCreatingAccount}
                    onChange={(e: any) => {
                      setFormData({ ...formData, refSource: e.target.value })
                      localStorage.setItem(
                        'registration',
                        JSON.stringify({ ...formData, refSource: e.target.value })
                      )
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
                        localStorage.setItem(
                          'registration',
                          JSON.stringify({ ...formData, privacyPolicy: e.target.checked })
                        )
                      }}
                      disabled={isCreatingAccount}
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
                      disabled={isCreatingAccount}
                      isLoading={
                        loadingLogout ||
                        loadingUpdateUser ||
                        loadingAddToCart ||
                        loadingClearCart ||
                        loadingCheckout
                      }
                      onClick={handleValidation}>
                      Proceed to payment
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
