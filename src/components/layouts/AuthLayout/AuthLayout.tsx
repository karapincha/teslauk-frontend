import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { SideMenu } from '@/components/molecules'
import { Logo, Button } from '@/components/atoms'

import { useAppContext } from '@/context'
import { useViewport } from '@/utils'

export interface AuthLayoutProps {
  [x: string]: any
}

export const AuthLayout: FC<AuthLayoutProps> = ({
  className,
  children,
  ...restProps
}: AuthLayoutProps) => {
  const AuthLayoutClasses = CN(`auth-layout`, className)
  const { isTablet, isMobile, isDesktop } = useViewport()
  const { sidemenu, header, footer, suppliers, user, isLoading }: any = useAppContext()

  return (
    <>
      {isLoading && (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-[8px]'>
          <Logo className='cursor-pointer' size={isMobile ? 52 : isTablet ? 68 : 100} />
          <p>Loading...</p>
        </div>
      )}

      {(!user || !user?.id) && (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-[16px]'>
          <Link href='/'>
            <a>
              <Logo className='cursor-pointer' size={isMobile ? 52 : isTablet ? 68 : 100} />
            </a>
          </Link>

          <Link href='/auth/login'>
            <Button view='outline' className='hidden lg:flex' size='sm'>
              Please Login
            </Button>
          </Link>
        </div>
      )}

      {!isLoading && user && user?.id && (
        <>
          <SideMenu menuItems={sidemenu?.menuItems} />
          <Header
            menuItems={{
              leftMenu: header?.leftLinks,
              rightMenu: header?.rightLinks,
            }}
            className='pt-[16px] md:pt-[24px] md:pb-[8px] lg:py-[24px]'
          />
          <main className={AuthLayoutClasses} {...restProps}>
            {children}
          </main>
          <SupplierRibbon data={suppliers} className='!pt-0' />
          <Footer data={footer} />
        </>
      )}
    </>
  )
}

AuthLayout.defaultProps = {}

export default AuthLayout
