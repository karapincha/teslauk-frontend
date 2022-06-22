import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { ShoppingCart } from 'react-feather'
import { useViewport } from '@/utils'

export interface ExpandedProductDetailsProps {
  [x: string]: any
  productName?: string
  price?: string | number
  shopName?: string
  category?: string
  stockAmount?: string | number
  image?: string
}

export const ExpandedProductDetails: FC<ExpandedProductDetailsProps> = ({
  className,
  productName,
  price,
  shopName,
  category,
  stockAmount,
  image,
  ...restProps
}: ExpandedProductDetailsProps) => {
  const ExpandedProductDetailsClasses = CN(
    `expanded-product-details flex flex-col lg:flex-row justify-between gap-[24px] md:gap-[48px]`,
    className
  )
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={ExpandedProductDetailsClasses} {...restProps}>
      {/* Product image carousel */}
      <div className='flex flex-col gap-[16px]'>
        <div className='h-full w-full md:h-[340px] md:w-[340px]  lg:h-[576px] lg:w-[576px]'>
          {isMobile && <h4 className='pb-[24px] text-h4 font-600 text-N-800'>{productName}</h4>}
          <img
            src={image}
            className='h-full w-full rounded-[6px] border border-N-300 md:h-[340px] md:w-[340px] lg:h-[576px] lg:w-[576px]'
          />
        </div>
        <div>*add carousel</div>
      </div>

      {/* Product description */}
      <div className='flex flex-col'>
        <div className='flex flex-col gap-[40px]'>
          <div className='flex flex-col gap-[16px]'>
            {!isMobile && <h4 className='text-h4 font-600 text-N-800'>{productName}</h4>}
            {!isMobile && <h5 className='text-h5 font-500 text-B-500'>{price}</h5>}

            <div>
              {isMobile && (
                <p className='pb-[8px] text-md font-500 text-G-500'>{stockAmount} in stock</p>
              )}
              <p className='text-md font-400 text-N-600'>
                Sold by: <span className='text-md font-600 text-N-600'>{shopName}</span>
              </p>
              <p className='text-md font-400 text-N-600'>
                Categories: <span className='text-md font-600 text-N-600'>{category}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[8px] md:gap-[24px]'>
          {!isMobile && <p className='text-md font-500 text-G-500'>{stockAmount} in stock</p>}

          <div className='flex flex-col gap-[24px] pt-[16px] md:flex-row md:gap-[12px] md:pt-0'>
            <div className='flex items-center gap-[16px]'>
              {isMobile && <h5 className='text-h5 font-500 text-B-500'>{price}</h5>}
              <img src='/minus.svg' className='h-[20px] w-[20px]' />
              <img src='/input.svg' className='h-[48px] w-[58px]' />
              <img src='/plus.svg' className='h-[20px] w-[20px]' />
            </div>

            <Button className='w-full md:w-[unset]' iconAfter={<ShoppingCart size={20} />}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

ExpandedProductDetails.defaultProps = {}

export default ExpandedProductDetails
