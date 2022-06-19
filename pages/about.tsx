import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PageHeaderVariant } from '@/components/molecules/PageHeaderVariant'
import { Button } from '@/components/atoms'
import { InitiativeCard } from '@/components/molecules/InitiativeCard'
import { ChartLine } from '@/icons'
import { SectionHeading } from '@/components/molecules'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CommonLayout>
        <div className='container flex pt-[20px]'>
          <PageHeaderVariant
            heading='Who we are <br class="hidden md:inline" /> & What <br class="md:hidden"/> we do'
            image='https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          />
        </div>

        <div className='container pt-[40px] pb-[40px] md:py-[80px]'>
          <div className='mx-auto flex max-w-[992px] flex-col gap-[24px] md:flex-row md:gap-[32px] lg:flex-row lg:gap-[48px]'>
            <div className='flex flex-shrink-0 md:w-[264px] lg:w-[264px]'>
              <h5 className='text-h5 font-500'>
                Our mission is to enhance the Tesla ownership experience and help the UK transition
                to sustainable energy.
              </h5>
            </div>

            <div className='flex w-full'>
              <p className='text-md font-500 text-N-600'>
                Whilst representing 30% of Tesla owners in the UK we deliver a plethora of events
                nationwide; support where Tesla cannot or will not; coordination for fundraising and
                charitable acts; representation to Government & Tesla; education to promote the
                uptake and adoption of electric vehicles, renewable energy & zero carbon living; and
                fostering of good relations between Members, Staff, and other supporters of Tesla,
                and other parties who seek to achieve similar aims and purposes to the Club.
                <br />
                <br />
                To maximise utilisation we take a proactive approach with owners to enable
                onboarding, education and mentorship from before ownership starts to after their
                first event, then the fun really starts with our in-person events (3 per month
                across the UK); track days (12 per year); large scale events (circa 200+ owners per
                event); road trip events; finally numerous discussion groups (circa 32,000 posts
                with 543,000 comments per year) and guides on our website ensure continued support
                throughout all aspects of ownership.
              </p>
            </div>
          </div>
        </div>

        <div className='container pb-[40px] md:pb-[80px] lg:pb-[80px]'>
          <div className='flex flex-col items-center gap-[24px]'>
            <div className='flex'>
              <h3 className='text-center text-h4 font-600 text-N-800 md:text-h3 md:font-700 lg:text-left'>
                See who is behind Tesla Owners UK
              </h3>
            </div>

            <div className='flex max-w-[577px] text-center'>
              <p className='text-base font-400 text-N-600'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className='flex w-full flex-col gap-[16px] md:w-[unset] md:flex-row md:gap-[24px] lg:w-[unset] lg:flex-row'>
              <Button className='w-full md:w-[unset] lg:w-[unset]' appearance='secondary' size='md'>
                Meet the Team
              </Button>
              <Button className='w-full md:w-[unset] lg:w-[unset]' appearance='primary' size='md'>
                Become a member
              </Button>
            </div>
          </div>
        </div>

        <div className='container pb-[40px] md:pb-[80px] lg:pb-[80px]'>
          <div className='flex h-[204px] w-full md:h-[418px] lg:h-[711px]'>
            <img
              src='/images/banners/002.jpg'
              className='h-full w-full rounded-[12px] object-cover object-center'
            />
          </div>
        </div>

        <div className='container bg-[url(/images/patterns/background.svg)] bg-cover bg-no-repeat py-[40px] md:py-[80px]'>
          <SectionHeading
            heading='Club initiatives'
            headingClassName='!text-h3 font-700'
            description='As part of our mission, we seek out opportunities to to accelerate the world’s transition to sustainable energy we do following programmes.'
            align='center'
            className='mx-auto max-w-[472px]'
          />
          <div className='flex flex-col gap-[24px] pt-[24px] md:grid md:grid-cols-2 md:pt-[48px] lg:grid lg:grid-cols-3 lg:gap-[48px]'>
            <InitiativeCard
              icon={<ChartLine size={64} />}
              heading='Education & Outreach'
              description='As part of our mission, we seek out opportunities to accelerate the world’s transition to sustainable energy we do following programmes.'
              list={[
                {
                  id: 1,
                  label: "Show & Tell' events to all schools across the UK",
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 2,
                  label: 'Fire & Rescue demonstrations - Q&A',
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 3,
                  label: 'Fear Uncertainty & Doubt',
                  link: '',
                  onClick: () => {},
                },
              ]}
            />
            <InitiativeCard
              icon={<ChartLine size={64} />}
              heading='Education & Outreach'
              description='As part of our mission, we seek out opportunities to accelerate the world’s transition to sustainable energy we do following programmes.'
              list={[
                {
                  id: 1,
                  label: 'Press, media coverage & support',
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 2,
                  label: 'Fire & Rescue demonstrations - Q&A',
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 3,
                  label: 'Fear Uncertainty & Doubt',
                  link: '',
                  onClick: () => {},
                },
              ]}
            />
            <InitiativeCard
              icon={<ChartLine size={64} />}
              heading='See why so many companies sign up as a paid supplier'
              description='As part of our mission, we seek out opportunities to to accelerate the world’s transition to sustainable energy we do following programmes. As part of our mission, we seek out opportunities to to accelerate the world’s transition to sustainable energy we do following programmes. '
              btnProps={{
                children: 'Sign up',
                onClick: () => {
                  // console.log('Clicked')
                },
                appearance: 'primary',
              }}
            />
            <InitiativeCard
              icon={<ChartLine size={64} />}
              heading='Education & Outreach'
              description='As part of our mission, we seek out opportunities to accelerate the world’s transition to sustainable energy we do following programmes.'
              list={[
                {
                  id: 1,
                  label: "Show & Tell' events to all schools across the UK",
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 2,
                  label: 'Fire & Rescue demonstrations - Q&A',
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 3,
                  label: 'Fear Uncertainty & Doubt',
                  link: '',
                  onClick: () => {},
                },
              ]}
            />
            <InitiativeCard
              icon={<ChartLine size={64} />}
              heading='Education & Outreach'
              description='As part of our mission, we seek out opportunities to accelerate the world’s transition to sustainable energy we do following programmes.'
              list={[
                {
                  id: 1,
                  label: 'Access the Club Rules',
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 2,
                  label: 'Meeting Minutes',
                  link: '',
                  onClick: () => {},
                },
                {
                  id: 3,
                  label: 'Important updates',
                  link: '',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </div>

        <div className='container py-[40px] md:py-[80px]'>
          <div className='flex w-full flex-col items-center gap-[40px] md:flex-row md:justify-between lg:flex-row lg:gap-[48px]'>
            <img
              src='https://images.unsplash.com/photo-1634988115790-d00c024dfac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              height={276}
              className='w-full rounded-[12px] object-cover object-center md:w-[220px] lg:w-[368px]'
            />
            <img
              src='https://images.unsplash.com/photo-1635777076167-58f70b261f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              height={276}
              className='w-full rounded-[12px] object-cover object-center md:w-[220px] lg:w-[368px]'
            />
            <img
              src='https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              height={276}
              className='w-full rounded-[12px] object-cover object-center md:w-[220px] lg:w-[368px]'
            />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
