import React, { FC, useState } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Button } from '@/components/atoms'
import { PurchasesOrders } from '../PurchasesOrders'
import { ShopDescription } from '../ShopDescription'
import { ShopReviews } from '../ShopReviews'

export interface ShopDetailsProps {
  [x: string]: any
}

export const ShopDetails: FC<ShopDetailsProps> = ({
  className,
  ...restProps
}: ShopDetailsProps) => {
  const ShopDetailsClasses = CN(`shop-details flex flex-col`, className)
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className={ShopDetailsClasses} {...restProps}>
      <div className='flex w-full gap-[24px] border-b-[1px]'>
        <Button
          view={activeTab === 'description' ? 'outline' : 'solid'}
          appearance='ghost'
          onClick={() => setActiveTab('description')}>
          Description
        </Button>

        <Button
          view={activeTab === 'description' ? 'outline' : 'solid'}
          appearance='ghost'
          onClick={() => setActiveTab('reviews')}>
          Reviews
        </Button>
      </div>

      <div className='flex flex-col'>
        {activeTab === 'description' && <ShopDescription />}
        {activeTab === 'reviews' && <ShopReviews />}
      </div>
    </div>
  )
}

ShopDetails.defaultProps = {}

export default ShopDetails
