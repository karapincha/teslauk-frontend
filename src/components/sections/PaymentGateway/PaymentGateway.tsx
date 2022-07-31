import React, { FC, useState } from 'react'
import CN from 'classnames'
import { PayWithStripe } from '../PayWithStripe'
import { PayWithDirect } from '../PayWithDirect'

export interface PaymentGatewayProps {
  [x: string]: any
}

export const PaymentGateway: FC<PaymentGatewayProps> = ({
  className,
  onChange,
  defaultPaymentMethod,
  ...restProps
}: PaymentGatewayProps) => {
  const PaymentGatewayClasses = CN(`payment-gateway`, className)

  const [activeTab, setActiveTab] = useState(defaultPaymentMethod)

  return (
    <div className={PaymentGatewayClasses} {...restProps}>
      <div className='flex flex-col gap-[24px] lg:flex-row lg:gap-[16px]'>
        <div
          className={CN(
            'relative w-full cursor-pointer rounded-[8px] bg-white py-[16px]  pl-[16px] shadow-card-shadow lg:w-[264px]',
            {
              'border-[2px] border-N-700': activeTab === 'stripe',
              'border-[2px] border-transparent': activeTab !== 'stripe',
            }
          )}
          onClick={() => {
            setActiveTab('stripe')
            onChange && onChange('stripe')
          }}>
          <p className='pb-[8px] text-md font-600 text-N-800'>Credit / Debit Card </p>
          <img src='/stripe.svg' className='w-[119px]' />

          {activeTab === 'stripe' && (
            <i className='ri-checkbox-circle-fill absolute top-[4px] right-[12px] text-[20px] text-B-500' />
          )}
        </div>

        <div
          className={CN(
            'relative w-full cursor-pointer rounded-[8px] bg-white py-[16px] pl-[16px] shadow-card-shadow lg:w-[264px]',
            {
              'border-[2px] border-N-700': activeTab === 'gocardless',
              'border-[2px] border-transparent': activeTab !== 'gocardless',
            }
          )}
          onClick={() => {
            setActiveTab('gocardless')
            onChange && onChange('gocardless')
          }}>
          <p className='pb-[8px] text-md font-600 text-N-800'>GoCardLess</p>
          <img src='/direct-debit.svg' />

          {activeTab === 'gocardless' && (
            <i className='ri-checkbox-circle-fill absolute top-[4px] right-[12px] text-[20px] text-B-500' />
          )}
        </div>
      </div>
    </div>
  )
}

PaymentGateway.defaultProps = {}

export default PaymentGateway
