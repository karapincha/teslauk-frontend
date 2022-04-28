import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { SectionHeading } from '@/components/molecules'
import { Button, TextField, CheckBox } from '@/components/atoms'

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
        <div className='flex flex-col items-center rounded-[12px] bg-[url(/images/hero-pattern.svg)] bg-cover bg-no-repeat py-[24px] md:pt-[40px] md:pb-[80px] lg:pt-[40px] lg:pb-[80px]'>
          <SectionHeading
            heading='Tesla Owners UK Account'
            align='center'
            headingClassName='!mb-0'
          />

          <div className='w-[90%] pt-[32px] md:w-[672px] md:pt-[32px] lg:w-[672px] lg:pt-[32px]'>
            <div className='w-full rounded-[8px] bg-white px-[16px] py-[32px] md:px-[40px] md:py-[32px] lg:px-[40px] lg:py-[32px]'>
              <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>
                Register as a Free associate Member
              </h4>

              <div className='flex flex-col gap-[16px]'>
                <div className='flex w-full flex-col justify-between gap-[16px] md:flex-row lg:flex-row lg:gap-[16px]'>
                  <TextField placeholder='Enter first name' label='First Name' />
                  <TextField placeholder='Enter first name' label='Last name' />
                </div>

                <TextField placeholder='Enter username' label='Username' required />
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

                <div className='flex flex-col gap-[4px]'>
                  <TextField
                    label='Vehicle VIN No (Available from app)'
                    required
                    placeholder='Enter vehicle Vin No'
                  />
                </div>

                <div className='flex flex-col justify-between gap-[8px] md:flex-row md:gap-[48px]'>
                  <div className='flex flex-col gap-[12px]'>
                    <TextField placeholder='Model 3' label='Tesla Model' required />
                    <p className='text-sm font-500 text-N-600'>
                      Select your model of Tesla owned here (if multiple then pick the one that
                      matches the VIN No above)
                    </p>
                  </div>
                  <div className='flex h-[118px] justify-center'>
                    <img src='/images/model-3.png' height={118} width={264} />
                  </div>
                </div>

                <TextField
                  label='How did you find out about Tesla Owners UK'
                  required
                  placeholder='Google / Search engine'
                />

                <p className="text-md font-500 text-N-600 after:ml-[2px] after:text-B-500 after:content-['*']">
                  Rules and Privacy Policy
                </p>
              </div>

              <div className='flex flex-col justify-between !pt-[12px] md:flex-row md:pt-[24px] lg:flex-row lg:pt-[24px]'>
                <div className='flex gap-[12px]'>
                  <CheckBox />
                  <p className='text-base font-500 text-N-600'>
                    By clicking, I agree to adhere to the Club Rules and to the Club Privacy Policy
                    (outlined in the footer below). I agree that the Club may contact me for the
                    purposes of membership administration, marketing and other communications as set
                    out in our Club Privacy Policy. You may opt out at any time.
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

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
