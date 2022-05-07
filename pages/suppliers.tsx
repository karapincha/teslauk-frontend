import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { PageHeaderVariant } from '@/components/molecules/PageHeaderVariant'
import { Button, TextField } from '@/components/atoms'
import { InitiativeCard } from '@/components/molecules/InitiativeCard'
import { ChartLine, Facebook, LinkedIn } from '@/icons'
import { Pagination, SectionHeading } from '@/components/molecules'
import discussionList, { discussionCardList } from '@/dummy-data/discussion-list'
import { DiscussionCard } from '@/components/molecules/DiscussionCard'
import { ArrowLeft, ArrowRight, Search } from 'react-feather'
import { SearchSuppliers } from '@/components/molecules/SearchSuppliers'
import { supplierList } from '@/dummy-data/supplier-list'
import { useViewport } from '@/utils'

const Home: NextPage = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container flex pt-[20px] pb-[80px]'>
        <PageHeaderVariant
          heading='Suppliers'
          image='https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          description='The Tesla Owners UK Directory showcases the <br/> best Tesla related products and services from <br/> across the UK.'
          commonClassName='lg:w-[30%] !gap-0'
          descriptionClassName='text-md !pt-[16px]'
          imageClassName='!h-[205px] md:!h-[248px] lg:!h-[407px] w-full'
          metaData='Trusted suppliers <br/> network across United <br/> Kingdom'
          metaDataNumber='500+'
          btnProps={{
            label: 'Search suppliers',
            onClick: () => {
              console.log('Clicked')
            },
            appearance: 'secondary',
            className: 'w-[208px]',
          }}
        />
      </div>

      {/* Partners Banner */}
      <div className='bg-[url("/images/patterns/003.svg")] bg-cover bg-no-repeat'>
        <div className='container py-[80px]'>
          <SectionHeading
            overline='tesla owners club uk'
            heading='Key Partners'
            headingClassName='text-display !text-h3 lg:!text-h2 font-700 !mb-0'
            align='center'
          />

          {/* Partners */}
          <div className='grid grid-cols-2 justify-items-center gap-x-[12px] gap-y-[16px] py-[48px] md:gap-x-[48px] md:gap-y-[40px] lg:grid-cols-4'>
            <img
              src='/images/partners/partner-001.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-002.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-003.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-004.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-005.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-004.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-007.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
            <img
              src='/images/partners/partner-008.png'
              className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
              width={(isMobile && 165) || 264}
              height={(isMobile && 75) || 120}
            />
          </div>

          <div className='flex justify-center'>
            <Button appearance='ghost' iconAfter={<ArrowRight size={20} />}>
              Become a key partner
            </Button>
          </div>
        </div>
      </div>

      {/* Verified */}
      <div className='container flex flex-col md:flex-row items-center gap-[152px] py-[80px]'>
        <div className='flex justify-center md:justify-start'>
          <img
            src='/images/verified-people.png'
            className='h-[343px] w-[343px] lg:h-[576px] lg:w-[576px]'
          />
        </div>
        <div className='flex flex-col gap-[24px]'>
          <SectionHeading
            overline='Supplier listings'
            heading='Verified by Tesla <br/> owners'
            description='Every listing has been verified by at least two independent Tesla <br/> Owners who are willing to vouch for the supplier.'
            headingClassName='text-display !text-h3 lg:!text-h2 font-700'
            align='left'
          />
          <div className='flex '>
            <Button className='px-0' appearance='ghost' iconAfter={<ArrowRight size={20} />}>
              Become an approved supplier
            </Button>
          </div>
        </div>
      </div>

      {/* Search suppliers */}
      <div className='container '>
        <div className='flex flex-col gap-[40px]'>
          <h3 className='text-center text-h3 font-700'>Search suppliers</h3>
          <div className='flex items-center gap-[24px] bg-N-50 px-[24px] py-[24px]'>
            <TextField placeHolder='Select / filter by category' />
            <TextField placeHolder='Location' />
            <Button appearance='primary' iconAfter={<Search size={20} />}>
              Search
            </Button>
          </div>

          {/* Search results */}
          <div className='flex flex-col'>
            <p className='text-base font-400 text-N-600'>57 search results</p>

            <ul className='group flex flex-col'>
              {(supplierList || []).map(
                (
                  {
                    id,
                    supplierName,
                    category,
                    reviewCount,
                    isVerified,
                    isFeatured,
                    description,
                    location,
                    phone,
                    mail,
                    website,
                    image,
                  }: any,
                  index: number
                ) => (
                  <li key={id || index} className='border-b border-N-200 last:border-b-0'>
                    <SearchSuppliers
                      supplierName={supplierName}
                      category={category}
                      reviewCount={reviewCount}
                      isVerified={isVerified}
                      isFeatured={isFeatured}
                      description={description}
                      location={location}
                      phone={phone}
                      mail={mail}
                      website={website}
                      image={image}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className=' w-full max-w-[784px] md:pt-[40px] md:pb-[80px]'>
          <Pagination />
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
