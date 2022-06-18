import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import {
  Tag,
  ArrowLeft,
  Globe,
  MapPin,
  Phone,
  Mail,
  Bookmark,
  Compass,
  Calendar,
  Clock,
} from 'react-feather'
import { useViewport } from '@/utils'
import { Button, TextField } from '@/components/atoms'
import { EventHeader } from '@/components/molecules/EventHeader'

const Page: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()

  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='header-surface relative bg-[url(/images/004.svg)] bg-cover bg-no-repeat'>
        <div className='container flex h-full flex-col'>
          <div className='flex pt-[24px] pb-[16px] md:pt-[40px] md:pb-[52px] lg:py-[50px]'>
            <Button
              appearance='ghost'
              iconBefore={<ArrowLeft size={20} />}
              className='h-[unset] px-0 hover:text-B-500'>
              Back to Events
            </Button>
          </div>
        </div>
        <div className='container rounded-t-[12px] bg-N-10 md:rounded-t-none md:bg-inherit'>
          <EventHeader
            month='Dec'
            date='12'
            heading='Festive Frolic at Sarn (with South Wales & <br class="hidden lg:inline" /> Bristol Chapter)'
          />
        </div>
      </div>

      {/* Event details section */}
      <div className='event-details container flex flex-col gap-[24px] pb-[40px] md:gap-[40px] md:pt-[40px] md:pb-[80px] lg:flex-row lg:gap-[48px]'>
        <div className='flex flex-col gap-[24px]  lg:w-[784px] lg:gap-[40px]'>
          <p className=' text-md font-500 text-N-600 md:text-base'>
            “Deck the stalls with Tesla Tidings So come, all ye faithful Half full or triumphant O
            come ye, O come ye to Sarn Come and behold him Ken" ? Alright I’ll quit whilst
            marginally behind.
            <br /> <br />
            Looking at a general festive frolic at Sarn for the SW and Bristol members as well as
            main group members.
            <br /> <br />
            All welcome – young/less young/newbie’s/old’n’boldies; pets welcome - particularly if
            named Odin. Date: 12 Dec. Time: 1400-1600 Location: Sarn Services Agenda: none (well,
            maybe could discuss a potential additional route to the next Brecon rally) Welsh cakes
            plus seasonal goodies will be provided (by Prince's last surviving 'Welsh' relative ?)
            Hope to see you there. ?
          </p>

          <div className='h-[180px] md:h-[370px] lg:h-[413px] lg:w-[784px]'>
            <img
              src='https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              className='h-full w-full rounded-[12px] object-cover object-center'
            />
          </div>
        </div>

        {/* Side bar */}
        <div className='flex flex-col md:flex-row-reverse md:gap-[24px] lg:flex-col  lg:gap-[40px]'>
          <div className='flex flex-col gap-[24px]'>
            <div className='flex flex-col gap-[16px]'>
              {/* Address */}
              <div className='flex  gap-[8px]'>
                <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                  <MapPin size={16} />
                </div>
                <p className='text-md font-500 text-N-600'>
                  Welcome Break Sarn Park, Sarn, Bridgend CF32 9SY, UK
                </p>
              </div>

              {/* Calendar */}
              <div className='flex items-center gap-[8px]'>
                <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                  <Calendar size={16} />
                </div>
                <p className='text-md font-500 text-N-600'>12 December 2021</p>
              </div>

              {/* Time */}
              <div className='flex items-center gap-[8px]'>
                <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                  <Clock size={16} />
                </div>
                <p className='text-md font-500 text-N-600'>14:00 - 16:00</p>
              </div>

              {/* Email */}
              <div className='flex items-center gap-[8px]'>
                <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                  <Mail size={16} />
                </div>
                <p className='text-md font-500 text-N-600'>events@teslaowners.org.uk</p>
              </div>
            </div>

            {isMobile && (
              <div className='flex flex-col'>
                <img
                  src='https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  className='h-[343px] w-full rounded-[12px] object-cover object-center md:h-[368px] md:w-[368px]  '
                />
              </div>
            )}

            <div className='flex'>
              <Button appearance='primary' className='w-full lg:w-[unset]'>
                Register
              </Button>
            </div>
          </div>

          {/* Map */}
          {!isMobile && (
            <div className='flex'>
              <img
                src='https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                className='h-[343px] w-full rounded-[12px] object-cover object-center md:h-[368px] md:w-[368px]  '
              />
            </div>
          )}
        </div>
      </div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Page
