import React, { FC } from 'react'
import CN from 'classnames'
import { useViewport } from '@/utils'
import { Pill } from '@/components/atoms'

export interface ProductCardProps {
  [x: string]: any
  tagName?: string
  heading?: string
  subHeading?: string
  description?: string
  price?: string
  image?: string
}

export const ProductCard: FC<ProductCardProps> = ({
  className,
  tagName,
  heading,
  subHeading,
  description,
  price,
  image,
  ...restProps
}: ProductCardProps) => {
  const ProductCardClasses = CN(
    `product-card flex flex-col md:flex-row md:h-[256px] lg:h-[264px] bg-white rounded-b-[12px] rounded-[8px] shadow-[0px_4px_4px_#D8E1EC33]`,
    className
  )
  const { isMobile, isTablet, isDesktop } = useViewport()
  return (
    <div className={ProductCardClasses} {...restProps}>
      {/* Product card image */}
      <img
        src={image}
        className='h-[260px] w-full rounded-[8px] object-cover object-center md:h-full md:w-[334px] md:rounded-l-[12px] md:rounded-r-none lg:w-[264px]'
      />

      <div className='flex w-full flex-col justify-center rounded-b-[12px] px-[16px] pt-[16px] pb-[24px] md:py-[8px] lg:px-[32px] lg:py-[30px]'>
        {/* Card tag */}
        {tagName && (
          <div className='flex items-center gap-[12px]'>
            <i className='ri-shopping-bag-3-line inline-flex text-[18px] text-N-400' />
            <p className='text-sm font-500 uppercase text-N-500'>{tagName}</p>
          </div>
        )}

        {heading && <h4 className='text-h4 font-600 text-N-800'>{heading}</h4>}
        {subHeading && <h5 className='text-h5 font-500 text-N-800'>{subHeading}</h5>}
        {description && (
          <p className='pt-[12px] text-md font-500 text-N-600 line-clamp-2'>{description}</p>
        )}

        <div className='w-[86px] pt-[12px]'>
          <Pill
            className='w-[86px] !bg-G-10 !text-base !font-600 !text-G-600'
            children={price}
            size='sm'
          />
        </div>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {}

export default ProductCard
