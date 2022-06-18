import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { PageHeader, LinkListCard } from '@/components/molecules'
import { FileText, Mail } from 'react-feather'
import { useRouter } from 'next/router'
import { ContactCta } from '@/components/molecules/ContactCta'
import { useViewport } from '@/utils'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CommonLayout>
        <div className='container flex pt-[20px]'>
          <PageHeader
            hasSearch
            heading='Written by Tesla Owners <br /> for Tesla Owners'
            description='Search through over 120 guides'
            image='https://images.unsplash.com/flagged/photo-1579782647395-2e6fb36a64f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80'
            headingClassName='text-N-10'
            descriptionClassName='text-white'
            btnProps={{
              onClick: (e: any) => {
                e.preventDefault()
                router.push('/guides-search')
              },
              children: 'Search',
              appearance: 'primary',
            }}
            inputProps={{
              onChange: (e: any) => console.log(e.target.value),
              placeholder: 'Search your question',
              size: 'lg',
            }}
          />
        </div>

        <div className='container flex flex-col gap-[24px] pt-[24px] pb-[40px] md:gap-[40px] md:py-[80px]'>
          <h4 className='text-h4 font-600 text-N-800'>Browse by the categories</h4>

          <div className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-[32px]'>
            <LinkListCard
              list={[
                {
                  id: 0,
                  textIcon: <FileText size={20} />,
                  text: '100 things you never knew about your Tesla car (Model S & X edition)',
                },
                {
                  id: 1,
                  textIcon: <FileText size={20} />,
                  text: 'Everything you learn as a new Tesla owner in winter',
                },
                {
                  id: 2,
                  textIcon: <FileText size={20} />,
                  text: 'Tracking your Tesla from the factory to the UK',
                },
                {
                  id: 3,
                  textIcon: <FileText size={20} />,
                  text: 'Tesla Charging Etiquette',
                },
                {
                  id: 4,
                  textIcon: <FileText size={20} />,
                  text: 'Charging Cables and Adapters',
                },
              ]}
              heading='About the car'
              articleCount='24'
            />

            <LinkListCard
              list={[
                {
                  id: 0,
                  textIcon: <FileText size={20} />,
                  text: '100 things you never knew about your Tesla (Model S & X edition)',
                },
                {
                  id: 1,
                  textIcon: <FileText size={20} />,
                  text: 'Everything you learn as a new Tesla owner in winter',
                },
                {
                  id: 2,
                  textIcon: <FileText size={20} />,
                  text: 'Tracking your Tesla from the factory to the UK',
                },
                {
                  id: 3,
                  textIcon: <FileText size={20} />,
                  text: 'Tesla Charging Etiquette',
                },
              ]}
              heading='For new owners'
            />

            <LinkListCard
              list={[
                {
                  id: 0,
                  textIcon: <FileText size={20} />,
                  text: '100 things you never knew about your Tesla (Model S & X edition)',
                },
                {
                  id: 1,
                  textIcon: <FileText size={20} />,
                  text: 'Everything you learn as a new Tesla owner in winter',
                },
                {
                  id: 2,
                  textIcon: <FileText size={20} />,
                  text: 'Tracking your Tesla from the factory to the UK',
                },
                {
                  id: 3,
                  textIcon: <FileText size={20} />,
                  text: 'Tesla Charging Etiquette',
                },
                {
                  id: 4,
                  textIcon: <FileText size={20} />,
                  text: 'Charging Cables and Adapters',
                },
              ]}
              heading='Upgrading, Modifying & Fixing'
              articleCount='24'
            />

            <LinkListCard
              list={[
                {
                  id: 0,
                  textIcon: <FileText size={20} />,
                  text: '100 things you never knew about your Tesla (Model S & X edition)',
                },
                {
                  id: 1,
                  textIcon: <FileText size={20} />,
                  text: 'Everything you learn as a new Tesla owner in winter',
                },
                {
                  id: 2,
                  textIcon: <FileText size={20} />,
                  text: 'Tracking your Tesla from the factory to the UK',
                },
                {
                  id: 3,
                  textIcon: <FileText size={20} />,
                  text: 'Tesla Charging Etiquette',
                },
                {
                  id: 4,
                  textIcon: <FileText size={20} />,
                  text: 'Charging Cables and Adapters',
                },
              ]}
              heading='Charging away from home'
              articleCount='24'
            />

            <LinkListCard
              list={[
                {
                  id: 0,
                  textIcon: <FileText size={20} />,
                  text: '100 things you never knew about your Tesla (Model S & X edition)',
                },
                {
                  id: 1,
                  textIcon: <FileText size={20} />,
                  text: 'Everything you learn as a new Tesla owner in winter',
                },
                {
                  id: 2,
                  textIcon: <FileText size={20} />,
                  text: 'Tracking your Tesla from the factory to the UK',
                },
                {
                  id: 3,
                  textIcon: <FileText size={20} />,
                  text: 'Tesla Charging Etiquette',
                },
              ]}
              heading='Fear, Uncertainty & Doubt'
            />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
