import type { NextPage } from 'next'
import Head from 'next/head'
import { FileText, Mail } from 'react-feather'
import {
  Header,
  Footer,
  SupplierRibbon,
  MembershipCardPreview,
  SupporterBenefits,
  TestimonialCarousel,
  Faq,
} from '@/components/sections'
import { PageHeader, ContactCta, SectionHeading } from '@/components/molecules'
import { testimonials } from '@/dummy-data/testimonials'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container flex pt-[24px] md:pt-[40px] lg:pt-[60px]'>
        <div className='mx-auto flex max-w-[600px]'>
          <SectionHeading
            overline='Be a supporter'
            heading='Join the club'
            headingClassName='text-display !text-h3 lg:!text-h2 font-700'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            align='center'
          />
        </div>
      </div>

      <div className='container max-w-[992px] py-[24px] md:py-[80px] lg:py-[80px]'>
        <MembershipCardPreview />
      </div>

      <SupporterBenefits className='py-[24px] md:py-[80px] lg:py-[80px]' />
      <TestimonialCarousel className='pt-[24px] pb-[16px] md:pt-[80px]' list={testimonials} />
      <Faq className='pt-[20px] pb-[24px] md:pb-[80px] lg:pb-[80px]' list={testimonials} />

      <ContactCta
        heading='Still have questions? <br />Contact us'
        icon={<Mail size={32} />}
        email='hello@teslaowners.org.uk'
      />

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Page
