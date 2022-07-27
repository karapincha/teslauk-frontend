import type { NextPage } from 'next'
import CN from 'classnames'
import Link from 'next/link'
import Head from 'next/head'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useAppContext } from '@/context'

import { toast } from '@/components/molecules'
import { Button, TextField } from '@/components/atoms'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { Common as CommonLayout } from '@/components/layouts'

import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR_CART,
  UPDATE_PROFILE,
  GET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  UPDATE_ORDER,
} from '../../lib/graphql'

const Page: NextPage = () => {
  const router = useRouter()
  const [updateUserObject, setUpdateUserObject] = useState<any>({})

  const { fullUser, user, userOrders, refetchUser }: any = useAppContext()

  const initialVariables = {
    id: user?.databaseId,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    password: '',
  }

  const [updateProfile, { loading: loadingUpdateProfile }] = useMutation(UPDATE_PROFILE, {
    variables: initialVariables,
  })

  const handleProfileUpdate = (e: any) => {
    e.preventDefault()

    updateProfile({
      variables: {
        id: user?.databaseId,
        firstName: updateUserObject?.firstName,
        lastName: updateUserObject?.lastName,
        email: updateUserObject?.email,
        password: updateUserObject?.password,
      },
    })
      .then(({ data }: any) => {
        toast({ message: 'Successfully updated', type: 'success' })

        refetchUser()
          .then((res: any) => {
            // setUpdateUserObject(initialVariables)
          })
          .catch((e: any) => {})
      })
      .catch((e: any) => {})
  }

  // useEffect(() => {
  //   console.log(fullUser)
  // }, [fullUser])

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container gap-[48px] pb-[40px] lg:grid lg:grid-cols-[160px_5fr] lg:pb-[80px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div className='flex w-full flex-col'>
            <h4 className='text-h4 font-600 text-N-800'>Manage Account</h4>

            <div className='personal-details w-full pt-[24px] md:pt-[32px]'>
              <div className='pb-[16px] text-base font-500 text-N-800'>Personal details</div>

              <div className='flex max-w-[600px] flex-col'>
                <div className='input-field flex flex-col gap-[16px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <div className='flex w-full flex-col gap-[4px]'>
                      <p className='text-md text-N-600'>First Name</p>
                      <TextField
                        placeholder='Enter first name'
                        defaultValue={user?.firstName}
                        onChange={(e: any) => {
                          setUpdateUserObject({ ...updateUserObject, firstName: e.target.value })
                        }}
                      />
                    </div>

                    <div className='flex w-full flex-col gap-[4px]'>
                      <p className='text-md text-N-600'>Last Name</p>
                      <TextField
                        placeholder='Enter last name'
                        defaultValue={user?.lastName}
                        onChange={(e: any) => {
                          setUpdateUserObject({ ...updateUserObject, lastName: e.target.value })
                        }}
                      />
                    </div>
                  </div>

                  <div className='flex w-full flex-col gap-[4px]'>
                    <p className='text-md text-N-600'>Email address</p>
                    <TextField
                      placeholder='Enter email address'
                      defaultValue={user?.email}
                      onChange={(e: any) => {
                        setUpdateUserObject({ ...updateUserObject, email: e.target.value })
                      }}
                    />
                  </div>
                </div>

                <div className='password w-full pt-[24px] md:pt-[40px]'>
                  <div className='pb-[16px] text-base font-500 text-N-800'>
                    Password (leave blank to keep unchanged)
                  </div>

                  <div className='grid w-full grid-cols-2 gap-[16px]'>
                    <div className='flex flex-col gap-[4px]'>
                      <p className='text-md text-N-600'>New password</p>
                      <TextField
                        type='password'
                        placeholder='Enter new password here'
                        onChange={(e: any) => {
                          setUpdateUserObject({ ...updateUserObject, password: e.target.value })
                        }}
                      />
                    </div>
                  </div>

                  <div className='save-button pt-[24px] md:pt-[40px]'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'
                      onClick={handleProfileUpdate}>
                      Save changes
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
