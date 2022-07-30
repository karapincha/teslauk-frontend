import React, { FC, useState } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Button } from '@/components/atoms'
import { PurchasesOrders } from '../PurchasesOrders'
import { ShopDescription } from '../ShopDescription'
import { ShopReviews } from '../ShopReviews'
import { ShopVideos } from '../ShopVideos'

export interface ShopDetailsProps {
  [x: string]: any
}

export const ShopDetails: FC<ShopDetailsProps> = ({
  className,
  product,
  ...restProps
}: ShopDetailsProps) => {
  const ShopDetailsClasses = CN(`shop-details flex flex-col`, className)
  const [activeTab, setActiveTab] = useState('features')

  return (
    <div className={ShopDetailsClasses} {...restProps}>
      <div className='flex w-full gap-[12px] border-b border-dashed border-N-100 pb-[12px]'>
        <Button
          appearance={activeTab === 'features' ? 'neutral' : 'default'}
          onClick={() => setActiveTab('features')}>
          Features
        </Button>

        <Button
          appearance={activeTab === 'reviews' ? 'neutral' : 'default'}
          onClick={() => setActiveTab('reviews')}>
          Reviews
        </Button>

        <Button
          appearance={activeTab === 'videos' ? 'neutral' : 'default'}
          onClick={() => setActiveTab('videos')}>
          Videos
        </Button>
      </div>

      <div className='flex flex-col pt-[20px]'>
        {activeTab === 'features' && <ShopDescription product={product} />}
        {activeTab === 'reviews' && <ShopReviews product={product} />}
        {activeTab === 'videos' && <ShopVideos product={product} />}
      </div>
    </div>
  )
}

ShopDetails.defaultProps = {}

export default ShopDetails
