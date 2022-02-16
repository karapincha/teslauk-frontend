import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Header,
  Hero,
  EventCard,
  QuickMembership,
  QuickTestimonials,
  GuidesQuickAccess,
  CallToAction,
} from '@/components/sections'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='pt-[80px] pb-[0px]' />
      <Hero className='pt-[80px] pb-[40px]' />
      <EventCard className='pt-[40px] pb-[80px]' />
      <QuickMembership className='py-[80px]' />
      <QuickTestimonials className='py-[80px]' />
      <GuidesQuickAccess className='pt-[80px] pb-[128px]' />
      <CallToAction />
    </>
  )
}

export default Home
