import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { ShoppingCart } from 'react-feather'

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
    `expanded-product-details flex justify-between gap-[48px]`,
    className
  )

  return (
    <div className={ExpandedProductDetailsClasses} {...restProps}>
      {/* Product image carousel */}
      <div className='flex flex-col gap-[16px]'>
        <div className='h-[576px] w-[576px]'>
          <img src={image} className='h-[576px] w-[576px] rounded-[6px] border  border-N-300' />
        </div>
        <div>*add carousel</div>
      </div>

      {/* Product description */}
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-[16px]'>
          <h4 className='text-h4 font-600 text-N-800'>{productName}</h4>
          <h5 className='text-h5 font-500 text-B-500'>{price}</h5>

          <div>
            <p className='text-md font-400 text-N-600'>
              Sold by: <span className='text-md font-600 text-N-600'>{shopName}</span>
            </p>
            <p className='text-md font-400 text-N-600'>
              Categories: <span className='text-md font-600 text-N-600'>{category}</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[24px]'>
          <p className='text-md font-500 text-G-500'>{stockAmount} in stock</p>

          <div className='flex gap-[12px]'>
            <div className='flex items-center gap-[16px]'>
              <img src='/minus.svg' className='h-[20px] w-[20px]' />
              <img src='/input.svg' className='h-[48px] w-[58px]' />
              <img src='/plus.svg' className='h-[20px] w-[20px]' />
            </div>

            <Button iconAfter={<ShoppingCart size={20} />}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

ExpandedProductDetails.defaultProps = {}

export default ExpandedProductDetails
