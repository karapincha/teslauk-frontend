import React, { FC, useState } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { SupplierDetailsAbout } from '../SupplierDetailsAbout'
import { SupplierDetailsRelatedListings } from '../SupplierDetailsRelatedListings'
import { SupplierDetailsNearbyListings } from '../SupplierDetailsNearbyListings'

export interface SupplierDetailsTabsProps {
  [x: string]: any
  onChange: any
}

export const SupplierDetailsTabs: FC<SupplierDetailsTabsProps> = ({
  className,
  onChange,
  data,
  ...restProps
}: SupplierDetailsTabsProps) => {
  const SupplierDetailsTabsClasses = CN(`supplier-details-tabs`, className)
  const [activeTab, setActiveTab] = useState('about')

  const handleChange = (tab: any) => {
    onChange && onChange(tab)
    setActiveTab(tab)
  }

  return (
    <div className={SupplierDetailsTabsClasses} {...restProps}>
      <div className='tabs flex flex-col'>
        <div className='flex  items-center gap-[24px] border-b border-N-100 lg:w-[784px]'>
          <Button
            appearance={activeTab === 'about' ? 'ghost' : 'link'}
            className={CN('mb-[-1px] rounded-b-[0px] px-0', {
              ' text-N-500': activeTab !== 'about',
              'border-b-B-500': activeTab === 'about',
            })}
            onClick={() => handleChange('about')}>
            About
          </Button>
          {/* <Button
            appearance={activeTab === 'related-listings' ? 'ghost' : 'link'}
            className={CN('mb-[-1px] rounded-b-[0px] px-0 ', {
              ' text-N-500': activeTab !== 'related-listings',
              'border-b-B-500': activeTab === 'related-listings',
            })}
            onClick={() => handleChange('related-listings')}>
            Related listings
          </Button>
          <Button
            appearance={activeTab === 'nearby-listings' ? 'ghost' : 'link'}
            className={CN('mb-[-1px] rounded-b-[0px] px-0', {
              ' text-N-500': activeTab !== 'nearby-listings',
              'border-b-B-500': activeTab === 'nearby-listings',
            })}
            onClick={() => handleChange('nearby-listings')}>
            Nearby listings
          </Button> */}
        </div>

        <div className='flex'>
          {activeTab === 'about' && <SupplierDetailsAbout data={data} />}
          {/* {activeTab === 'related-listings' && <SupplierDetailsRelatedListings data={data} />} */}
          {/* {activeTab === 'nearby-listings' && <SupplierDetailsNearbyListings data={data} />} */}
        </div>
      </div>
    </div>
  )
}

SupplierDetailsTabs.defaultProps = {}

export default SupplierDetailsTabs
