import CN from 'classnames'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Button, CheckBox, TextField } from '@/components/atoms'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { useViewport } from '@/utils'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container pt-[40px] pb-[40px] md:pb-[80px] lg:flex lg:gap-[48px] lg:pb-[80px]'>
        <div className='dashboard-menu hidden lg:flex'>
          <div className='w-full'>
            <DashboardMenu />
          </div>
        </div>

        <div>
          <div className='heading'>
            <h4 className='text-h4 font-600 text-N-800'>Addresses</h4>
          </div>
          <div className='pt-[24px] md:pt-[40px] lg:pt-[40px]'>
            <div className='text-base font-400 text-N-600'>
              <p>The following addresses will be used on the checkout page by default.</p>
            </div>

            <div className='flex flex-col gap-[24px] pt-[24px] md:pt-[40px] lg:gap-[40px] lg:pt-[40px]'>
              <div>
                <p className='text-base font-500 text-N-800'>Billing address</p>
                <div className='input-field flex flex-col gap-[16px] pt-[16px] lg:w-[600px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[48px]'>
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

                  <div className='flex gap-[12px]'>
                    <div className='pt-[8px]'>
                      <CheckBox />
                    </div>
                    <p>
                      Update the Billing Address used for all future renewals of my active
                      subscriptions (optional)
                    </p>
                  </div>
                </div>
                <div className='save-button pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                  <Link href='#'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'>
                      Save address
                    </Button>
                  </Link>
                </div>
              </div>

              <div className='pt-[40px]'>
                <p className='text-base font-500 text-N-800'>Shipping address</p>
                <div className='input-field flex flex-col gap-[16px] pt-[16px] lg:w-[600px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[48px]'>
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

                  <div className='flex gap-[12px]'>
                    <div className='pt-[8px]'>
                      <CheckBox />
                    </div>
                    <p>
                      Update the Billing Address used for all future renewals of my active
                      subscriptions (optional)
                    </p>
                  </div>
                </div>
                <div className='save-button pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                  <Link href='#'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'>
                      Save address
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
