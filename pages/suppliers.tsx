import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { PageHeaderVariant } from '@/components/molecules/PageHeaderVariant'
import { Button, TextField } from '@/components/atoms'
import { Pagination, SectionHeading } from '@/components/molecules'
import { ArrowRight, Search } from 'react-feather'
import { SearchSuppliers, SuppliersSearch } from '@/components/molecules'
import { supplierList } from '@/dummy-data/supplier-list'
import { useViewport } from '@/utils'
import parseHTML from 'html-react-parser'

import { getSuppliersPage } from '../lib/graphql'

const Home: NextPage = ({ pageData }: any) => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop } = useViewport()
  const { header, keyPartners, verifiedSuppliers, supplierBar, footer } = pageData

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container flex pt-[20px] pb-[40px] md:pb-[80px]'>
        <PageHeaderVariant
          heading={header.blockSuppliersHeader.heading}
          image={header.blockSuppliersHeader.image.mediaItemUrl}
          description={header.blockSuppliersHeader.description}
          commonClassName='lg:w-[30%] !gap-0'
          descriptionClassName='text-md !pt-[16px] text-center md:text-left'
          imageClassName='!h-[205px] md:!h-[248px] lg:!h-[407px] w-full'
          metaData={header.blockSuppliersHeader.tagline}
          metaDataNumber='500+'
          btnProps={{
            label: header.blockSuppliersHeader.primaryButtonText,
            onClick: () => {
              // console.log('Clicked')
            },
            appearance: 'secondary',
            className: 'w-full md:w-[208px]',
          }}
        />
      </div>

      {/* Partners Banner */}
      <div className='bg-[url("/images/patterns/003.svg")] bg-cover bg-no-repeat'>
        <div className='container py-[32px] md:py-[48px] lg:py-[80px]'>
          <SectionHeading
            overline={keyPartners.blockPartners.subHeading}
            heading={keyPartners.blockPartners.heading}
            headingClassName='text-display !text-h3 lg:!text-h2 font-700 !mb-0'
            align='center'
          />

          {/* Partners */}
          <div className='grid grid-cols-2 justify-items-center gap-x-[12px] gap-y-[16px] py-[32px] md:gap-x-[48px] md:gap-y-[40px]  md:pt-[40px] md:pb-[24px] lg:grid-cols-4'>
            {keyPartners.blockPartners.partners.map(({ name, link, image }: any, index: number) => (
              <img
                src={image.mediaItemUrl}
                className='h-[75px] w-[165px] object-cover object-center md:h-[120px] md:w-[264px]'
                alt={name}
                width={(isMobile && 165) || 264}
                height={(isMobile && 75) || 120}
              />
            ))}
          </div>

          <div className='flex justify-center'>
            <Button appearance='ghost' iconAfter={<ArrowRight size={20} />}>
              {keyPartners.blockPartners.primaryButtonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Verified */}
      <div className='container flex flex-col-reverse items-center py-[40px] md:flex-row md:gap-[24px] md:py-[80px] lg:gap-[152px] '>
        {!isMobile && (
          <div className='flex justify-start'>
            <img
              src='/images/verified-people.png'
              className='h-[343px] w-[343px] lg:h-[576px] lg:w-[576px]'
            />
          </div>
        )}

        <div className='flex flex-col gap-[24px]'>
          <SectionHeading
            overline={verifiedSuppliers.blockVerifiedSuppliers.subHeading}
            heading={verifiedSuppliers.blockVerifiedSuppliers.heading}
            headingClassName='text-display !text-h3 lg:!text-h2 font-700 !mb-0'
            align={(isMobile && 'center') || 'left'}
          />

          {isMobile && (
            <div className='flex justify-center'>
              <img
                src='/images/verified-people.png'
                className='h-[343px] w-[343px] lg:h-[576px] lg:w-[576px]'
              />
            </div>
          )}

          <p className='text-center text-md font-500 text-N-600 md:text-left'>
            {parseHTML(verifiedSuppliers.blockVerifiedSuppliers.description)}
          </p>
          <Button
            className='px-0 md:!justify-start'
            appearance='ghost'
            iconAfter={<ArrowRight size={20} />}>
            {verifiedSuppliers.blockVerifiedSuppliers.primaryButtonText}
          </Button>
        </div>
      </div>

      <SuppliersSearch />

      <SupplierRibbon data={supplierBar.blockSuppliersBar} className='!pt-0' />
      <Footer data={footer.blockFooter} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const pageData = await getSuppliersPage()

  return {
    props: {
      pageData,
    },
  }
}

export default Home
