import { useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { TextField } from '@/components/atoms'
import { Pagination, PageHeaderVariant } from '@/components/molecules'
import { SingleEventCard } from '@/components/molecules/SingleEventCard'
import { activeEventList, inactiveEventList } from '@/dummy-data/active-event-list'
import { useViewport } from '@/utils'

import { getEvents } from '../api/get-events'

import { Common as CommonLayout } from '@/components/layouts'
import Link from 'next/link'

const Page: NextPage = ({ events }: any) => {
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <>
      <Head>
        <title>Events - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex pt-[24px]'>
          <PageHeaderVariant
            heading={'Events Calendar'}
            description='A major part of being a member of Tesla Owners UK is the ability to attend events – both
            National and Regional. From Track Days to Regional Meetups and visits to the Tesla
            facilities both in Europe and in the US we have you covered!'
            rightContent={
              <div className='flex w-full gap-[32px]'>
                {events?.upcoming?.map((event: any, index: number) => {
                  if (index > 1 || !event?.live) {
                    return
                  }

                  return (
                    <Link key={index} href={`/events/${event?.slug}` || ''}>
                      <a className='w-full'>
                        <SingleEventCard isHighlighted {...event} />
                      </a>
                    </Link>
                  )
                })}
              </div>
            }
          />
        </div>

        <div className='container flex flex-col pt-[24px] pb-[24px] md:pt-[60px] md:pb-[60px]'>
          <div className='flex justify-between md:flex-col md:gap-[40px] lg:flex-row lg:items-center lg:gap-0'>
            <h3 className='text-h3 font-700 text-N-800'>Upcoming events</h3>
          </div>

          {/* Active events list */}
          <div className='md:pt-[40px]'>
            <ul className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[40px] md:gap-x-[24px] lg:gap-x-[48px]'>
              {events?.upcoming?.map((event: any, index: number) => {
                if (index < 2 || !event?.live) {
                  return
                }

                return (
                  <Link key={index} href={`/events/${event?.slug}` || ''}>
                    <a className='w-full'>
                      <SingleEventCard isHorizontal={true} {...event} />
                    </a>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Past events list */}
        <div className='container pb-[40px] md:pb-[80px]'>
          <div className='flex'>
            <h3 className='flex items-center gap-[12px] text-h3 font-700 text-N-800'>
              <span>Past events</span>{' '}
              <span className='pt-[4px] text-sm font-500'>(6 of most recently ended)</span>
            </h3>
          </div>

          {/* Inactive events list */}
          <div className='pt-[24px] md:pt-[40px]'>
            <ul className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[40px] md:gap-x-[24px] lg:gap-x-[48px]'>
              {events?.past?.map((event: any, index: number) => {
                if (index > 5) {
                  return
                }

                return (
                  <Link key={index} href={`/events/${event?.slug}` || ''}>
                    <a className='w-full'>
                      <SingleEventCard isPast isHorizontal={true} {...event} />
                    </a>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }: any) {
  const res = await getEvents()

  return {
    props: {
      preview,
      events: res,
    },
    revalidate: 1,
  }
}

export default Page
