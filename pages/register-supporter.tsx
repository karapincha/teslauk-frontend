import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox } from '@/components/atoms'
import { ArrowUpRight } from 'react-feather'
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
        <div className='container pt-[24px] md:pt-[40px] lg:pt-[40px]'>
          <div className='flex flex-col items-center rounded-[8px] bg-[url(/images/hero-pattern.svg)] bg-cover bg-no-repeat py-[24px] md:pt-[40px] md:pb-[80px] lg:pt-[40px] lg:pb-[80px]'>
            <SectionHeading
              heading='Tesla Owners UK Account'
              align='center'
              headingClassName='!mb-0'
            />

            <div className='w-[90%] pt-[32px] md:w-[672px] lg:w-[672px]'>
              <div className='relative flex w-full justify-center rounded-t-[8px]'>
                <img src='/images/register-banner.png' className='w-full rounded-t-[8px]' />
                <h4 className='absolute top-[16px] pb-[24px] text-center text-md font-600 text-N-800 md:text-h4 lg:top-[32px]'>
                  Register as a Supporter
                </h4>
              </div>

              <div className='w-full rounded-b-[8px] bg-white px-[16px] pt-[24px] pb-[32px] md:px-[40px] lg:px-[48px]'>
                <div className='flex border-b-[1px] border-b-N-200 pb-[24px]'>
                  <div className='flex w-full flex-col gap-[8px]'>
                    <div className='flex'>
                      <p className='text-sm font-500 text-N-600'>You are purchasing</p>
                    </div>

                    <div className='flex flex-col justify-between md:flex-row lg:flex-row'>
                      <div className='flex flex-col gap-[8px] md:w-[258px] lg:w-[258px]'>
                        <p className='text-md font-400 text-N-800'>
                          Tesla Owners UK Annual Supporter Fee + Official Supporter Welcome Pack
                        </p>
                        <p className='text-sm font-500 text-N-600'>
                          Official Supporter Tesla Owners UK Subscription
                        </p>
                      </div>

                      <div className='flex flex-col gap-[12px] pt-[24px] md:items-end md:pt-0 lg:items-end lg:pt-0'>
                        <p className='text-md font-500 text-B-500'>
                          £35.00 / year and a £15.00 sign-up fee
                        </p>
                        <Link href='#'>
                          <Button
                            className='w-full text-base !text-N-800 md:w-[190px] lg:w-[190px]'
                            appearance='secondary'
                            iconAfter={<ArrowUpRight size={20} />}>
                            See all benefits
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-[16px] pt-[24px]'>
                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField placeholder='Enter first name' label='First Name' />
                    <TextField placeholder='Enter first name' label='Last name' />
                  </div>

                  <TextField placeholder='Enter username' label='Username' required />
                  <div className='flex flex-col gap-[8px]'>
                    <TextField
                      placeholder='Enter name here'
                      label='Name to appear on name badge'
                      required
                    />
                    <p className='text-sm font-500 text-N-600'>
                      So we can print your name badge please supply your name as you would like it
                      to appear on your badge
                    </p>
                  </div>

                  <div className='flex flex-col gap-[8px]'>
                    <TextField
                      placeholder='House number and street name'
                      label='Your location (to appear on badge)'
                      required
                    />
                    <p className='text-sm font-500 text-N-600'>
                      So we can print your name badge please supply your location (nearest large
                      town/city) e.g. Milton Keynes. This will appear directly below your name on
                      your badge.
                    </p>
                  </div>
                  <TextField placeholder='Enter email address' label='Email address' required />

                  <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                    <TextField
                      type='password'
                      placeholder='Enter password here'
                      label='Password'
                      required
                    />
                    <TextField
                      type='password'
                      label='Confirm password'
                      placeholder='Re-type password here'
                      required
                    />
                  </div>

                  <div className='flex w-full flex-col gap-[4px]'>
                    <TextField
                      label='Vehicle VIN No (Available from app)'
                      required
                      placeholder='Enter vehicle Vin No'
                    />
                  </div>

                  <div className='flex flex-col justify-between gap-[8px] md:flex-row md:gap-[48px] lg:flex-row lg:gap-[48px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <TextField placeholder='Model 3' label='Tesla Model' required />
                      <p className='text-sm font-500 text-N-600'>
                        Select your model of Tesla owned here (if multiple then pick the one that
                        matches the VIN No above)
                      </p>
                    </div>
                    <div className='flex h-[118px] w-full justify-center'>
                      <img src='/images/model-3.png' height={118} width={264} />
                    </div>
                  </div>

                  <TextField
                    label='How did you find out about Tesla Owners UK'
                    required
                    placeholder='Google / Search engine'
                  />

                  <div className='flex flex-col'>
                    <p className="pb-[12px] text-md font-500 text-N-600 after:ml-[2px] after:text-B-500 after:content-['*']">
                      Club rules, Articles of Association and Privacy Policy
                    </p>

                    <div className='flex w-[unset] flex-col items-start gap-[4px]'>
                      <Link href='#'>
                        <Button
                          className='h-[unset] w-[unset] border-none px-0 text-base !font-600 !text-N-800'
                          appearance='ghost'
                          iconAfter={<ArrowUpRight size={20} />}>
                          Club’s rules
                        </Button>
                      </Link>
                      <Link href='#'>
                        <Button
                          className='h-[unset] w-[unset] border-none px-0 text-base !font-600 !text-N-800'
                          appearance='ghost'
                          iconAfter={<ArrowUpRight size={20} />}>
                          Articles of Association
                        </Button>
                      </Link>
                      <Link href='#'>
                        <Button
                          className='h-[unset] w-[unset] border-none px-0 text-base !font-600 !text-N-800'
                          appearance='ghost'
                          iconAfter={<ArrowUpRight size={20} />}>
                          Privacy Policy
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-between !pt-[12px] md:flex-row md:pt-[24px] lg:flex-row lg:pt-[24px]'>
                  <div className='flex gap-[12px]'>
                    <CheckBox />
                    <p className='text-base font-500 text-N-600'>
                      By clicking, I agree to adhere to the Club Rules and to the Club Privacy
                      Policy (outlined in the footer below). I agree that the Club may contact me
                      for the purposes of membership administration, marketing and other
                      communications as set out in our Club Privacy Policy. You may opt out at any
                      time.
                    </p>
                  </div>
                </div>

                <div className='flex flex-col gap-[24px] pt-[24px] lg:pt-[16px]'>
                  <div className='w-full lg:w-[unset]'>
                    <Link href='#'>
                      <Button
                        className='w-full text-base !font-600 md:w-[unset] lg:w-[unset]'
                        appearance='primary'>
                        Register Now
                      </Button>
                    </Link>
                  </div>
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
