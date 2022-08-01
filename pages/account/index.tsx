import _ from 'lodash'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CN from 'classnames'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { ArrowRightCircle } from 'react-feather'
import { MemberCard } from '@/components/molecules/MemberCard'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { AuthLayout } from '@/components/layouts'
import { UpdateOrderAddresses } from '@/components/forms'

import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useViewport } from '@/utils'
import { useAppContext } from '@/context'

const Page: NextPage = () => {
  const { width, height } = useWindowSize()
  const router = useRouter()
  const { newAccount } = router?.query
  const { isDesktop, isMobile, isTablet } = useViewport()
  const { isSupporter, fullUser, fullUserLoading, user, userOrders }: any = useAppContext()

  const [_subscriptions, _setSubscriptions] = useState<any>()
  const [_subscribedProducts, _setSubscribedProducts] = useState<any>()
  const [_activeSubscription, _setActiveSubscription] = useState<any>()
  const [_expiryDate, _setExpiryDate] = useState<any>()
  const [_showShippingAddressModal, _setShowShippingAddressModal] = useState(false)
  const [_subscriptionOrder, _setSubscriptionOrder] = useState<any>({})

  /* Filter and set user's active subscriptions and products */
  // useEffect(() => {
  //   /* Subscriptions */
  //   let subscriptions: any = []

  //   if (fullUser?.activeSubscriptions) {
  //     subscriptions = fullUser?.activeSubscriptions?.map((subscription: any) => {
  //       const productsJson = subscription?.products ? JSON.parse(subscription?.products) : {}
  //       const dataJson = subscription?.data_json ? JSON.parse(subscription?.data_json) : {}
  //       const mergedSubscriptionData = {
  //         ...subscription,
  //         ...dataJson,
  //         ...productsJson[0],
  //         data_json: `stripped`,
  //       }

  //       _setSubscribedProducts(productsJson?.map((product: any) => product))
  //       return mergedSubscriptionData
  //     })
  //   }

  //   _setSubscriptions(subscriptions)
  //   _setActiveSubscription(subscriptions[0])

  //   /* Check if subscription is with supporter + welcome pack */
  //   const subscriptionOrder =
  //     fullUser?.customer?.orders?.nodes?.filter((order: any) => {
  //       const filtered = order?.lineItems?.nodes?.filter((item: any) => {
  //         if (
  //           item?.productId ===
  //           Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITH_WELCOME_PACK_ID)
  //         ) {
  //           return order
  //         }
  //       })
  //       return filtered
  //     })[0] || {}

  //   _setSubscriptionOrder(subscriptionOrder)

  //   const shippingAddress = fullUser?.customer?.shipping

  //   if (
  //     !fullUserLoading &&
  //     (!shippingAddress?.address1 ||
  //       !shippingAddress?.city ||
  //       !shippingAddress?.postcode ||
  //       !shippingAddress?.state ||
  //       !shippingAddress?.phone)
  //   ) {
  //     _setShowShippingAddressModal(true)
  //   }
  // }, [fullUser])

  // useEffect(() => {
  //   if (_activeSubscription?.product_id === Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_FREE_ID)) {
  //     _setExpiryDate('Never')
  //   }
  //   if (
  //     _activeSubscription?.product_id ===
  //       Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITHOUT_WELCOME_PACK_ID) ||
  //     _activeSubscription?.product_id ===
  //       Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_SUPPORTER_WITH_WELCOME_PACK_ID)
  //   ) {
  //     _setExpiryDate(_activeSubscription?.nextPayment)
  //   }
  // }, [_activeSubscription])

  const quickLinks = [
    {
      id: 0,
      label: 'Edit your password or account details',
      url: '/account/manage',
    },
    {
      id: 1,
      label: 'Manage shipping and billing address',
      url: '/account/addressess',
    },
  ]

  /* Run after confetti is complete on new account */
  const handleAfterConfetti = () => {
    console.log('after confetti')
    console.log(`isSupporter`, isSupporter)
  }

  // useEffect(() => {
  //   console.log(fullUser)
  // }, [fullUser])

  const renderMembershipCard = () => {
    return (
      <>
        <MemberCard
          name={`${user?.firstName} ${user?.lastName}`}
          email={user?.email}
          type={_activeSubscription?.name || `N/A`}
          expireDate={_expiryDate}
        />
        <p
          className='py-[12px] text-center text-md text-N-600'
          dangerouslySetInnerHTML={{
            __html: `Android? Install this <a target='_blank' href='' className='underline'>app</a> & follow this <a target='_blank' href='' className='underline'>guide</a>.`,
          }}
        />
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
        {newAccount === 'true' && (
          <Confetti
            width={width}
            height={height}
            run={true}
            recycle={false}
            onConfettiComplete={handleAfterConfetti}
          />
        )}

        {_showShippingAddressModal && _subscriptionOrder?.status === 'AWAITING_SHIPMENT' && (
          <div className='fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-slate-400/50'>
            <div className='flex w-full max-w-[600px]'>
              <UpdateOrderAddresses setShowAddressModal={_setShowShippingAddressModal} />
            </div>
          </div>
        )}

        <div className='container gap-[48px] pb-[40px] lg:grid lg:grid-cols-[160px_4fr_1fr] lg:pb-[80px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div>
            <h4 className='text-h4 font-600 text-N-800'>Hello {`${user?.firstName}, Good Day!`}</h4>

            {isMobile && <div className='pt-[24px]'>{renderMembershipCard()}</div>}

            <div className='pt-[24px] md:pt-[40px] lg:pt-[32px]'>
              <div className='text-md font-500 text-N-800'>Membership details</div>
              <div className='flex gap-[64px] pt-[24px] text-md'>
                <div className='flex flex-col gap-[8px]'>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>Name</p>
                    <p>
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>Email</p>
                    <p>{user?.email}</p>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>Type</p>
                    <p>{_activeSubscription?.name || `N/A`}</p>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>ID</p>
                    <p>{_activeSubscription?.order_id}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>Status</p>
                    <p
                      className={CN('font-600', {
                        'text-G-500': _activeSubscription?.status === 'active',
                        'text-R-500': _activeSubscription?.status !== 'active',
                      })}>
                      {_activeSubscription?.status}
                    </p>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>Start date</p>
                    <p>{_activeSubscription?.start}</p>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <p className='w-[80px] text-md font-500 text-N-600'>Expires on</p>
                    <p
                      className={CN('font-600', {
                        'text-B-500': _expiryDate !== 'Never',
                      })}>
                      {_expiryDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-[24px] pt-0 lg:pt-[40px]'>
              <p className='text-md font-500 text-N-800'>Quick links</p>

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
          </div>

          <div className='justify-end md:flex md:flex-row-reverse md:gap-[24px] lg:flex lg:flex-col lg:justify-start'>
            <div className='flex'>
              {!isMobile && <div className='md:w-full'>{renderMembershipCard()}</div>}
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Page
