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
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
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
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex gap-[48px] py-[40px] md:pb-[80px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div className='flex w-full flex-col'>
            <div>
              <h4 className='pb-[24px] text-h4 font-600 text-N-800 md:pb-0'>Membership</h4>
            </div>
            <div className='flex flex-col-reverse justify-between md:flex-row lg:flex-row'>
              <div className='lg:w-full'>
                <div className='membership-details'>
                  <div className='pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                    <div className='text-base font-500 text-N-800'>Membership details</div>
                    <div className='flex gap-[64px] pt-[16px] text-base lg:gap-[32px]'>
                      <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>Name</p>
                          <p>Tim Fernando</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>Email</p>
                          <p>tim@example.com</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>Type</p>
                          <p>Supporter membership</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>ID</p>
                          <p>5867</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>Status</p>
                          <p className='font-600 text-G-500'>Active</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>Start date</p>
                          <p>20/10/2021</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                          <p className='w-[104px] text-md font-500 text-N-600'>Expires on</p>
                          <p className='font-600 text-B-500'>20/10/2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                    <Link href='#'>
                      <Button
                        className='text-base !font-600 !text-N-800'
                        iconAfter={<i className='ri-arrow-right-line text-lg' />}
                        appearance='link'>
                        Supporter membership agreement
                      </Button>
                    </Link>
                  </div>

                  <div className='w-full pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                    <Link href='#'>
                      <Button
                        className='w-full text-base !font-600 !text-N-800 md:w-[unset] lg:w-[unset]'
                        appearance='secondary'
                        view='solid'>
                        Cancel membership
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='member-card flex flex-col items-center md:pt-[40px] lg:h-[400px] lg:pt-0'>
                <MemberCard
                  name='Tim Fernando'
                  email='tim@example.com'
                  type='Supporter membership'
                  expireDate='20/10/2021'
                />
                <div className='hidden md:inline'>
                  <p className='py-[24px] text-center text-md text-N-600'>
                    Android? Install this{' '}
                    <a target='_blank' href='' className='underline'>
                      app
                    </a>{' '}
                    & follow this{' '}
                    <a target='_blank' href='' className='underline'>
                      guide
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className='subscriptions pt-[40px] md:pt-[80px] lg:pt-[80px]'>
              <div className='text-base font-500 text-N-800'>Subscription totals</div>
              <div className='w-full pt-[16px] md:pt-[24px] lg:pt-[24px]'>
                <div className='flex flex-col gap-[16px] md:w-[unset] lg:w-[unset]'>
                  <div className='grid grid-cols-[2fr_2fr_1fr_1fr] gap-[16px] bg-N-50 py-[4px] px-[8px] text-sm font-500 text-N-600 md:grid-cols-[8fr_2fr_2fr_2fr] md:pl-[16px]  md:text-md lg:grid-cols-[8fr_2fr_2fr_2fr] lg:pl-[16px] lg:text-md'>
                    <div>Product</div>
                    <div>No. of items</div>
                    <div>Total</div>
                    <div>Actions</div>
                  </div>
                </div>
                <div>
                  <ul className='flex flex-col gap-[16px] bg-white text-sm  md:w-[unset] md:text-base lg:w-[unset] lg:text-base'>
                    {recentOrdersList.map(({ id, url, product, itemsCount, price }, index) => (
                      <li
                        key={id || index}
                        className='grid grid-cols-[2fr_2fr_1fr_1fr] gap-[16px] border-b-[1px] border-N-100 py-[20px] px-[8px] md:grid-cols-[8fr_2fr_2fr_2fr] md:pl-[16px] lg:grid-cols-[8fr_2fr_2fr_2fr] lg:pl-[16px]'>
                        <p className='font-400 text-N-600 md:text-N-800 lg:text-N-600'>{product}</p>
                        <p className='font-400 text-N-600'>{itemsCount}</p>
                        <p>{price}</p>
                        <div className='flex gap-[16px]'>
                          <a
                            target='_blank'
                            href={url}
                            className='text-base font-600 text-N-800 hover:text-B-500'>
                            View
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul className='bg-white'>
                    <li className='grid grid-cols-[4fr_2fr] border-b-[1px] border-N-100 py-[20px] px-[8px] md:grid-cols-[5fr_2fr] md:pl-[16px] lg:grid-cols-[5fr_2fr] lg:pl-[16px]'>
                      <p className='text-md font-600 text-N-600'>Sub total:</p>
                      <p className='text-sm font-600 md:text-base lg:text-base'>£35.00 / day</p>
                    </li>
                    <li className='tex-md grid grid-cols-[4fr_2fr] border-b-[1px] border-N-100 py-[20px] px-[8px] md:grid-cols-[5fr_2fr] md:pl-[16px]  lg:grid-cols-[5fr_2fr] lg:pl-[16px]'>
                      <p className='text-md font-600 text-N-600'>Total:</p>
                      <p className='text-sm font-600 md:text-base lg:text-base'>£35.00 / day</p>
                    </li>
                  </ul>
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
