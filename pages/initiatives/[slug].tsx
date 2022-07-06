import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Tag, ArrowLeft, Globe, MapPin, Phone, Mail, Bookmark, Compass } from 'react-feather'
import { useViewport } from '@/utils'
import { SupplierAboutHeader } from '@/components/molecules/SupplierAboutHeader'
import { Button, TextField, Badge } from '@/components/atoms'
import { SupplierDetailsTabs } from '@/components/sections/SupplierDetailsTabs'
import { SupplierAboutSideBar } from '@/components/sections/SupplierAboutSideBar'
import { RelatedListingsSideBar } from '@/components/sections/RelatedListingsSideBar'
import { Breadcrumb } from '@/components/molecules/Breadcrumb'
import { PageHeader } from '@/components/molecules'

import { getAllSuppliersWithSlug, getSupplier, getInitiative } from '../../lib/graphql'
import Link from 'next/link'
import { Common as CommonLayout } from '@/components/layouts'
import { replaceStringWithComponent } from '@/utils'

const Page: NextPage = ({ initiative }: any) => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()

  const prepareArticle = () => {
    const content = initiative?.content || ''
    const processed = replaceStringWithComponent(content, 'CTA', <Button>Yo Yo!</Button>)

    return processed
  }

  return (
    <>
      <Head>
        <title>{`${initiative?.title || 'Initiative'}`} - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex pt-[40px] pb-[24px]'>
          <div className='mx-auto flex w-full max-w-[782px] flex-col items-center gap-[40px] text-center'>
            <div className='flex w-full flex-col gap-[28px]'>
              <div className='flex justify-center'>
                <Badge>Tesla Owners UK Initiative</Badge>
              </div>
              <h1 className='text-h1'>{initiative?.title}</h1>
            </div>

            <div className='banner-image flex w-full'>
              <img
                src={initiative?.pageInitiativeSidebar?.thumbnail?.mediaItemUrl}
                alt={initiative?.title}
                className='w-[100%] rounded-[8px]'
              />
            </div>
          </div>
        </div>

        <div className='container flex flex-col'>
          <article className='article prose mx-auto max-w-[782px] md:pb-[80px]'>
            {prepareArticle()}
            {/* <div dangerouslySetInnerHTML={{ __html: initiative?.content }} /> */}
          </article>
        </div>
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ params, preview = false, previewData }: any) {
  const data = await getInitiative(params.slug || '')

  return {
    props: {
      preview,
      initiative: data,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allSuppliers = await getAllSuppliersWithSlug()

  return {
    paths: allSuppliers?.edges.map(({ node }: any) => `/suppliers/${node.slug}`) || [],
    fallback: true,
  }
}

export default Page
