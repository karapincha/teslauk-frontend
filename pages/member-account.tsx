import CN from 'classnames'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Button, TextField } from '@/components/atoms'
import { MemberCard } from '@/components/molecules/MemberCard'
import { ArrowRightCircle } from 'react-feather'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { useViewport } from '@/utils'

const Home: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()
  const recentOrdersList = [
    {
      id: '0',
      product: `Tesla Owners UK Annual Supporter Fee + Official Supporter Welcome Pack
      Sold By: Tesla Owners UK `,
      url: '#',
      itemsCount: '1',
      price: '£35.00 / day',
      subTotal: '£35.00 / day',
      total: '£35.00 / day',
    },
  ]

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]'/>

      <div className='container pt-[40px] pb-[40px] lg:flex lg:gap-[48px] lg:pb-[80px]'>
        <div className='dashboard-menu hidden lg:flex'>
          <div className='w-full'>
            <DashboardMenu />
          </div>
        </div>

        <div>
          <div className='heading'>
            <h4 className='text-h4 font-600 text-N-800'>Account</h4>
          </div>
          <div className='personal-details pt-[24px] md:pt-[40px] lg:pt-[32px]'>
            <div className='pb-[16px] text-base font-500 text-N-800'>Personal details</div>
            <div className='input-field flex flex-col gap-[16px] lg:w-[600px]'>
              <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[48px]'>
                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>First Name</p>
                  <TextField />
                </div>
                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Last Name</p>
                  <TextField />
                </div>
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Display name</p>
                <TextField />
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Email address</p>
                <TextField />
              </div>
            </div>

            <div className='password pt-[24px] md:pt-[40px] lg:pt-[32px]'>
              <div className='pb-[16px] text-base font-500 text-N-800'>Password</div>

              <div className='flex flex-col gap-[16px] lg:w-[328px]'>
                <div className='flex flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>
                    Current password (leave blank to leave unchanged)
                  </p>
                  <TextField type='password' />
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>
                    New password (leave blank to leave unchanged)
                  </p>
                  <TextField type='password' />
                </div>
              </div>

              <div className='save-button pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                <Link href='#'>
                  <Button
                    className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                    appearance='primary'>
                    Save changes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupplierRibbon className='border-t border-N-100' />
      <Footer />
    </>
  )
}

export default Home
