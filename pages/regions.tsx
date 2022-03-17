import type { NextPage } from 'next'
import CN from 'classnames'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { Button } from '@/components/atoms'
import { PageHeader, SectionHeading } from '@/components/molecules'
import { ArrowRight, ChevronRight } from 'react-feather'
import { Chip } from '@/components/atoms'
import { useViewport } from '@/utils'

const Home: NextPage = () => {
  const { isDesktop, isMobile, isTablet } = useViewport()
  const regionLinks = [
    {
      id: 0,
      label: 'Scotland',
      url: '#',
      isActive: false,
    },
    {
      id: 1,
      label: 'East Midlands',
      url: '#',
      isActive: false,
    },
    {
      id: 2,
      label: 'Gloucestershire',
      url: '#',
      isActive: false,
    },
    {
      id: 3,
      label: 'North East',
      url: '#',
      isActive: true,
    },
    {
      id: 4,
      label: 'West Midlands',
      url: '#',
      isActive: false,
    },
    {
      id: 5,
      label: 'London',
      url: '#',
      isActive: false,
    },
    {
      id: 6,
      label: 'North West',
      url: '#',
      isActive: false,
    },
    {
      id: 7,
      label: 'South Wales',
      url: '#',
      isActive: false,
    },
    {
      id: 8,
      label: 'South East England',
      url: '#',
      isActive: false,
    },
    {
      id: 9,
      label: 'Nothern Ireland',
      url: '#',
      isActive: false,
    },
    {
      id: 10,
      label: 'East Anglia',
      url: '#',
      isActive: false,
    },
    {
      id: 11,
      label: 'South England',
      url: '#',
      isActive: false,
    },
    {
      id: 12,
      label: 'Yorkshire',
      url: '#',
      isActive: false,
    },
    {
      id: 13,
      label: '3 Countries (Bucks, Beds & Herts)',
      url: '#',
      isActive: false,
    },
    {
      id: 14,
      label: 'South West England',
      url: '#',
      isActive: false,
    },
    {
      id: 15,
      label: 'North Wales',
      url: '#',
      isActive: false,
    },
    {
      id: 16,
      label: 'Oxfordshire',
      url: '#',
      isActive: false,
    },
  ]
  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='container pt-[24px] md:pt-[40px] lg:pt-[40px]'>
        <div className='h-[114px] justify-center bg-none bg-cover bg-no-repeat md:flex md:bg-[url(/images/regions-md.png)] lg:flex lg:h-[272px] lg:bg-[url(/images/regions.png)]'>
          <div className='flex flex-col items-center justify-center gap-[16px] text-center'>
            <h1 className='text-h3 font-700 text-N-800 md:text-h2 lg:text-h1'>Regions</h1>
            <p className='text-md font-500 text-N-600 md:w-[368px] lg:w-[368px]'>
              Regions allow owners to meet up and discuss on a more local level, all region groups
              are supported by Tesla Owners UK and Tesla.
            </p>
          </div>
        </div>
        {isMobile && (
          <div className='pt-[40px]'>
            <img src='/images/regions-small.png' className='w-full' />
          </div>
        )}

        <div className='region-list pt-[40px] md:pt-[80px] lg:pt-[80px]'>
          <ul className='flex flex-col gap-[24px] md:flex md:px-[88px] lg:grid lg:grid-cols-3 lg:gap-x-[48px] lg:gap-y-[24px] lg:px-0'>
            {regionLinks.map(({ id, url, label, isActive }, index) => (
              <li key={id || index}>
                <a
                  target='_blank'
                  href={url}
                  className={CN(`flex items-center justify-between `, {
                    'text-N-800': !isActive,
                    'text-B-500': isActive,
                  })}>
                  <h5
                    className={CN(`text-h5 hover:text-B-500`, {
                      'text-N-800': !isActive,
                      'text-B-500': isActive,
                    })}>
                    {label}
                  </h5>
                  <span>{<ChevronRight size={24} />}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
