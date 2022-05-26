import React, { FC } from 'react'
import CN from 'classnames'
import { Trash } from 'react-feather'

export interface ShoppingCardProps {
  [x: string]: any
  image?: string
  heading?: string
  shopName?: string
  price?: string
  priceDetails?: string
}

export const ShoppingCard: FC<ShoppingCardProps> = ({
  className,
  image,
  heading,
  shopName,
  price,
  priceDetails,
  ...restProps
}: ShoppingCardProps) => {
  const ShoppingCardClasses = CN(`shopping-card flex items-center`, className)

  return (
    <div className={ShoppingCardClasses} {...restProps}>
      <img src={image} className='h-[74px] w-[74px] rounded-[6px] border border-N-300' />
      <div className='flex max-w-[246px] flex-col gap-[8px] pl-[32px]'>
        <p className='text-md font-400 text-N-800'>{heading}</p>
        <p className='text-sm font-400 text-N-600'>Sold By: {shopName}</p>
      </div>

      <div className='pl-[36px]'>
        <p className='text-base font-600 text-N-800'>{price}</p>
        <p className='text-sm font-400 text-N-600'>{priceDetails}</p>
      </div>

      <div className='flex items-center gap-[16px] pl-[40px]'>
        <img src='/minus.svg' className='h-[24px] w-[24px]' />
        <img src='/input.svg' className='h-[58px] w-[58px]' />
        <img src='/plus.svg' className='h-[24px] w-[24px]' />
      </div>

      <div className='pl-[52px] text-B-400'>
        <Trash size={16} />
      </div>
    </div>
  )
}

ShoppingCard.defaultProps = {}

export default ShoppingCard
