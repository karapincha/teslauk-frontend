import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Header,
  Footer,
  Hero,
  EventCard,
  QuickMembership,
  QuickTestimonials,
  GuidesQuickAccess,
  CallToAction,
  SupplierRibbon,
} from '@/components/sections'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />
      <Hero className='pt-[20px] pb-[40px]' />
      <EventCard className='py-[48px] md:pt-[24px] lg:py-[80px]' />
      <QuickMembership className='py-[24px] lg:py-[80px]' />
      <QuickTestimonials className='py-[24px] lg:py-[80px]' />
      <GuidesQuickAccess className='pt-[80px] pb-[128px]' />
      <CallToAction />
      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
