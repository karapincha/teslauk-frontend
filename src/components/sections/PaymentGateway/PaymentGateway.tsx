import React, { FC, useState } from 'react'
import CN from 'classnames'
import { PayWithStripe } from '../PayWithStripe'
import { PayWithDirect } from '../PayWithDirect'

export interface PaymentGatewayProps {
  [x: string]: any
}

export const PaymentGateway: FC<PaymentGatewayProps> = ({
  className,
  ...restProps
}: PaymentGatewayProps) => {
  const PaymentGatewayClasses = CN(`payment-gateway`, className)

  const [activeTab, setActiveTab] = useState('stripe')

  return (
    <div className={PaymentGatewayClasses} {...restProps}>
      <div className='flex gap-[48px]'>
        {/* Stripe */}
        <a className='cursor-pointer' onClick={() => setActiveTab('stripe')}>
          <div
            className={CN('w-[264px] rounded-[6px]  bg-white py-[16px] pl-[16px]', {
              'border-[2px] border-B-500': activeTab === 'stripe',
              'border border-N-300': activeTab !== 'stripe',
            })}>
            <p className='pb-[8px] text-md font-600 text-N-800'>Credit / Debit Card </p>
            <img src='/stripe.svg' className='w-[119px]' />
          </div>
        </a>

        {/* Direct debit */}
        <a className='cursor-pointer' onClick={() => setActiveTab('direct')}>
          <div
            className={CN('w-[264px] rounded-[6px]  bg-white py-[16px] pl-[16px]', {
              'border-[2px] border-B-500': activeTab === 'direct',
              'border border-N-300': activeTab !== 'direct',
            })}>
            <p className='pb-[8px] text-md font-600 text-N-800'>Credit / Debit Card </p>
            <img src='/direct-debit.svg' />
          </div>
        </a>
      </div>

      <div className='pt-[24px]'>
        {activeTab === 'stripe' && <PayWithStripe />}
        {activeTab === 'direct' && <PayWithDirect />}
      </div>
    </div>
  )
}

PaymentGateway.defaultProps = {}

export default PaymentGateway
