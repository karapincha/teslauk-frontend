import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useViewport } from '@/utils'
import { ShoppingCard } from '@/components/molecules/ShoppingCard'
import { PriceCard } from '@/components/molecules/PriceCard'
import { CheckBox, TextField } from '@/components/atoms'
import { CheckoutCard } from '@/components/molecules/CheckoutCard'
import { CheckoutProductCard } from '@/components/molecules/CheckoutProductCard'
import { PaymentGateway } from '@/components/sections/PaymentGateway'

const Home: NextPage = () => {
  const { isMobile, isTablet, isDesktop } = useViewport()
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container'>
        <div className='flex flex-col gap-[48px] pb-[40px]'>
          <h1 className='text-h4 font-600 text-N-800 md:text-h3 md:font-700'>Checkout</h1>
          <h2 className='text-h4 font-600 text-N-800'>Billing details</h2>
        </div>

        <div className='flex justify-between gap-[48px]'>
          <div className='w-full pb-[80px]'>
            <h5 className='text-h5 font-500 text-N-800'>Billing address</h5>

            {/* Address details form */}
            <div className='input-field flex w-full flex-col gap-[16px] pt-[40px]'>
              <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row'>
                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>First Name</p>
                  <TextField placeholder='Enter first name' />
                </div>
                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Last Name</p>
                  <TextField placeholder='Enter last name' />
                </div>
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Company name (optional)</p>
                <TextField placeholder='Enter company name' />
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Country / Region</p>
                <TextField placeholder='Select a country / Region' />
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Street address</p>
                <div className='flex flex-col gap-[16px]'>
                  <TextField placeholder='House number and street name' />
                  <TextField placeholder='Apartment, suite, unit, etc. (optional)' />
                </div>
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Town / City</p>
                <TextField placeholder='Enter town / city' />
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>County (optional)</p>
                <TextField placeholder='Enter country' />
              </div>

              <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[48px]'>
                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Postcode</p>
                  <TextField placeholder='Enter postcode' />
                </div>
                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Phone</p>
                  <TextField placeholder='Enter phone' />
                </div>
              </div>

              <div className='flex w-full flex-col gap-[4px]'>
                <p className='text-md text-N-600'>Email address</p>
                <TextField placeholder='Enter email address' />
              </div>

              <div className='flex items-center gap-[12px]'>
                <CheckBox children='Ship to a different shipping address' />
              </div>
            </div>
          </div>

          <div>
            <CheckoutCard
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

      <div className='container border-t border-N-200 py-[80px]'>
        <h4 className='text-h4 font-600 text-N-800'>Payment method</h4>

        <div className='flex gap-[48px] pt-[40px]'>
          <PaymentGateway />

          <div>hi</div>
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
