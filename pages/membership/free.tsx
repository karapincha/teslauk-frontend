import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox, DropdownMenu } from '@/components/atoms'
import { Common as CommonLayout } from '@/components/layouts'
import { toast } from '@/components/molecules'
import { useMutation, useQuery } from '@apollo/client'
import {
  SIGNUP_FREE_MEMBER,
  ADD_TO_CART,
  CHECKOUT,
  GET_CART,
  CLEAR_CART,
  UPDATE_ORDER,
  UPDATE_USER,
  GET_CURRENT_USER,
  LOGIN,
  LOGOUT,
} from '../../lib/graphql'
import { useAppContext } from '@/context'

const Page: NextPage = () => {
  const { setToken }: any = useAppContext()

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
  const [model, setModel] = useState('')
  const [refSource, setRefSource] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState(false)

  const [orderId, setOrderId] = useState<any>()
  const [userId, setUserId] = useState<any>()
  const [errors, setErrors] = useState<any>({})

  useEffect(() => {
    console.log(`UserId updated - `, userId)
  }, [userId])

  const [registerFreeMember, { data: registerData, loading: loadingRegister }] = useMutation(
    SIGNUP_FREE_MEMBER,
    {
      variables: {
        firstName,
        lastName,
        username,
        password,
        email,
        vin,
        model,
        refSource,
      },
    }
  )

  const [addToCart, { loading: loadingAddToCart }] = useMutation(ADD_TO_CART, {
    variables: {
      productId,
    },
  })

  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER, {
    variables: {},
  })

  const [login, { loading: loadingLogin, data: loginData }] = useMutation(LOGIN, {
    variables: {
      username,
      password,
    },
    refetchQueries: [{ query: GET_CURRENT_USER }],
  })

  const [logout, { loading: loadingLogout }] = useMutation(LOGOUT)

  useEffect(() => {
    console.log(loginData)
  }, [loginData])

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

  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [updateOrder, { loading: loadingUpdateOrder }] = useMutation(UPDATE_ORDER, {
    variables: {
      id: orderId,
    },
  })

  const { loading: loadingCart, refetch: getCart } = useQuery(GET_CART, { skip: true })
  const {
    loading: loadingCurrentUser,
    refetch: getCurrentUser,
    data: currentUserData,
  } = useQuery(GET_CURRENT_USER, {
    skip: true,
  })

  useEffect(() => {
    console.log(currentUserData)
  }, [currentUserData])

  /* Handle add product to cart in the background (Free membership) */
  const handleAddToCart = () => {
    addToCart()
      .then((e: any) => {
        console.log(e)
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  const handleFinalize = () => {
    login({
      variables: {
        username,
        password,
      },
      refetchQueries: [{ query: GET_CURRENT_USER }],
    })
      .then((res: any) => {
        // localStorage.setItem('token', loginRes.login.authToken)
        // localStorage.setItem('userID', loginRes.login.user.databaseId)

        getCurrentUser().then(({ data }: any) => {
          console.log(`After getting current user data -`, data)
          updateUser({
            variables: {
              id: data.viewer.databaseId,
              model: model,
              vin: vin,
              source: refSource,
            },
          })
            .then((e: any) => {
              localStorage.clear()
              logout().catch(() => {})
              return toast({ message: 'success', type: 'success' })
            })
            .catch((e: any) => {
              localStorage.clear()
              logout().catch(() => {})
              return toast({ message: e.message, type: 'error' })
            })
        })

        // updateUser({
        //   variables: {
        //     id: loginRes.login.user.databaseId,
        //     model: model,
        //     vin: vin,
        //     source: refSource,
        //   },
        // })
        //   .then((e: any) => {
        //     localStorage.clear()
        //     return toast({ message: 'success', type: 'success' })
        //   })
        //   .catch((e: any) => {
        //     localStorage.clear()
        //     return toast({ message: e.message, type: 'error' })
        //   })
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  const handleGetCart = () => {
    getCart()
      .then((e: any) => {
        console.log(e)
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  const handleUpdateUser = () => {
    updateUser({ variables: { id: 3, model: 'Model S', source: 'Google', vin: '777' } })
      .then((e: any) => {
        console.log(e)
        return toast({ message: 'success', type: 'success' })
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  const handleClearCart = () => {
    clearCart()
      .then((e: any) => {
        console.log(e)
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  // const handleUpdateOrderToCompleted = (data: any) => {
  //   setOrderId(data.checkout.order.id)
  //   updateOrder()
  //     .then((e: any) => {
  //       handleClearCart()
  //       return toast({ message: 'Complete', type: 'success' })
  //     })
  //     .catch((e: any) => {
  //       handleClearCart()
  //       return toast({ message: e.message, type: 'error' })
  //     })
  // }

  const handleCheckout = () => {
    checkout()
      .then(({ data }: any) => {
        handleFinalize()

        // handleUpdateOrderToCompleted(data)
        return toast({ message: 'Complete', type: 'success' })
      })
      .catch((e: any) => {
        handleClearCart()
        return toast({ message: e.message, type: 'error' })
      })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    localStorage.clear()

    addToCart()
      .then((e: any) => {
        handleCheckout()
      })
      .catch(() => {
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
                      }}
                    />
                    <TextField
                      placeholder='Enter last name'
                      label='Last name'
                      value={lastName}
                      onChange={(e: any) => {
                        setLastName(e.target.value)
                      }}
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
                        placeholder='Select model'
                      />

                      <p className='text-sm font-500 text-N-600'>
                        Select your model of Tesla owned here (if multiple then pick the one that
                        matches the VIN No above)
                      </p>
                    </div>

                    {model && model !== 'other' && (
                      <div className='flex justify-center'>
                        <img
                          src={`/images/models/${model}.png`}
                          width={300}
                          height='260'
                          className='object-contain object-center'
                        />
                      </div>
                    )}
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
                      onClick={handleSubmit}
                      isLoading={loadingRegister}>
                      Register Now
                    </Button>

                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleAddToCart}
                      isLoading={loadingAddToCart}>
                      Add to cart
                    </Button>

                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleGetCart}
                      isLoading={loadingCart}>
                      Get Cart
                    </Button>

                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleCheckout}
                      isLoading={loadingCheckout}>
                      Checkout
                    </Button>

                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleClearCart}
                      isLoading={loadingClearCart}>
                      Clear Cart
                    </Button>

                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleUpdateUser}
                      isLoading={loadingClearCart}>
                      Update user
                    </Button>

                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleFinalize}>
                      handleFinalize
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
