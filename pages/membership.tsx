import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Header,
  Footer,
  SupplierRibbon,
  MembershipCardPreview,
  SupporterBenefits,
  TestimonialCarousel,
  Faq,
} from '@/components/sections'
import { PageHeader } from '@/components/molecules'
import { testimonials } from '@/dummy-data/testimonials'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='pt-[80px]' />
      <div className='container flex pt-[100px]'>
        <PageHeader
          heading='Join the club'
          description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
          headingClassName='text-N-800'
          descriptionClassName='text-N-600'
        />
      </div>
      <div className='container max-w-[992px] py-[80px]'>
        <MembershipCardPreview />
      </div>
      <SupporterBenefits className='py-[80px]' />
      <TestimonialCarousel className='pt-[104px] pb-[80px]' list={testimonials} />
      <Faq className='py-[80px]' list={testimonials} />
      <SupplierRibbon className='border-t border-N-100' />
      <Footer />
    </>
  )
}

export default Home
