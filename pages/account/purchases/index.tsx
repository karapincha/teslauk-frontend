import { useState, useEffect } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Button } from '@/components/atoms'
import { MemberCard } from '@/components/molecules/MemberCard'
import { ArrowRightCircle } from 'react-feather'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { useViewport } from '@/utils'
import { PurchasesOrders } from '@/components/sections/PurchasesOrders'
import { AuthLayout } from '@/components/layouts'
import { useAppContext } from '@/context'
import { format } from 'date-fns'

const Page: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()
  const { fullUser, userOrders, refetchFullUser }: any = useAppContext()

  useEffect(() => {
    const fetchUserOrders = async () => {
      await refetchFullUser()
    }
    fetchUserOrders()

    return () => {}
  }, [])

  return (
    <>
      <Head>
        <title>Account Dashboard - Purchases - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <AuthLayout>
        <div className='container gap-[48px] pb-[40px] lg:grid lg:grid-cols-[160px_5fr] lg:pb-[80px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div className='flex w-full flex-col'>
            <h4 className='text-h4 font-600 text-N-800'>Purchases</h4>

            <ul className='flex w-full flex-col gap-[8px] overflow-auto pt-[32px] pb-[24px] md:w-[unset] lg:w-[unset]'>
              <li className='grid grid-cols-[0.75fr_1fr_1fr_1fr_1fr] gap-[24px] rounded-[4px] px-[12px] py-[4px]'>
                <span className='text-md text-N-800'>Order ID</span>
                <span className='text-md text-N-800'>Date</span>
                <span className='text-md text-N-800'>Status</span>
                <span className='text-md text-N-800'>Total</span>
                <span className='ml-auto text-md text-N-800'>Actions</span>
              </li>

              {userOrders?.map((order: any, index: number) => {
                const { id, orderNumber, date, status, total } = order || {}

                return (
                  <li
                    key={id || index}
                    className='grid grid-cols-[0.75fr_1fr_1fr_1fr_1fr] gap-[24px] rounded-[4px] border border-N-100 bg-white px-[12px] py-[4px]'>
                    <span className='text-md text-N-800'>#{orderNumber}</span>

                    <p className='text-md font-400 text-N-700'>{date.split('T')[0]}</p>

                    <p
                      className={CN(`text-md font-400 text-N-800`, {
                        'text-R-500': status === 'pending',
                        'text-G-500': status === 'completed',
                      })}>
                      {status.replace(/^\w/, (c: any) => c.toUpperCase())}
                    </p>

                    <span className='text-md text-N-800'>{total}</span>

                    <Link key={id || index} href={`/account/purchases/${orderNumber}`}>
                      <a className='ml-auto cursor-pointer text-md text-N-800 hover:text-B-500'>
                        View
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Page
