import React, { FC } from 'react'
import CN from 'classnames'

export interface CheckoutProductCardProps {
  [x: string]: any
  image?: string
  heading?: string
  shopName?: string
  price?: string
  priceDetails?: string
}

export const CheckoutProductCard: FC<CheckoutProductCardProps> = ({
  className,
  image,
  heading,
  shopName,
  price,
  priceDetails,
  ...restProps
}: CheckoutProductCardProps) => {
  const CheckoutProductCardClasses = CN(
    `checkout-product-card flex gap-[16px] items-center md:items-start lg:items-center`,
    className
  )

  return (
    <div className={CheckoutProductCardClasses} {...restProps}>
      <img src={image} className='h-[50px] w-[50px] rounded-[4px] border border-N-300' />

      <div className='flex w-full justify-between gap-[16px]'>
        <div className='flex flex-col md:gap-[8px] lg:w-[180px] lg:gap-0'>
          <p className='text-md font-400 text-N-800'>{heading}</p>
          <p className='text-sm font-400 text-N-600'>Sold By: {shopName}</p>
        </div>

        <div className='ml-auto w-[56px]'>
          <p className='text-base font-600 text-N-800'>{price}</p>
          <p className='text-sm font-400 text-N-600'>{priceDetails}</p>
        </div>
      </div>
    </div>
  )
}

CheckoutProductCard.defaultProps = {}

export default CheckoutProductCard
