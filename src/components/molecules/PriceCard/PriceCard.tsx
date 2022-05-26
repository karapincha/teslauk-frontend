import React, { FC } from 'react'
import CN from 'classnames'
import { Button, FieldGroup, Radio } from '@/components/atoms'
import { ArrowRight, ShoppingBag } from 'react-feather'

export interface PriceCardProps {
  [x: string]: any
}

export const PriceCard: FC<PriceCardProps> = ({ className, ...restProps }: PriceCardProps) => {
  const PriceCardClasses = CN(
    `price-card shadow-card w-[368px] rounded-[12px] border border-N-200 bg-white px-[24px] py-[24px]`,
    className
  )

  return (
    <div className={PriceCardClasses} {...restProps}>
      <div className='flex flex-col gap-[8px] border-b border-N-200 pb-[8px]'>
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Subtotal</p>
          <p className='text-md font-500 text-N-700'>£35.00</p>
        </div>
        {/* Shipping cost */}
        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Shipping</p>
          <p className='text-md font-500 text-N-700'>£10.00</p>
        </div>
        <div className='flex flex-col gap-[8px]'>
          {/* have to Change radio bg and select color to N-800 */}
          <Radio children='Standard Delivery' />
          <Radio children='Free shipping' />
          <Radio children='CHAdeMO / Cable Sets only ' />
        </div>

        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>Discount</p>
          <p className='text-md font-500 text-N-700'>£0.00</p>
        </div>

        <div className='flex justify-between'>
          <p className='text-md font-500 text-N-600'>GST (Included)</p>
          <p className='text-md font-500 text-N-700'>£60.50</p>
        </div>
      </div>

      <div className='pt-[16px]'>
        <div className='flex justify-between pb-[24px]'>
          <p className='text-base font-500 text-N-800'>Total price</p>
          <p className='text-base font-500 text-N-800'>£12,231.76</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-md font-500 text-N-600'>Apply discount code</p>
          <div className='flex w-full flex-col gap-[24px] pt-[8px]'>
            <FieldGroup
              label='Enter discount code'
              btnProps={{
                children: 'Apply',
                onClick: (e: any) => {
                  console.log('Clicked', e)
                },
                appearance: 'secondary',
                size: 'sm',
              }}
              inputProps={{
                onChange: (e: any) => {
                  console.log(e.target.value)
                },
              }}
            />
            <Button iconAfter={<ArrowRight size={20} />} className='w-full'>
              Proceed to checkout
            </Button>
            <Button appearance='secondary' iconAfter={<ShoppingBag size={20} />} className='w-full'>
              Continue shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

PriceCard.defaultProps = {}

export default PriceCard
