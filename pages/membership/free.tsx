import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox, DropdownMenu } from '@/components/atoms'
import { Common as CommonLayout } from '@/components/layouts'
import { toast, PageLockOverlay } from '@/components/molecules'
import { ArrowUpRight, LogOut } from 'react-feather'
import Link from 'next/link'
import { teslaModels } from '@/static-data/tesla-models'
import { useQuery } from '@apollo/client'
import { VERIFY_USER } from '../../lib/graphql'

import { useAppContext } from '@/context'
import { useRegistration } from '@/utils/useRegistration'

const Page: NextPage = () => {
  const router = useRouter()
  const { user }: any = useAppContext()

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

  const [isLockedPage, setIsLockedPage] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [vin, setVin] = useState('')
  const [model, setModel] = useState('model-3')
  const [refSource, setRefSource] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState(false)

  const { refetch: verifyUser } = useQuery(VERIFY_USER, {
    skip: true,
  })

  /* Get LocalHost Data */
  const loadLocalStorageData: any = async () => {
    const promise = new Promise((resolve, reject) => {
      const localStorageData = JSON.parse(localStorage.getItem('registration') || '{}')
      const localStoragePaidAmount = JSON.parse(localStorage.getItem('paid') || '{}')
      resolve({ ...localStorageData, ...localStoragePaidAmount })
    })
    return promise
  }

  /* Handle Unlock page with Toast */
  const handleClose = ({ toastMessage, toastType }: any) => {
    setIsLockedPage(false)
    toast({ message: toastMessage, type: toastType })
  }

  /* HANDLE VALIDATION */
  const handleValidation = (e: any) => {
    e.preventDefault()

    if (!firstName) {
      return toast({ message: 'Please enter first name', type: 'error' })
    }

    if (!lastName) {
      return toast({ message: 'Please enter last name', type: 'error' })
    }

    if (!username) {
      return toast({ message: 'Please enter username', type: 'error' })
    }

    if (!email) {
      return toast({ message: 'Please enter email', type: 'error' })
    }

    if (!password) {
      return toast({ message: 'Please enter password', type: 'error' })
    }

    if (!confirmPassword) {
      return toast({ message: 'Please confirm password', type: 'error' })
    }

    if (password !== confirmPassword) {
      return toast({ message: "Passwords don't match", type: 'error' })
    }

    if (!vin) {
      return toast({ message: 'Please enter VIN number', type: 'error' })
    }

    if (!refSource) {
      return toast({ message: 'Please enter how did you find about us', type: 'error' })
    }

    if (!privacyPolicy) {
      return toast({ message: 'Please agree to Rules and Privacy Policy', type: 'error' })
    }

    return handleSubmit(e)
  }

  /* FINALIZE */
  const handleFinalize = async ({ orderId }: any) => {
    const res = await loadLocalStorageData()

    if (!res && !res.email) {
      return handleClose({
        toastMessage:
          'Failed to load user data from the submission, If the problem persists, please contact support@teslaowners.org.uk',
        toastType: 'error',
      })
    }

    runGetRegisteredUser({
      username,
      password,
      onSuccess: async ({ data }: any) => {
        updateUser({
          variables: {
            id: data?.viewer?.databaseId,
            model: model,
            vin: vin,
            source: refSource,
          },
        })
          .then(() => {
            runUpdateOrderStatus({
              variables: {
                orderId: orderId,
                status: 'COMPLETED',
              },
              onSuccess: async () => {
                await runClearCart()
                router.push('/account?newAccount=true')
              },
              onFail: async ({ message }: any) => {
                await logout()
                router.push('/account?orderStatusUpdate=failed')
                return handleClose({
                  toastMessage: message,
                  toastType: 'error',
                })
              },
            })
          })
          .catch(async ({ message }: any) => {
            await logout()
            return handleClose({
              toastMessage: message,
              toastType: 'error',
            })
          })
      },
      onFail: {},
    })
  }

  /* HANDLE SUBMISSION */
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLockedPage(true)

    const { data: logoutRes } = await logout()

    if (logoutRes.logout.status === 'SUCCESS') {
      verifyUser({ email: email, username: username })
        .then(({ data }: any) => {
          if (!data?.verifyUser?.byUsername?.id && !data?.verifyUser?.byEmail?.id) {
            return runCheckout({
              productId: Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_FREE_ID),
              variables: {
                email,
                firstName,
                lastName,
                vin,
                model,
                refSource,
                username,
                password,
                isPaid: true,
                paymentMethod: 'none',
              },
              onSuccess: ({ data }: any) => {
                console.log(`runCheckout`, data)

                if (data?.checkout?.order?.databaseId) {
                  return handleFinalize({
                    orderId: data?.checkout?.order?.databaseId,
                  })
                }

                return handleClose({
                  toastMessage:
                    'Something went wrong. Please contact us at membership@teslaowners.org.uk',
                  toastType: 'error',
                })
              },
              onFail: async ({ message }: any) => {
                await runClearCart()
                return handleClose({
                  toastMessage: message,
                  toastType: 'error',
                })
              },
            })
          } else {
            toast({
              message: 'An user already exists with provided email and/or username',
              type: 'error',
            })
          }
        })
        .catch((res: any) => {
          toast({ message: res.message, type: 'error' })
        })
    }
  }

  return (
    <>
      <Head>
        <title>Free member registration - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        {isLockedPage && (
          <PageLockOverlay
            heading='We are creating your account'
            description='Please do not close this window, until we are finished.'
          />
        )}

        <div className='container'>
          {/*  bg-[url(/images/hero-pattern.svg)] */}
          <div className='flex flex-col items-center rounded-[8px] bg-N-50 bg-cover bg-no-repeat py-[24px] md:pt-[40px] md:pb-[80px] lg:pt-[80px] lg:pb-[80px]'>
            <SectionHeading
              overline='Register as a'
              heading='Free associate member'
              align='center'
              headingClassName='!mb-0'
              className='mb-[20px]'
            />

            <div className='w-[90%] pt-[32px] md:w-[672px] md:pt-[32px] lg:w-[672px] lg:pt-[32px]'>
              <div className='w-full rounded-[8px] bg-white px-[16px] py-[32px] md:px-[40px] md:py-[32px] lg:px-[40px] lg:py-[32px]'>
                <div className='flex flex-col gap-[16px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      placeholder='Enter first name'
                      value={firstName}
                      label='First Name'
                      onChange={(e: any) => {
                        setFirstName(e.target.value)
                      }}
                      required
                    />
                    <TextField
                      placeholder='Enter last name'
                      label='Last name'
                      value={lastName}
                      onChange={(e: any) => {
                        setLastName(e.target.value)
                      }}
                      required
                    />
                  </div>

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      placeholder='Enter username'
                      label='Username'
                      value={username}
                      onChange={(e: any) => {
                        setUsername(e.target.value)
                      }}
                      required
                    />
                    <TextField
                      placeholder='Enter email address'
                      label='Email address'
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value)
                      }}
                      required
                    />
                  </div>

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      type='password'
                      placeholder='Enter password here'
                      label='Password'
                      value={password}
                      onChange={(e: any) => {
                        setPassword(e.target.value)
                      }}
                      required
                    />
                    <TextField
                      type='password'
                      placeholder='Re-type password'
                      label='Confirm password'
                      value={confirmPassword}
                      onChange={(e: any) => {
                        setConfirmPassword(e.target.value)
                      }}
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-[4px]'>
                    <TextField
                      label='Vehicle VIN No (Available from app)'
                      required
                      placeholder='Enter vehicle Vin No'
                      value={vin}
                      onChange={(e: any) => {
                        setVin(e.target.value)
                      }}
                    />
                  </div>

                  <div className='flex flex-col justify-between gap-[8px] md:flex-row md:gap-[48px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <DropdownMenu
                        label='Tesla Model'
                        list={teslaModels || []}
                        onChange={(e: any) => {
                          setModel(e.target.value)
                        }}
                        value={model}
                        placeholder='Select model'
                        required
                      />

                      <p className='text-sm font-500 text-N-600'>
                        Select your model of Tesla owned here (if multiple then pick the one that
                        matches the VIN No above)
                      </p>
                    </div>

                    <div className='flex h-[160px] w-[300px] flex-shrink-0 justify-center'>
                      {model && model !== 'other' && (
                        <img
                          src={`/images/models/${model}.png`}
                          width={300}
                          height={160}
                          className='object-contain object-center'
                        />
                      )}
                    </div>
                  </div>

                  <TextField
                    label='How did you find out about Tesla Owners UK'
                    required
                    placeholder='Google / Search engine'
                    value={refSource}
                    onChange={(e: any) => {
                      setRefSource(e.target.value)
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
                          Club???s rules
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
                      checked={privacyPolicy}
                      onChange={(e: any) => {
                        setPrivacyPolicy(e.target.checked)
                      }}>
                      By clicking, I agree to adhere to the Club Rules and to the Club Privacy
                      Policy (outlined in the footer below). I agree that the Club may contact me
                      for the purposes of membership administration, marketing and other
                      communications as set out in our Club Privacy Policy. You may opt out at any
                      time.
                    </CheckBox>
                  </div>
                </div>

                <div className='flex flex-col gap-[24px] pt-[24px] lg:pt-[28px]'>
                  <div className='flex w-full flex-wrap gap-[12px] lg:w-[unset]'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleValidation}
                      isLoading={
                        loadingAddToCart ||
                        loadingClearCart ||
                        loadingCheckout ||
                        loadingUpdateUser ||
                        loadingLogout
                      }>
                      {({ isLoading }: any) => {
                        return isLoading ? `Registering` : `Register now`
                      }}
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
