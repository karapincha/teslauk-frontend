import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useViewport } from '@/utils'
import { ShoppingCard } from '@/components/molecules/ShoppingCard'
import { PriceCard } from '@/components/molecules/PriceCard'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const { isMobile, isTablet, isDesktop } = useViewport()
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CommonLayout>
        <div className='container pt-[16px] pb-[40px] md:pb-[80px]'>
          <h1 className='text-h4 font-600 text-N-800 md:text-h3 md:font-700'>Shopping Cart (3)</h1>

          <div className='flex flex-col justify-between gap-[24px] md:gap-[40px] lg:flex-row lg:gap-0'>
            <div className='flex flex-col gap-[48px] pt-[24px] md:pt-[40px] lg:gap-[96px]'>
              <ShoppingCard
                image='/shop-item.png'
                heading='CHAdeMO adapter rental - Available for paid supporters only (Model S/X only)'
                shopName='England - Milton Keynes'
                price='£35.00'
                priceDetails='1X £35.00 / year'
              />
              <ShoppingCard
                image='/shop-item.png'
                heading='CHAdeMO adapter rental - Available for paid supporters only (Model S/X only)'
                shopName='England - Milton Keynes'
                price='£35.00'
                priceDetails='1X £35.00 / year'
              />
              <ShoppingCard
                image='/shop-item.png'
                heading='CHAdeMO adapter rental - Available for paid supporters only (Model S/X only)'
                shopName='England - Milton Keynes'
                price='£35.00'
                priceDetails='1X £35.00 / year'
              />
              <ShoppingCard
                image='/shop-item.png'
                heading='CHAdeMO adapter rental - Available for paid supporters only (Model S/X only)'
                shopName='England - Milton Keynes'
                price='£35.00'
                priceDetails='1X £35.00 / year'
              />
            </div>

            <div className='flex h-full'>
              <PriceCard
                subTotal='£35.00'
                shippingCost='£10.00'
                discount='£0.00'
                gst='£60.50'
                total='£12,231.76'
                isDiscount={true}
              />
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
