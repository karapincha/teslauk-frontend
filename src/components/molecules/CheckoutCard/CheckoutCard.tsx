import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { CheckoutProductCard } from '../CheckoutProductCard'

export interface CheckoutCardProps {
  [x: string]: any
  subTotal?: string
  shippingCost?: string
  total?: string
  discount?: string
  isDiscount?: boolean
  gst?: string
}

export const CheckoutCard: FC<CheckoutCardProps> = ({
  className,
  subTotal,
  shippingCost,
  total,
  discount,
  isDiscount,
  gst,
  ...restProps
}: CheckoutCardProps) => {
  const CheckoutCardClasses = CN(
    `checkout-card shadow-card lg:w-[368px] rounded-[8px] border border-N-200 bg-white px-[24px] py-[24px] w-full`,
    className
  )

  return (
    <div className={CheckoutCardClasses} {...restProps}>
      <div className='flex flex-col'>
        <p className='pb-[24px] text-base font-500 text-N-800'>Your order</p>
        <div className='flex flex-col gap-[32px]'>
          <CheckoutProductCard
            image='/shop-item.png'
            heading='CHAdeMO adapter rental - Available for paid supporters only (Model S/X only)'
            shopName='England - Milton Keynes'
            price='£35.00'
            priceDetails='1X £35.00 / year'
          />
          <CheckoutProductCard
            image='/shop-item.png'
            heading='CHAdeMO adapter rental - Available for paid supporters only (Model S/X only)'
            shopName='England - Milton Keynes'
            price='£35.00'
            priceDetails='1X £35.00 / year'
          />
        </div>
        <div className='py-[24px]'>
          <Button appearance='ghost' className='px-0 !font-600 !text-B-500'>
            See more
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-[8px] border-b border-t border-N-200 pt-[24px] pb-[8px]'>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Subtotal</p>
          <p className='text-md font-500 text-N-700'>{subTotal}</p>
        </div>
        {/* Shipping cost */}
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Shipping</p>
          <p className='text-md font-500 text-N-700'>{shippingCost}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>GST (Included)</p>
          <p className='text-md font-500 text-N-700'>{gst}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Discount</p>
          <p className='text-md font-500 text-N-700'>{discount}</p>
        </div>
      </div>
      <div className='flex justify-between pt-[16px]'>
        <p className='text-base font-500 text-N-800'>Total price</p>
        <p className='text-base font-500 text-N-800'>{total}</p>
      </div>
    </div>
  )
}

CheckoutCard.defaultProps = {}

export default CheckoutCard
