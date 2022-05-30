import React, { FC } from 'react'
import CN from 'classnames'
import { CheckBox, TextField } from '@/components/atoms'

export interface PayWithStripeProps {
  [x: string]: any
}

export const PayWithStripe: FC<PayWithStripeProps> = ({
  className,
  ...restProps
}: PayWithStripeProps) => {
  const PayWithStripeClasses = CN(`pay-with-stripe flex flex-col gap-[24px]`, className)

  return (
    <div className={PayWithStripeClasses} {...restProps}>
      <p className='text-base font-400 text-N-800'>Pay with your Credit/Debit card via Stripe.</p>

      <div className='flex flex-col gap-[24px]'>
        <TextField label='Card number' placeHolder='1234 1234 1234 1234' />
        <div className='flex gap-[16px]'>
          <TextField label='Expiry' placeHolder='MM / YY' />
          <TextField label='CVC' placeHolder='XXX' />
        </div>
        <CheckBox
          children='Save payment information to my account for future purchases.'
          labelClassName='!text-N-600'
        />
      </div>
    </div>
  )
}

PayWithStripe.defaultProps = {}

export default PayWithStripe
