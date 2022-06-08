import React, { FC, useEffect, useState } from 'react'
import CN from 'classnames'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { getHomePage, GET_COMMON } from '../../../../lib/graphql'
import { useQuery, gql } from '@apollo/client'

export interface CommonProps {
  [x: string]: any
}

export const Common: FC<CommonProps> = ({ className, children, ...restProps }: CommonProps) => {
  const CommonClasses = CN(`common`, className)
  const [layoutData, setLayoutData] = useState<any>({})

  const { data, loading, error, refetch } = useQuery(GET_COMMON)

  useEffect(() => {
    data && setLayoutData(data)
  }, [data])

  return (
    <>
      {loading && (
        <div className='flex h-screen w-screen items-center justify-center'>Loading...</div>
      )}

      {!loading && (
        <>
          <Header className='pt-[16px] md:pt-[24px] md:pb-[8px] lg:py-[24px]' />
          <main className={CommonClasses} {...restProps}>
            {children}
          </main>
          <SupplierRibbon data={layoutData?.supplierBar?.blockSuppliersBar} className='!pt-0' />
          <Footer data={layoutData?.footer?.blockFooter} />
        </>
      )}
    </>
  )
}

Common.defaultProps = {}

export default Common
