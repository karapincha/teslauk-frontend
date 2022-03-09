import React, { FC } from 'react'
import CN from 'classnames'
import { LogoBlock } from '@/components/molecules'

export interface SupplierRibbonProps {
  [x: string]: any
}

export const SupplierRibbon: FC<SupplierRibbonProps> = ({
  className,
  list,
  ...restProps
}: SupplierRibbonProps) => {
  const SupplierRibbonClasses = CN(`supplier-ribbon`, className, {
    'w-full flex justify-between pt-[40px] md:pt-[80px] lg:pt-[80px]': true,
  })

  const logoList = [
    {
      image: '/logos/logo-011.png',
      imageGrey: '/logos/logo-011-grey.png',
      link: '#',
    },
    {
      image: '/logos/logo-012.png',
      imageGrey: '/logos/logo-012-grey.png',
      link: '#',
    },
    {
      image: '/logos/logo-013-grey.png',
      imageGrey: '/logos/logo-013-grey.png',
      link: '#',
    },
    {
      image: '/logos/logo-014-grey.png',
      imageGrey: '/logos/logo-014-grey.png',
      link: '#',
    },
    {
      image: '/logos/logo-015-grey.png',
      imageGrey: '/logos/logo-015-grey.png',
      link: '#',
    },
    {
      image: '/logos/logo-016-grey.png',
      imageGrey: '/logos/logo-016-grey.png',
      link: '#',
    },
  ]

  return (
    <div className={SupplierRibbonClasses} {...restProps}>
      <div className='container border-t border-N-100 py-[24px] lg:pt-[40px] lg:pb-[20px]'>
        <LogoBlock logoList={logoList} />
      </div>
    </div>
  )
}

SupplierRibbon.defaultProps = {}

export default SupplierRibbon
