import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { TextField } from '@/components/atoms'
import { Pagination } from '@/components/molecules'
import { SingleEventCard } from '@/components/molecules/SingleEventCard'
import { activeEventList, inactiveEventList } from '@/dummy-data/active-event-list'
import { useViewport } from '@/utils'

const Page: NextPage = () => {
  const { isMobile, isTablet, isDesktop } = useViewport()

  // show only two cards from active event card for mobile list
  const renderEvents = () => {
    const mobileList = activeEventList.filter((event: any, index: number) => {
      if (index < 2) {
        return event
      }
    })

    const prepareComponent = (event: any, index: number) => {
      const { id, cover, isFeatured, month, date, appearance, eventTopic, location } = event || {}

      return (
        <li key={id || index}>
          <SingleEventCard
            cover={cover}
            isFeatured={isFeatured}
            month={month}
            date={date}
            appearance={appearance}
            eventTopic={eventTopic}
            location={location}
          />
        </li>
      )
    }

    if (isMobile) {
      return mobileList.map((event: any, index: number) => {
        return prepareComponent(event, index)
      })
    } else {
      return activeEventList.map((event: any, index: number) => {
        return prepareComponent(event, index)
      })
    }
  }

  // show only two cards from inactive event card for mobile list
  const renderPastEvents = () => {
    const pastMobileList = inactiveEventList.filter((event: any, index: number) => {
      if (index < 2) {
        return event
      }
    })

    const prepareComponent = (event: any, index: number) => {
      const { id, cover, isFeatured, month, date, appearance, eventTopic, location } = event || {}

      return (
        <li key={id || index}>
          <SingleEventCard
            cover={cover}
            isFeatured={isFeatured}
            month={month}
            date={date}
            appearance={appearance}
            eventTopic={eventTopic}
            location={location}
          />
        </li>
      )
    }

    if (isMobile) {
      return pastMobileList.map((event: any, index: number) => {
        return prepareComponent(event, index)
      })
    } else {
      return inactiveEventList.map((event: any, index: number) => {
        return prepareComponent(event, index)
      })
    }
  }

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='container flex flex-col gap-[24px] md:pt-[40px] lg:flex-row lg:gap-[48px]'>
        {/* Page heading */}
        <div className='flex w-full flex-col gap-[24px] md:gap-[40px] lg:w-[372px]'>
          <h1 className='md:text=h2 text-h3 font-700  text-N-800 lg:text-h1'>Events Calendar</h1>
          <p className='text-N-00 text-base'>
            A major part of being a member of Tesla Owners UK is the ability to attend events – both
            National and Regional. From Track Days to Regional Meetups and visits to the Tesla
            facilities both in Europe and in the US we have you covered!
          </p>
        </div>

        {isMobile && (
          <div className='flex flex-col gap-[24px]'>
            <h3 className='text-h4 font-700 text-N-800 md:text-h3'>Upcoming events</h3>
            <div className='flex flex-col gap-[16px]'>
              <TextField placeholder='Date range' />
              <TextField placeholder='Location' />
              <TextField placeholder='Event type' />
            </div>
          </div>
        )}

        {/* Featured event cards */}
        <div className='flex flex-col gap-[24px] md:flex-row lg:gap-[44px]'>
          <SingleEventCard
            cover='https://images.unsplash.com/photo-1541446654331-def41325e92c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            isFeatured='Featured'
            location=' Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK'
            heading='Track days'
            description='We organise several Track days per annum where you can take your own car onto the track without any prior experience as a beginnerjhwjhefk'
          />
          <SingleEventCard
            cover='https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            isFeatured='Featured'
            location=' Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK'
            heading='Track days'
            description='We organise several Track days per annum where you can take your own car onto the track without any prior experience as a beginnerjhwjhefk'
          />
        </div>
      </div>

      <div className='container pt-[24px] md:pt-[80px]'>
        {/* Filters */}
        {!isMobile && (
          <div className='flex justify-between md:flex-col md:gap-[40px] lg:flex-row lg:items-center lg:gap-0'>
            <h3 className='text-h3 font-700 text-N-800'>Upcoming events</h3>
            <div className='flex gap-[20px]'>
              <TextField placeholder='Date range' />
              <TextField placeholder='Location' />
              <TextField placeholder='Event type' />
            </div>
          </div>
        )}

        {/* Active events list */}
        <div className='md:pt-[40px]'>
          <ul className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[40px] md:gap-x-[24px] lg:grid lg:grid-cols-3 lg:gap-x-[48px]'>
            {renderEvents()}
          </ul>

          <div className='w-full py-[40px] md:py-[80px]'>
            <Pagination />
          </div>
        </div>
      </div>

      {/* Past events list */}
      <div className='container pb-[40px] md:pb-[80px]'>
        <div className='flex'>
          <h3 className='text-h3 font-700 text-N-800'>Past events</h3>
        </div>

        {/* Inactive events list */}
        <div className='pt-[24px] md:pt-[40px]'>
          <ul className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[40px] md:gap-x-[24px] lg:grid-cols-3 lg:gap-x-[48px]'>
            {renderPastEvents()}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page
