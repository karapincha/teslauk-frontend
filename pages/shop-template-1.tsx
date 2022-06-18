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
import { ExpandedProductDetails } from '@/components/sections/ExpandedProductDetails'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CommonLayout>
        <div className='container pt-[40px] pb-[80px]'>
          <ExpandedProductDetails
            image='/shop-item.png'
            productName='Tesla Owners UK Yeti Rambler 12oz (355ml) with 100% leakproof HotShot Lid'
            price='£28.00'
            shopName='Tesla Owners UK'
            category='Accessories'
            stockAmount={296}
          />
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
