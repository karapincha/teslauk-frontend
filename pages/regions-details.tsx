import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { ArrowLeft } from 'react-feather'
import { Button, TextArea, TextField } from '@/components/atoms'
import { RegionDetailsHeader } from '@/components/molecules/RegionDetailsHeader'
import { SingleEventCard } from '@/components/molecules/SingleEventCard'

const Home: NextPage = () => {
  const eventList = [
    {
      id: 0,
      cover:
        'https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      isFeatured: false,
      month: 'Jun',
      date: '05',
      location: 'Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK',
      appearance: 'default',
      eventTopic: 'New Owner Induction Evening Model 3 (Various Dates Available)',
    },

    {
      id: 1,
      cover:
        'https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      isFeatured: false,
      month: 'Jun',
      date: '05',
      location: 'Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK',
      appearance: 'default',
      eventTopic: 'New Owner Induction Evening Model 3 (Various Dates Available)',
    },
    {
      id: 2,
      cover:
        'https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      isFeatured: false,
      month: 'Jun',
      date: '05',
      location: 'Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK',
      appearance: 'default',
      eventTopic: 'New Owner Induction Evening Model 3 (Various Dates Available)',
    },
  ]
  const newsList = [
    {
      id: 0,
      cover:
        'https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      isFeatured: false,
      heading: 'Track days',
      description:
        'We organise several Track days per annum where you can take your own car onto the track ...',
      location: 'Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK',
      appearance: 'default',
      eventTopic: 'New Owner Induction Evening Model 3 (Various Dates Available)',
    },

    {
      id: 1,
      cover:
        'https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      isFeatured: false,
      heading: 'Track days',
      description:
        'We organise several Track days per annum where you can take your own car onto the track ...',
      location: 'Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK',
      appearance: 'default',
      eventTopic: 'New Owner Induction Evening Model 3 (Various Dates Available)',
    },
    {
      id: 2,
      cover:
        'https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      isFeatured: false,
      heading: 'Track days',
      description:
        'We organise several Track days per annum where you can take your own car onto the track ...',
      location: 'Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK',
      appearance: 'default',
      eventTopic: 'New Owner Induction Evening Model 3 (Various Dates Available)',
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

      <div className='header-surface relative h-[356px] bg-[url(/images/004.svg)] bg-cover bg-no-repeat'>
        <div className='container flex h-full flex-col'>
          <div className='flex py-[24px] lg:py-[50px]'>
            <Button
              appearance='ghost'
              iconBefore={<ArrowLeft size={20} />}
              className='h-[unset] px-0 hover:text-B-500'>
              Back to Search results
            </Button>
          </div>
          <div className='top-[132px] lg:absolute'>
            <RegionDetailsHeader />
          </div>
        </div>
      </div>

      <div className='container pt-[500px] lg:pt-[380px]'>
        <div className='flex flex-col justify-between gap-[24px] pb-[40px] md:flex-col md:gap-[40px] lg:flex-row lg:items-center lg:gap-0'>
          <h4 className='text-h4 font-500 text-N-800'>Upcoming events</h4>
          <div className='flex flex-col gap-[20px] md:flex-row'>
            <TextField placeHolder='Date range' />
            <TextField placeHolder='Event type' />
          </div>
        </div>
        <ul className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[40px] md:gap-x-[24px] lg:grid lg:grid-cols-3 lg:gap-x-[48px]'>
          {(eventList || []).map(
            (
              { id, cover, isFeatured, month, date, appearance, eventTopic, location }: any,
              index: number
            ) => (
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
          )}
        </ul>
      </div>

      <div className='container pt-[40px] lg:py-[80px]'>
        <div className='flex justify-between pb-[24px] md:flex-col md:gap-[40px] md:pb-[40px] lg:flex-row lg:items-center lg:gap-0'>
          <h4 className='text-h4 font-500 text-N-800'>News</h4>
        </div>
        <ul className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[40px] md:gap-x-[24px] lg:grid lg:grid-cols-3 lg:gap-x-[48px]'>
          {(newsList || []).map(
            (
              { id, cover, isFeatured, description, appearance, location, heading }: any,
              index: number
            ) => (
              <li key={id || index}>
                <SingleEventCard
                  cover={cover}
                  isFeatured={isFeatured}
                  description={description}
                  appearance={appearance}
                  location={location}
                  heading={heading}
                />
              </li>
            )
          )}
        </ul>
      </div>

      {/* CTA bar with contact form */}
      <div className='pt-[40px] md:pt-[80px] lg:py-[160px]'>
        <div className='bg-N-50 pb-[40px] md:pb-[80px] lg:h-[352px] lg:pb-0'>
          <div className='container relative flex flex-col gap-[24px] lg:flex-row lg:justify-between lg:gap-0'>
            <div className='pt-[40px] md:pt-[80px] lg:pt-[64px]'>
              <div className='flex w-full flex-col gap-[24px] lg:w-[452px]'>
                <h2 className='text-h3 font-700 text-N-800 lg:text-h2'>
                  Contact the regional leader
                </h2>
                <p className='text-base font-500 text-N-600'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.{' '}
                </p>
              </div>
            </div>

            <div className='rounded-[6px] bg-[white] px-[24px] py-[38px] lg:absolute lg:right-0 lg:top-[-80px] lg:w-[576px] lg:px-[32px]'>
              <div className='input-field flex flex-col gap-[16px] pt-[16px]'>
                <div className='flex flex-col justify-between gap-[16px] md:flex-row '>
                  <div className='flex w-full flex-col gap-[4px]'>
                    <p className='text-md text-N-600'>First Name</p>
                    <TextField placeholder='Enter first name' />
                  </div>
                  <div className='flex w-full flex-col gap-[4px]'>
                    <p className='text-md text-N-600'>Last Name</p>
                    <TextField placeholder='Enter last name' />
                  </div>
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Email address</p>
                  <TextField placeholder='Enter email address' />
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Subject</p>
                  <TextField placeholder='Enter subject' />
                </div>

                <div className='flex flex-col gap-[4px]'>
                  <div className='flex justify-between'>
                    <p className='text-md text-N-600'>Message</p>
                    <p className='text-md text-N-500'>Max. 500 characters</p>
                  </div>
                  <TextArea placeholder='Enter subject' />
                </div>

                <div className=''>
                  <Button className='w-full md:w-[unset]' appearance='primary'>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home