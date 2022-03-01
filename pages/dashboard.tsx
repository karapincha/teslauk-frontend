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

const Home: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()
  const upcomingEventsList = [
    {
      id: '0',
      label: 'Track Days',
      url: '#',
      date: '05 Jan',
    },
    {
      id: '1',
      label: 'Factory Tours',
      url: '#',
      date: '12 Jan',
    },
    {
      id: '2',
      label: 'Track Days',
      url: '#',
      date: '26 Jan',
    },
    {
      id: '3',
      label: 'Track Days',
      url: '#',
      date: '26 Jan',
    },
  ]

  const quickLinks = [
    {
      id: 0,
      label: 'Edit your password or account details',
      url: '#',
    },
    {
      id: 1,
      label: 'Manage shipping and billing address',
      url: '#',
    },
    {
      id: 2,
      label: 'Quick link 3',
      url: '#',
    },
  ]

  const recentOrdersList = [
    {
      id: '0',
      orderNumber: '#39155',
      label: 'Pending payment',
      url: '#',
      date: '21/10/2021',
      isCompleted: false,
    },
    {
      id: '1',
      orderNumber: '#39155',
      label: 'Delivered',
      url: '#',
      date: '21/10/2021',
      isCompleted: false,
    },
    {
      id: '2',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      date: '21/10/2021',
      isCompleted: true,
    },
    {
      id: '3',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      date: '21/10/2021',
      isCompleted: true,
    },
    {
      id: '4',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      date: '21/10/2021',
      isCompleted: true,
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

      <div className='container gap-[48px] pt-[40px] pb-[40px] lg:pb-[80px] lg:grid lg:grid-cols-[1fr_4fr_1fr]'>
        <div className='dashboard-menu hidden lg:flex'>
          <div className='w-full'>
            <DashboardMenu />
          </div>
        </div>

        <div>
          <h4 className='text-h4 font-600 text-N-800'>Hello Tim,</h4>
          {isMobile && (
            <div className='pt-[24px]'>
              <MemberCard
                name='Tim Fernando'
                email='tim@example.com'
                type='Supporter membership'
                expireDate='20/10/2021'
              />
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
          )}
          <div className='pt-0 lg:pt-[32px]'>
            <p className='mb-[16px] text-md text-N-600'>Quick links</p>
            <ul className='flex flex-col gap-[16px]'>
              {quickLinks.map(({ id, url, label }, index) => (
                <li key={id || index} className=''>
                  <a target='_blank' href={url} className='flex items-center gap-[12px]'>
                    <span className='text-N-400'>{<ArrowRightCircle size={24} />}</span>
                    <p className='text-base text-N-800 hover:text-B-500'>{label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='pt-[32px]'>
            <p className='mb-[16px] text-md text-N-600'>Recent orders</p>
            <ul className='flex flex-col gap-[16px]'>
              {recentOrdersList.map(({ id, orderNumber, url, label, date, isCompleted }, index) => (
                <li key={id || index} className='grid grid-cols-[0.75fr_1fr_3fr_1fr] gap-[24px]'>
                  <span className='text-base text-N-800'>{orderNumber}</span>
                  <p className='text-base font-400 text-N-600'>{date}</p>
                  <p
                    className={CN(`text-base font-400`, {
                      'text-N-800': !isCompleted,
                      'text-G-500': isCompleted,
                    })}>
                    {label}
                  </p>
                  <a target='_blank' href={url} className='font-600 text-N-800 hover:text-B-500'>
                    View
                  </a>
                </li>
              ))}
            </ul>
            <div className='pt-[16px]'>
              <Link href='#'>
                <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
                  View all orders
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className='flex'>
            {!isMobile && (
              <div>
                <MemberCard
                  name='Tim Fernando'
                  email='tim@example.com'
                  type='Supporter membership'
                  expireDate='20/10/2021'
                />
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
            )}
          </div>

          <div className='events w-full lg:w-[368px] rounded-[12px] bg-N-50 px-[24px] py-[24px] lg:px-[32px] lg:py-[32px]'>
            <p className='mb-[16px] text-md text-N-600'>Upcoming events</p>
            <ul className='flex flex-col gap-[16px]'>
              {upcomingEventsList.map(({ id, url, label, date }, index) => (
                <li key={id || index} className='flex justify-between'>
                  <a target='_blank' href={url} className='text-N-800 hover:text-B-500'>
                    {label}
                  </a>
                  <p className='text-base font-600 text-N-800'>{date}</p>
                </li>
              ))}
            </ul>
            <div className='pt-[16px]'>
              <Link href='#'>
                <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
                  View all events
                </Button>
              </Link>
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
