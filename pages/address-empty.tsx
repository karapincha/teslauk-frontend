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

      <Header className='py-[24px]' />

      <div className='container pt-[40px] pb-[40px] md:pb-[80px] lg:flex lg:gap-[48px] lg:pb-[80px]'>
        <div className='dashboard-menu hidden lg:flex'>
          <div className='w-full'>
            <DashboardMenu />
          </div>
        </div>

        <div>
          <div className='heading'>
            <h4 className='text-h4 font-600 text-N-800'>Addresses</h4>
          </div>
          <div className='pt-[24px] md:pt-[40px] lg:pt-[32px]'>
            <div className='text-base font-400 text-N-600'>
              <p>The following addresses will be used on the checkout page by default.</p>
            </div>

            <div className='flex flex-col gap-[24px] pt-[24px] md:pt-[40px] lg:gap-[40px] lg:pt-[40px]'>
              <div className='text-base font-500 text-N-800'>
                <p className='mb-[16px]'>Billing address</p>
                <Link href='#'>
                  <Button
                    className='w-full text-base !font-600 !text-N-800 md:w-[unset] lg:w-[unset]'
                    appearance='secondary'>
                    Add
                  </Button>
                </Link>
              </div>

              <div className='text-base font-500 text-N-800'>
                <p className='mb-[16px]'>Shipping address</p>
                <Link href='#'>
                  <Button
                    className='w-full text-base !font-600 !text-N-800 md:w-[unset] lg:w-[unset]'
                    appearance='secondary'>
                    Add
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
