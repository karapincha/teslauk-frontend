import CN from 'classnames'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Button, CheckBox } from '@/components/atoms'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container pt-[40px] pb-[40px] lg:flex lg:gap-[48px] lg:pb-[80px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div>
            <div className='heading'>
              <h4 className='text-h4 font-600 text-N-800'>Alerts</h4>
            </div>
            <div className='pt-[24px] md:pt-[40px] lg:pt-[32px]'>
              <div className='pb-[24px] text-base font-500 text-N-600 md:pb-[40px] lg:pb-[32px]'>
                Alert me for following topics.
              </div>

              <div className='flex flex-col md:flex-row md:gap-[104px] lg:flex-row lg:gap-[104px]'>
                <div className='flex flex-col gap-[24px] text-base font-600 text-N-600'>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>School Show and Tell Events Nearby</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Tesla New Owner Support</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Home & Work</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p> Charger Installer</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Solar</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Tesla New Owner Support</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Home & Work</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p> Charger Installer</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Solar</p>
                  </div>
                </div>

                <div className='flex flex-col gap-[24px] pt-[24px] text-base font-600 text-N-600 md:pt-0 lg:pt-0'>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Powerwall</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Sale / Offers</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Home & Work</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p> Charger Installer</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Solar</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Tesla New Owner Support</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Home & Work</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p> Charger Installer</p>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <CheckBox />
                    <p>Solar</p>
                  </div>
                </div>
              </div>

              <div className='save-button pt-[24px] md:pt-[40px] lg:pt-[40px]'>
                <Link href='#'>
                  <Button
                    className='w-full text-base !font-600 !text-N-800 md:w-[unset] lg:w-[unset]'
                    appearance='secondary'>
                    Save changes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
