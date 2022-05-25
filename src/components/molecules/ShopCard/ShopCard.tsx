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
        <div className='md:flex'>
          <img
            src={image}
            className='h-full w-full rounded-[12px] border border-N-300 md:h-[224px] md:w-[224px] lg:h-[264px] lg:w-[264px]'
          />
        </div>
      )}

      <div className='flex w-full flex-col items-center md:w-[224px] lg:w-[264px]'>
        {heading && (
          <p className='w-full text-center text-md font-500 text-N-800 md:text-base lg:w-[240px]'>
            {heading}
          </p>
        )}
        {price && <p className='text-md font-600 text-B-500 md:text-base'>From: {price} </p>}
        {shopName && <p className='text-sm font-400 text-N-600 md:text-md'>{shopName}</p>}
      </div>
    </div>
  )
}

ShopCard.defaultProps = {}

export default ShopCard
