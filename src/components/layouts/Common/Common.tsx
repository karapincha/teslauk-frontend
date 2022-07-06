import React, { FC, useEffect, useState, useRef } from 'react'
import CN from 'classnames'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { GET_COMMON } from '../../../../lib/graphql'
import { useQuery, gql } from '@apollo/client'
import { SideMenu } from '@/components/molecules'
import { Logo } from '@/components/atoms/Logo'
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
  const [layoutData, setLayoutData] = useState<any>({})
  const { isTablet, isMobile, isDesktop } = useViewport()

  const { data, loading, error, refetch } = useQuery(GET_COMMON)

  useEffect(() => {
    data && setLayoutData(data)
    console.log(data)
  }, [data])

  return (
    <>
      {loading && (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-[8px]'>
          <Logo className='cursor-pointer' size={isMobile ? 52 : isTablet ? 68 : 100} />
          <p>Loading...</p>
        </div>
      )}

      {!loading && (
        <>
          <SideMenu menuItems={layoutData?.menu?.blockGlobalHeader?.sidemenuLinks} />
          <Header
            menuItems={{
              leftMenu: layoutData?.menu?.blockGlobalHeader?.leftLinks,
              rightMenu: layoutData?.menu?.blockGlobalHeader?.rightLinks,
            }}
            className='pt-[16px] md:pt-[24px] md:pb-[8px] lg:py-[24px]'
          />

          <main className={CommonClasses} {...restProps}>
            {children}
          </main>

          <SupplierRibbon data={layoutData?.suppliers?.nodes} className='!pt-0' />
          <Footer data={layoutData?.footer?.blockFooter} />
        </>
      )}
    </>
  )
}

Common.defaultProps = {}

export default Common
