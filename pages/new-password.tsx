import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'

import { SectionHeading } from '@/components/molecules'
import { PasswordReset } from '@/components/forms/PasswordReset'
import { ApprovalPopup } from '@/components/molecules/ApprovalPopup'
import CN from 'classnames'
import { NewPassword } from '@/components/forms/NewPassword'

const Page: NextPage = () => {
  const [activeTab, setActiveTab] = useState('password-reset')
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container pb-[40px] md:pb-[80px]'>
        <div className='flex flex-col items-center rounded-[12px] bg-[url(/images/patterns/background.svg)] bg-cover bg-no-repeat py-[32px] lg:py-[112px]'>
          <SectionHeading
            headingClassName='md:!text-h3 !text-h4 !font-600 md:!font-700 !mb-0'
            heading='Tesla Owners UK Account'
            align='center'
          />

          <div
            className={CN('w-full px-[16px] pt-[32px] md:w-[448px] md:px-0 lg:w-[448px]', {
              '': activeTab === 'password-reset',
              'flex': activeTab !== 'password-reset',
            })}>
            <NewPassword />
          </div>

          <div
            className={CN('w-full px-[16px] pt-[32px] md:w-[448px] md:px-0 lg:w-[448px]', {
              '': activeTab === 'pop-up',
              'hidden': activeTab !== 'pop-up',
            })}>
            <ApprovalPopup
              className='lg:!py-[64px] '
              description='New password has been updated'
              btnProps={{
                appearance: 'primary',
              }}
            />
          </div>
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Page
