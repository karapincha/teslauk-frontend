import React, { FC } from 'react'
import CN from 'classnames'
import { LogoBlock } from '@/components/molecules'

export interface SupplierRibbonProps {
  [x: string]: any
}

export const SupplierRibbon: FC<SupplierRibbonProps> = ({
  className,
  list,
  data,
  ...restProps
}: SupplierRibbonProps) => {
  const SupplierRibbonClasses = CN(`supplier-ribbon`, className, {
    'w-full flex justify-between': true,
  })

  return (
    <div className={SupplierRibbonClasses} {...restProps}>
      <div className='container border-t border-N-100 py-[24px] lg:pt-[40px] lg:pb-[20px]'>
        <LogoBlock data={data || []} />
      </div>
    </div>
  )
}

SupplierRibbon.defaultProps = {}

export default SupplierRibbon
