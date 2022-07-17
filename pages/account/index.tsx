import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CN from 'classnames'
import { useQuery } from '@apollo/client'

import { ArrowRightCircle } from 'react-feather'
import { Button } from '@/components/atoms'
import { MemberCard } from '@/components/molecules/MemberCard'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { AuthLayout } from '@/components/layouts'

import { useRouter } from 'next/router'
import { useViewport } from '@/utils'
import { useAppContext } from '@/context'

import { GET_FULL_USER } from '../../lib/graphql'

const Page: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()
  const { user }: any = useAppContext()

  const [_subscriptions, _setSubscriptions] = useState<any>()
  const [_subscribedProducts, _setSubscribedProducts] = useState<any>()
  const [_hasFreeMembership, _setHasFreeMembership] = useState<any>(false)
  const [_hasPaidMembership, _setHasPaidMembership] = useState<any>(false)
  const [_hasPaidMembershipWithPack, _setHasPaidMembershipWithPack] = useState<any>(false)
  const [_paidMembershipRenewalDate, _setPaidMembershipRenewalDate] = useState<any>()
  const [_paidMembershipWithPackRenewalDate, _setPaidMembershipWithPackRenewalDate] =
    useState<any>()

  const { data: fullUser, refetch: fetchFullUser } = useQuery(GET_FULL_USER, {
    variables: {
      id: user?.id,
    },
    skip: true,
  })

  /* Fetch the full user again on global user id change */
  useEffect(() => {
    console.log(user)

    if (user && user?.id) {
      fetchFullUser()
    }
  }, [user])

  /* Filter and set user's active subscriptions and products */
  useEffect(() => {
    let subscriptions = []

    if (fullUser?.activeSubscriptions) {
      subscriptions = fullUser?.activeSubscriptions?.map((subscription: any) => {
        const productsJson = subscription?.products ? JSON.parse(subscription?.products) : {}
        const dataJson = subscription?.data_json ? JSON.parse(subscription?.data_json) : {}
        const mergedSubscriptionData = {
          ...subscription,
          ...dataJson,
          products: productsJson,
          data_json: `stripped`,
        }

        _setSubscribedProducts(productsJson?.map((product: any) => product))
        return mergedSubscriptionData
      })
    }

    _setSubscriptions(subscriptions)
  }, [fullUser])

  /* Check if user has memberships (Free / Paid) */
  useEffect(() => {
    const hasFreeMembership = _subscribedProducts?.filter((product: any) => {
      if (product.product_id === Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_FREE_ID)) {
        return product
      }
    })

    const hasPaidMembership = _subscribedProducts?.filter((product: any) => {
      if (
        product.product_id ===
        Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITH_WELCOME_PACK_ID)
      ) {
        return product
      }
    })

    const hasPaidMembershipWithPack = _subscribedProducts?.filter((product: any) => {
      if (
        product.product_id ===
        Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITHOUT_WELCOME_PACK_ID)
      ) {
        return product
      }
    })

    _setHasFreeMembership(hasFreeMembership)
    _setHasPaidMembership(hasPaidMembership)
    _setHasPaidMembershipWithPack(hasPaidMembershipWithPack)
  }, [_subscribedProducts])

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

  const renderMembershipCard = () => {
    console.log(_hasFreeMembership?.length ? _hasFreeMembership[0] : '')

    return (
      <>
        <MemberCard
          name={`${user?.firstName} ${user?.lastName}`}
          email={user?.email}
          type={
            (_hasPaidMembershipWithPack?.length && `Supporter Membership`) ||
            (_hasPaidMembership?.length && `Supporter Membership`) ||
            (_hasFreeMembership?.length && 'Free Membership') ||
            `N/A`
          }
          expireDate={_paidMembershipRenewalDate || 'Never'}
        />
        <p className='py-[24px] text-center text-md text-N-600'>
          Android? Install this
          <a target='_blank' href='' className='underline'>
            app
          </a>
          & follow this
          <a target='_blank' href='' className='underline'>
            guide
          </a>
          .
        </p>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Account Dashboard - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <AuthLayout>
        <div className='container gap-[48px] pb-[40px] lg:grid lg:grid-cols-[1fr_4fr_1fr] lg:pb-[80px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div>
            <h4 className='text-h4 font-600 text-N-800'>Hello {`${user?.firstName}, Good Day!`}</h4>

            {isMobile && <div className='pt-[24px]'>{renderMembershipCard()}</div>}

            <div className='pt-0 lg:pt-[40px]'>
              <p className='mb-[16px] text-md text-N-600'>Quick links</p>

              <ul className='flex flex-col gap-[8px]'>
                {quickLinks.map(({ id, url, label }, index) => (
                  <li key={id || index}>
                    <Link href={url}>
                      <a className='flex items-center gap-[12px] text-md'>
                        <span className='text-N-400'>{<ArrowRightCircle size={20} />}</span>
                        <p className='text-N-800 hover:text-B-500'>{label}</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='scrollbar-py-[12px] scrollbar-track-rounded-full scrollbar-thumb-rounded-full w-full overflow-auto overflow-y-scroll pt-[40px] scrollbar-thin scrollbar-track-N-100 scrollbar-thumb-N-300'>
              <p className='mb-[16px] text-md text-N-600'>Recent orders</p>

              <ul className='flex w-[600px] flex-col gap-[8px] overflow-auto pb-[24px] md:w-[unset] lg:w-[unset]'>
                {recentOrdersList.map(
                  ({ id, orderNumber, url, label, date, isCompleted }, index) => (
                    <li
                      key={id || index}
                      className='grid grid-cols-[0.75fr_1fr_3fr_1fr] gap-[24px]'>
                      <span className='text-md text-N-800'>{orderNumber}</span>
                      <p className='text-md font-400 text-N-600'>{date}</p>
                      <p
                        className={CN(`text-md font-400`, {
                          'text-N-800': !isCompleted,
                          'text-G-500': isCompleted,
                        })}>
                        {label}
                      </p>

                      <Link href={url}>
                        <a className='text-md text-N-800 hover:text-B-500'>View</a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className='pt-[24px] md:pt-[16px] lg:pt-[0]'>
              <Link href='/account/orders'>
                <Button
                  iconAfter={<i className='ri-arrow-right-line text-lg' />}
                  appearance='link'
                  size='sm'>
                  View all orders
                </Button>
              </Link>
            </div>
          </div>

          <div className='justify-end md:flex md:flex-row-reverse md:gap-[24px] lg:flex lg:flex-col'>
            <div className='flex'>
              {!isMobile && <div className='md:w-full'>{renderMembershipCard()}</div>}
            </div>

            <div className='events w-full rounded-[8px] bg-N-50 px-[24px] py-[24px] md:w-[340px] lg:w-[368px] lg:px-[32px] lg:py-[32px]'>
              <p className='mb-[16px] text-md text-N-600'>Upcoming events</p>

              <ul className='flex flex-col gap-[8px]'>
                {upcomingEventsList.map(({ id, url, label, date }, index) => (
                  <li key={id || index} className='flex justify-between'>
                    <a target='_blank' href={url} className='text-md text-N-800 hover:text-B-500'>
                      {label}
                    </a>
                    <p className='text-md text-N-800'>{date}</p>
                  </li>
                ))}
              </ul>

              <div className='pt-[8px]'>
                <Link href='/events'>
                  <Button
                    iconAfter={<i className='ri-arrow-right-line text-lg' />}
                    appearance='link'
                    size='sm'>
                    View all events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData, user }: any) {
  return {
    props: {
      preview,
    },
    revalidate: 1,
  }
}

export default Page
