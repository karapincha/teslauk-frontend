import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox, DropdownMenu } from '@/components/atoms'
import { Common as CommonLayout } from '@/components/layouts'
import { toast } from '@/components/molecules'
import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR_CART,
  UPDATE_USER,
  GET_CURRENT_USER,
  LOGOUT,
} from '../../lib/graphql'

const Page: NextPage = () => {
  const router = useRouter()
  const modelsList: any = [
    {
      name: 'Tesla Model 3',
      slug: 'model-3',
    },
    {
      name: 'Tesla Model S',
      slug: 'model-s',
    },
    {
      name: 'Tesla Model X',
      slug: 'model-x',
    },
    {
      name: 'Tesla Model Y',
      slug: 'model-y',
    },
    {
      name: 'Tesla Roadster',
      slug: 'model-roadster',
    },
    {
      name: 'Other',
      slug: 'other',
    },
  ]

  const [productId, setProductId] = useState<any>(1734)
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
  const [errors, setErrors] = useState<any>({})

  const [logout, { loading: loadingLogout }] = useMutation(LOGOUT)
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER)
  const [addToCart, { loading: loadingAddToCart }] = useMutation(ADD_TO_CART, {
    variables: {
      productId,
    },
  })
  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [checkout, { loading: loadingCheckout }] = useMutation(CHECKOUT, {
    variables: {
      email,
      firstName,
      lastName,
      vin,
      model,
      refSource,
      username,
      password,
    },
  })

  const { loading: loadingCurrentUser, refetch: getCurrentUser } = useQuery(GET_CURRENT_USER, {
    skip: true,
  })

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

  /* CLEAR CART */
  const handleClearCart = () => {
    clearCart()
      .then(() => {
        return
      })
      .catch(() => {
        return
      })
  }

  /* FINALIZE */
  const handleFinalize = () => {
    getCurrentUser().then(({ data }: any) => {
      updateUser({
        variables: {
          id: data?.viewer?.databaseId,
          model: model,
          vin: vin,
          source: refSource,
        },
      })
        .then(() => {
          logout().catch(() => {
            return
          })
          return toast({
            message: 'Success! You are now being re-directed to the login page. ',
            type: 'success',
            onClose: router.push(`/auth/login`),
          })
        })
        .catch((e: any) => {
          logout().catch(() => {
            return
          })
          return toast({ message: e.message, type: 'error' })
        })
    })
  }

  /* HANDLE CHECKOUT */
  const handleCheckout = () => {
    checkout()
      .then(() => {
        return handleFinalize()
      })
      .catch((e: any) => {
        handleClearCart()
        return toast({ message: e.message, type: 'error' })
      })
  }

  /* HANDLE SUBMISSION */
  const handleSubmit = (e: any) => {
    e.preventDefault()

    addToCart()
      .then(() => {
        return handleCheckout()
      })
      .catch((e: any) => {
        handleClearCart()
        return toast({ message: e.message, type: 'error' })
      })
  }

  return (
    <>
      <Head>
        <title>Free member registration - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container'>
          <div className='flex flex-col items-center rounded-[8px] bg-[url(/images/hero-pattern.svg)] bg-cover bg-no-repeat py-[24px] md:pt-[40px] md:pb-[80px] lg:pt-[80px] lg:pb-[80px]'>
            <SectionHeading
              overline={'Register as a'}
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
                        setErrors({ ...errors, firstName: false })
                      }}
                      required
                      isError={errors.firstName === true}
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
                        list={modelsList || []}
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

                  <p className="text-md font-500 text-N-600 after:ml-[2px] after:text-B-500 after:content-['*']">
                    Rules and Privacy Policy
                  </p>
                </div>

                <div className='flex flex-col justify-between !pt-[12px] md:flex-row md:pt-[24px] lg:flex-row lg:pt-[24px]'>
                  <div className='flex gap-[12px]'>
                    <CheckBox
                      checked={privacyPolicy}
                      onChange={(e: any) => {
                        setPrivacyPolicy(e.target.checked)
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

                <div className='flex flex-col gap-[24px] pt-[24px] lg:pt-[16px]'>
                  <div className='flex w-full flex-wrap gap-[12px] lg:w-[unset]'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleValidation}
                      isLoading={
                        loadingAddToCart ||
                        loadingClearCart ||
                        loadingCheckout ||
                        loadingCurrentUser ||
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
