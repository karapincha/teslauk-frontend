import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { ShopCategories } from '@/components/sections/ShopCategories'
import { useState } from 'react'
import { VehicleCard } from '@/components/molecules/VehicleCard'
import { modelS, model3 } from '@/dummy-data/vehicle-list'
import { ShopCard } from '@/components/molecules/ShopCard'
import { Button } from '@/components/atoms'
import { ArrowRight } from 'react-feather'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const [activeTab, setActiveTab] = useState('accessories')
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container pt-[24px] md:pt-[40px] lg:pt-[40px]'>
          <div className='flex flex-col items-center gap-[16px]'>
            <h1 className='text-h1 font-700 text-N-800'>Shop</h1>
            <p className='max-w-[506px] text-center text-md font-500 text-N-600'>
              The Tesla Owners UK Directory showcases the best Tesla related products and services
              from across the UK.
            </p>
          </div>
        </div>

        {/* Shop categories */}
        <div className='container flex flex-col justify-between py-[80px] md:flex-row'>
          <div className='flex flex-col gap-[32px]'>
            <h3 className='text-h3 font-700 text-N-800'>Categories</h3>
            <ShopCategories onChange={(tab: any) => setActiveTab(tab)} />
          </div>

          {/* Category images */}
          <div className='flex pt-[24px] md:pt-0'>
            {activeTab === 'accessories' && (
              <img
                src='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                className='h-[368px] w-[368px] rounded-[8px] object-cover object-center'
              />
            )}
            {activeTab === 'charging-cables' && (
              <img
                src='https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472'
                className='h-[368px] w-[368px] rounded-[8px] object-cover object-center'
              />
            )}
            {activeTab === 'packs-and-lanyards' && (
              <img
                src='https://images.unsplash.com/photo-1541253380987-542438384eec?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'
                className='h-[368px] w-[368px] rounded-[8px] object-cover object-center'
              />
            )}
            {activeTab === 'renewals' && (
              <img
                src='https://images.unsplash.com/photo-1491921125492-f0b9c835b699?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'
                className='h-[368px] w-[368px] rounded-[8px] object-cover object-center'
              />
            )}
            {activeTab === 'stickers' && (
              <img
                src='https://images.unsplash.com/photo-1612810806695-30f7a8258391?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074'
                className='h-[368px] w-[368px] rounded-[8px] object-cover object-center'
              />
            )}
          </div>
        </div>

        {/* Shop by model */}
        <div className='bg-N-50'>
          <div className='container py-[80px]'>
            <div className='flex flex-col gap-[40px]'>
              <h3 className='text-h3 font-700 text-N-800'>Shop by model</h3>
              <div className='flex justify-center gap-[48px]'>
                <VehicleCard image='/cars/model-s.png' model='Model S' list={modelS} />
                <VehicleCard image='/cars/car-01.png' model='Model S' list={model3} />
                <VehicleCard image='/cars/car-02.png' model='Model S' list={modelS} />
                <VehicleCard image='/cars/car-02.png' model='Model S' list={modelS} />
              </div>
            </div>
          </div>
        </div>

        <div className='container py-[80px]'>
          <div className='flex items-center justify-between'>
            <h4 className='text-h4 font-600 text-N-800'>New arrivals</h4>
            <Button appearance='ghost' iconAfter={<ArrowRight size={20} />}>
              View more
            </Button>
          </div>
          <div className='flex gap-[48px] pt-[40px]'>
            <ShopCard
              image='/shop-item.png'
              heading='Charging Cable (EU+UK) Rental Set'
              price='£6.00'
              shopName='Milton Keynes Team'
            />
            <ShopCard
              image='/shop-item.png'
              heading='Charging Cable (EU+UK) Rental Set'
              price='£6.00'
              shopName='Milton Keynes Team'
            />
            <ShopCard
              image='/shop-item.png'
              heading='Charging Cable (EU+UK) Rental Set'
              price='£6.00'
              shopName='Milton Keynes Team'
            />
            <ShopCard
              image='/shop-item.png'
              heading='Charging Cable (EU+UK) Rental Set'
              price='£6.00'
              shopName='Milton Keynes Team'
            />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
