import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { Button } from '@/components/atoms'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container pt-[24px] md:pt-[40px] lg:pt-[40px]'>
        <div className='flex flex-col items-center bg-white py-[48px] px-[16px] md:py-[132px] md:px-[64px] lg:py-[132px] lg:px-0'>
          <img src='/images/error-image.png' className='w-[312px] lg:w-[576px]' />
          <h2 className='pt-[20px] text-h3 font-700 text-N-800 md:text-h2 lg:text-h2'>
            Page not found
          </h2>
          <p className='w-full pt-[16px] text-center text-base text-N-600 lg:w-[46%]'>
            We are embarassed! Human Error is inevitable, but this is unacceptable. We'll look into
            the matter now.
          </p>
          <div className='w-full pt-[16px]  md:w-[unset] lg:w-[unset]'>
            <Link href='#'>
              <Button
                className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                appearance='primary'>
                Back to home page
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
