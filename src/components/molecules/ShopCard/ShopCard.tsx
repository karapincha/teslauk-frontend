import React, { FC } from 'react'
import CN from 'classnames'
import { Badge, Tag } from '@/components/atoms'

export interface ShopCardProps {
  [x: string]: any
  image?: string
  heading?: string
  price?: string | number
  shopName?: string
}

export const ShopCard: FC<ShopCardProps> = ({
  className,
  image,
  heading,
  price,
  shopName,
  stockQuantity,
  ...restProps
}: ShopCardProps) => {
  const ShopCardClasses = CN(`shop-card flex flex-col gap-[4px] group`, className)

  return (
    <div className={ShopCardClasses} {...restProps}>
      {image && (
        <div className='relative flex h-[240px] w-full shadow-card-shadow'>
          <img src={image} className='h-full w-full rounded-[8px] object-cover object-center' />
        </div>
      )}

      <div className='flex w-full flex-col'>
        {stockQuantity ? (
          <p className='flex items-center gap-[8px] text-sm font-500 text-G-500'>
            <i className='ri-check-double-line text-lg' />
            <span>({stockQuantity}) In stock</span>
          </p>
        ) : (
          <p className='flex items-center gap-[8px] text-sm font-500 text-B-500'>
            <i className='ri-error-warning-line text-lg' />
            <span>Out-of stock</span>
          </p>
        )}

        {heading && <p className='w-full text-base text-N-800 mb-[4px] leading-[26px] group-hover:text-B-500'>{heading}</p>}

        {price && <p className='text-lg font-600 text-N-800'>{price} </p>}
      </div>
    </div>
  )
}

ShopCard.defaultProps = {}

export default ShopCard
