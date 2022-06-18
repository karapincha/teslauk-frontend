import CN from 'classnames'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, TextField } from '@/components/atoms'
import { DashboardMenu } from '@/components/molecules/DashboardMenu'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CommonLayout>
        <div className='container pt-[40px] pb-[40px] md:pb-[80px] lg:flex lg:gap-[48px]'>
          <div className='dashboard-menu hidden lg:flex'>
            <div className='w-full'>
              <DashboardMenu />
            </div>
          </div>

          <div>
            <div className='heading'>
              <h4 className='text-h4 font-600 text-N-800'>Account</h4>
            </div>
            <div className='personal-details pt-[24px] md:pt-[40px] lg:pt-[32px]'>
              <div className='pb-[16px] text-base font-500 text-N-800'>Personal details</div>
              <div className='input-field flex flex-col gap-[16px] lg:w-[600px]'>
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
                  <p className='text-md text-N-600'>Display name</p>
                  <TextField placeholder='Enter display name' />
                </div>

                <div className='flex w-full flex-col gap-[4px]'>
                  <p className='text-md text-N-600'>Email address</p>
                  <TextField placeholder='Enter email address' />
                </div>
              </div>

              <div className='password pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                <div className='pb-[16px] text-base font-500 text-N-800'>Password</div>

                <div className='flex flex-col gap-[16px] lg:w-[328px]'>
                  <div className='flex flex-col gap-[4px]'>
                    <p className='text-md text-N-600'>
                      Current password (leave blank to leave unchanged)
                    </p>
                    <TextField type='password' placeholder='Enter current password here' />
                  </div>
                  <div className='flex flex-col gap-[4px]'>
                    <p className='text-md text-N-600'>
                      New password (leave blank to leave unchanged)
                    </p>
                    <TextField type='password' placeholder='Enter new password here' />
                  </div>
                </div>

                <div className='save-button pt-[24px] md:pt-[40px] lg:pt-[32px]'>
                  <Link href='#'>
                    <Button
                      className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                      appearance='primary'>
                      Save changes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
