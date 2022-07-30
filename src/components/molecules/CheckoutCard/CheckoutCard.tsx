import React, { FC, useEffect } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { CheckoutProductCard } from '../CheckoutProductCard'

import { useAppContext } from '@/context'

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
    `checkout-card shadow-card rounded-[8px] bg-white px-[32px] py-[32px] w-full shadow-card-shadow`,
    className
  )

  const { sidemenu, header, footer, suppliers, user, fullUser, isLoading, cart }: any =
    useAppContext()

  return (
    <div className={CheckoutCardClasses} {...restProps}>
      <div className='flex flex-col gap-[32px] pb-[32px]'>
        {cart?.contents?.nodes?.map((product: any, index: number) => {
          return <CheckoutProductCard key={index} product={product} />
        })}
      </div>

      <div className='flex flex-col gap-[8px] border-b border-t border-N-100 pt-[24px] pb-[8px]'>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Subtotal</p>
          <p className='text-md font-500 text-N-700'>{cart?.subtotal}</p>
        </div>
        {/* Shipping cost */}
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Shipping</p>
          <p className='text-md font-500 text-N-700'>{cart?.shippingTotal || '—'}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>GST (Included)</p>
          <p className='text-md font-500 text-N-700'>{cart?.totalTax || '—'}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Discount</p>
          <p className='text-md font-500 text-N-700'>{cart?.discountTotal || '—'}</p>
        </div>
      </div>
      <div className='flex justify-between pt-[16px]'>
        <p className='text-base font-500 text-N-800'>Total price</p>
        <p className='text-base font-500 text-N-800'>{cart?.total}</p>
      </div>
    </div>
  )
}

CheckoutCard.defaultProps = {}

export default CheckoutCard
