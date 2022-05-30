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
  const CheckoutProductCardClasses = CN(`checkout-product-card flex gap-[16px]`, className)

  return (
    <div className={CheckoutProductCardClasses} {...restProps}>
      <img src={image} className='h-[50px] w-[50px] rounded-[4px] border border-N-300' />

      <div className='flex gap-[16px]'>
        <div className='w-[180px]'>
          <p className='text-md font-400 text-N-800'>{heading}</p>
          <p className='text-sm font-400 text-N-600'>Sold By: {shopName}</p>
        </div>

        <div className='w-[56px]'>
          <p className='text-base font-600 text-N-800'>{price}</p>
          <p className='text-sm font-400 text-N-600'>{priceDetails}</p>
        </div>
      </div>
    </div>
  )
}

CheckoutProductCard.defaultProps = {}

export default CheckoutProductCard
