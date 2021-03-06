import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useViewport } from '@/utils'

import { Logo } from '@/components/atoms/Logo'

const Page: NextPage = () => {
  const router = useRouter()
  const { isTablet, isMobile } = useViewport()

  useEffect(() => {
    router.push('https://teslaowners.kp.lk/logout')
  }, [])

  return (
    <>
      <Head>
        <title>Logout - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='flex h-screen flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-[12px] text-center'>
          <Link href='/' passHref>
            <Logo className='cursor-pointer' size={isMobile ? 52 : isTablet ? 68 : 100} />
          </Link>
          <h1 className='text-h1 font-600 text-N-800'>Logged out</h1>
          <p className='text-lg text-N-800'>You have been logged out.</p>
          <Link href='/'>
            <a className='font-500 text-R-400'>Return to home</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
