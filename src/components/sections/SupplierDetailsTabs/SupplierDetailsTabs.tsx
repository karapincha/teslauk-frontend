import React, { FC, useState } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { SupplierDetailsAbout } from '../SupplierDetailsAbout'

export interface SupplierDetailsTabsProps {
  [x: string]: any
}

export const SupplierDetailsTabs: FC<SupplierDetailsTabsProps> = ({
  className,
  ...restProps
}: SupplierDetailsTabsProps) => {
  const SupplierDetailsTabsClasses = CN(`supplier-details-tabs`, className)

  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className={SupplierDetailsTabsClasses} {...restProps}>
      <div className='tabs flex flex-col gap-[20px]'>
        <div className='flex items-center gap-[24px] border-b border-N-200'>
          <Button
            appearance={activeTab === 'about' ? 'ghost' : 'link'}
            className={CN('mb-[-1px] rounded-b-[0px] px-0', {
              ' text-N-500': activeTab !== 'about',
              'border-b-B-500': activeTab === 'about',
            })}
            onClick={() => setActiveTab('about')}>
            About
          </Button>
          <Button
            appearance={activeTab === 'related listings' ? 'ghost' : 'link'}
            className={CN('mb-[-1px] rounded-b-[0px] px-0 ', {
              ' text-N-500': activeTab !== 'related listings',
              'border-b-B-500': activeTab === 'related listings',
            })}
            onClick={() => setActiveTab('related listings')}>
            Related listings
          </Button>
          <Button
            appearance={activeTab === 'nearby listings' ? 'ghost' : 'link'}
            className={CN('mb-[-1px] rounded-b-[0px] px-0', {
              ' text-N-500': activeTab !== 'nearby listings',
              'border-b-B-500': activeTab === 'nearby listings',
            })}
            onClick={() => setActiveTab('nearby listings')}>
            Nearby listings
          </Button>
        </div>

        <div className='flex flex-col'>
          {activeTab === 'about' && <SupplierDetailsAbout />}
          {activeTab === 'related listings' && <SupplierDetailsAbout />}
          {activeTab === 'nearby listings' && <SupplierDetailsAbout />}
          
          </div>
      </div>
    </div>
  )
}

SupplierDetailsTabs.defaultProps = {}

export default SupplierDetailsTabs
