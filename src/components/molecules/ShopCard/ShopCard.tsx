import React, { FC } from 'react'
import CN from 'classnames'

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
  ...restProps
}: ShopCardProps) => {
  const ShopCardClasses = CN(`shop-card flex flex-col gap-[16px]`, className)

  return (
    <div className={ShopCardClasses} {...restProps}>
      {image && (
        <div className='flex'>
          <img src={image} className='h-[264px] w-[264px] rounded-[12px] border border-N-300' />
        </div>
      )}

      <div className='flex w-[264px] flex-col items-center'>
        {heading && (
          <p className='w-[240px] text-center text-base font-500 text-N-800'>{heading}</p>
        )}
        {price && <p className='text-base font-600 text-B-500'>From: {price} </p>}
        {shopName && <p className='text-md font-400 text-N-600'>{shopName}</p>}
      </div>
    </div>
  )
}

ShopCard.defaultProps = {}

export default ShopCard
