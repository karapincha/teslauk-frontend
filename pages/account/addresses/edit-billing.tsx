import type { NextPage } from 'next'
import CN from 'classnames'
import Link from 'next/link'
import Head from 'next/head'

import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context'

import { toast } from '@/components/molecules'
import { Button, CheckBox, TextField } from '@/components/atoms'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { Common as CommonLayout } from '@/components/layouts'

import { UPDATE_BILLING } from '../../../lib/graphql'

const Page: NextPage = () => {
  const router = useRouter()
  const { fullUser, user, userOrders, refetchUser }: any = useAppContext()

  const initialVariables = {
    id: fullUser?.customer?.id,
    address1: fullUser?.customer?.billing?.address1,
    address2: fullUser?.customer?.billing?.address2,
    city: fullUser?.customer?.billing?.city,
    company: fullUser?.customer?.billing?.company,
    country: fullUser?.customer?.billing?.country,
    email: fullUser?.customer?.billing?.email,
    firstName: fullUser?.customer?.billing?.firstName,
    lastName: fullUser?.customer?.billing?.lastName,
    phone: fullUser?.customer?.billing?.phone,
    postcode: fullUser?.customer?.billing?.postcode,
    state: fullUser?.customer?.billing?.state,
  }

  const [updatableAddress, setUpdatableAddress] = useState<any>({})

  const [updateBilling, { loading: loadingUpdateBilling }] = useMutation(UPDATE_BILLING, {
    variables: initialVariables,
  })

  const handleAddressChange = () => {
    updateBilling({
      variables: { ...initialVariables, ...updatableAddress },
    })
      .then((res: any) => {
        toast({ message: 'Successfully updated', type: 'success' })

        refetchUser()
          .then((res: any) => {})
          .catch((e: any) => {
            return toast({ message: e.message, type: 'error' })
          })
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  return (
    <>
      <Head>
        <title>Edit billing address - Account - Tesla Owners UK</title>
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
            <div className='flex pb-[24px]'>
              <Link href='/account/addresses'>
                <Button
                  appearance='secondary'
                  size='sm'
                  iconBefore={<i className='ri-arrow-left-s-line' />}>
                  Back
                </Button>
              </Link>
            </div>

            <h4 className='text-h4 font-600 text-N-800'>Edit billing address</h4>

            <div className='personal-details w-full pt-[24px]'>
              <div className='flex flex-col'>
                <div className='input-field flex flex-col gap-[16px] pt-[16px] lg:max-w-[600px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <div className='flex w-full flex-col gap-[4px]'>
                      <TextField
                        label='First Name'
                        defaultValue={fullUser?.customer?.billing?.firstName}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, firstName: e.target.value })
                        }}
                      />
                    </div>
                    <div className='flex w-full flex-col gap-[4px]'>
                      <TextField
                        label='Last Name'
                        defaultValue={fullUser?.customer?.billing?.lastName}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, lastName: e.target.value })
                        }}
                      />
                    </div>
                  </div>

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <div className='flex w-full flex-col gap-[4px]'>
                      <TextField
                        label='Email address'
                        defaultValue={fullUser?.customer?.billing?.email}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, email: e.target.value })
                        }}
                      />
                    </div>

                    <div className='flex w-full flex-col gap-[4px]'>
                      <TextField
                        label='Phone'
                        defaultValue={fullUser?.customer?.billing?.phone}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, phone: e.target.value })
                        }}
                      />
                    </div>
                  </div>

                  {/* <div className='flex w-full flex-col gap-[4px]'>
                    <div className='flex flex-col gap-[16px]'>
                      <TextField
                        
                        defaultValue={fullUser?.customer?.billing?.company}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, company: e.target.value })
                        }}
                      />
                    </div>
                  </div> */}

                  <div className='flex w-full flex-col gap-[4px]'>
                    <div className='flex flex-col gap-[16px]'>
                      <TextField
                        label='Address'
                        defaultValue={fullUser?.customer?.billing?.address1}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, address1: e.target.value })
                        }}
                      />
                      {/* <TextField
                        defaultValue={fullUser?.customer?.billing?.address2}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, address2: e.target.value })
                        }}
                      /> */}
                    </div>
                  </div>

                  <div className='flex w-full flex-col gap-[4px]'>
                    <TextField
                      label='City / Town'
                      defaultValue={fullUser?.customer?.billing?.city}
                      onChange={(e: any) => {
                        setUpdatableAddress({ ...updatableAddress, city: e.target.value })
                      }}
                    />
                  </div>

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <div className='flex w-full flex-col gap-[4px]'>
                      <TextField
                        label='Zip / Postal Code'
                        defaultValue={fullUser?.customer?.billing?.postcode}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, postcode: e.target.value })
                        }}
                      />
                    </div>

                    <div className='flex w-full flex-col gap-[4px]'>
                      <TextField
                        label='State / Province / Region'
                        defaultValue={fullUser?.customer?.billing?.state}
                        onChange={(e: any) => {
                          setUpdatableAddress({ ...updatableAddress, state: e.target.value })
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className='save-button pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                  <Button
                    className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                    appearance='primary'
                    isLoading={loadingUpdateBilling}
                    onClick={handleAddressChange}>
                    Save address
                  </Button>
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
