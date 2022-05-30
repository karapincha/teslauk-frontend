import React, { FC } from 'react'
import CN from 'classnames'
import { Button, FieldGroup, Radio } from '@/components/atoms'
import { ArrowRight, Check, ShoppingBag } from 'react-feather'
import { PriceCard } from '../PriceCard'
import { ShoppingCard } from '../ShoppingCard'

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
    `checkout-card price-card shadow-card lg:w-[368px] rounded-[12px] border border-N-200 bg-white px-[24px] py-[24px] w-full`,
    className
  )

  return (
    <div className={CheckoutCardClasses} {...restProps}>
      <div>
        
      </div>


      <div className='flex flex-col gap-[8px] border-b border-N-200 pb-[8px]'>
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
