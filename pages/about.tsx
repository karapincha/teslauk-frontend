import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { PageHeaderVariant } from '@/components/molecules/PageHeaderVariant'
import { Button } from '@/components/atoms'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container flex pt-[20px]'>
        <PageHeaderVariant
          heading='Who we are <br />&amp; What we <br />do'
          image='https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
      </div>

      <div className='container pt-[64px] pb-[80px]'>
        <div className='mx-auto flex max-w-[992px] gap-[48px]'>
          <div className='flex w-[264px] flex-shrink-0'>
            <h5 className='text-h5 font-500'>
              Our mission is to enhance the Tesla ownership experience and help the UK transition to
              sustainable energy.
            </h5>
          </div>

          <div className='flex w-full'>
            <p className='text-md font-500 text-N-600'>
              Whilst representing 30% of Tesla owners in the UK we deliver a plethora of events
              nationwide; support where Tesla cannot or will not; coordination for fundraising and
              charitable acts; representation to Government & Tesla; education to promote the uptake
              and adoption of electric vehicles, renewable energy & zero carbon living; and
              fostering of good relations between Members, Staff, and other supporters of Tesla, and
              other parties who seek to achieve similar aims and purposes to the Club.
              <br />
              <br />
              To maximise utilisation we take a proactive approach with owners to enable onboarding,
              education and mentorship from before ownership starts to after their first event, then
              the fun really starts with our in-person events (3 per month across the UK); track
              days (12 per year); large scale events (circa 200+ owners per event); road trip
              events; finally numerous discussion groups (circa 32,000 posts with 543,000 comments
              per year) and guides on our website ensure continued support throughout all aspects of
              ownership.
            </p>
          </div>
        </div>
      </div>

      <div className='container pt-[64px] pb-[80px]'>
        <div className='flex flex-col items-center gap-[24px]'>
          <div className='flex'>
            <h3 className='text-h3 font-700 text-N-800'>See who is behind Tesla Owners UK</h3>
          </div>

          <div className='flex max-w-[577px] text-center'>
            <p className='text-base font-400 text-N-600'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className='flex gap-[24px]'>
            <Button appearance='secondary' size='md'>
              Meet the Team
            </Button>
            <Button appearance='primary' size='md'>
              Become a member
            </Button>
          </div>
        </div>
      </div>

      <div className='container pb-[80px]'>
        <div className='flex h-[711px] w-full'>
          <img
            src='/images/banners/002.jpg'
            className='h-full w-full rounded-[12px] object-cover object-center'
          />
        </div>
      </div>

      <SupplierRibbon className='border-t border-N-100' />
      <Footer />
    </>
  )
}

export default Home
