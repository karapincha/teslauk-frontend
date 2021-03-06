import React, { FC } from 'react'
import CN from 'classnames'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { SideMenu } from '@/components/molecules'
import { Logo } from '@/components/atoms/Logo'

import { useAppContext } from '@/context'
import { useViewport } from '@/utils'

export interface CommonProps {
  [x: string]: any
}

export const Common: FC<CommonProps> = ({
  className,
  children,
  showSideMenu,
  setShowSideMenu,
  ...restProps
}: CommonProps) => {
  const CommonClasses = CN(`common pb-[40px]`, className)
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

      {!isLoading && (
        <>
          <SideMenu menuItems={sidemenu?.menuItems} />
          <Header
            menuItems={{
              leftMenu: header?.leftLinks,
              rightMenu: header?.rightLinks,
            }}
            className='pt-[16px] md:pt-[24px] md:pb-[8px] lg:py-[24px]'
          />

          <main className={CommonClasses} {...restProps}>
            {children}
          </main>

          <SupplierRibbon data={suppliers} className='!pt-0' />
          <Footer data={footer} />
        </>
      )}
    </>
  )
}

export default Common
