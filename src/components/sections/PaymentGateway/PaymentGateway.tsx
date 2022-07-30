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
  ...restProps
}: PaymentGatewayProps) => {
  const PaymentGatewayClasses = CN(`payment-gateway`, className)

  const [activeTab, setActiveTab] = useState('stripe')

  return (
    <div className={PaymentGatewayClasses} {...restProps}>
      <div className='flex flex-col gap-[24px] lg:flex-row lg:gap-[16px]'>
        <div
          className={CN(
            'w-full cursor-pointer rounded-[6px] bg-white  py-[16px] pl-[16px] lg:w-[264px]',
            {
              'border-[2px] border-B-500': activeTab === 'stripe',
              'border-[2px] border-N-100': activeTab !== 'stripe',
            }
          )}
          onClick={() => {
            setActiveTab('stripe')
            onChange && onChange('stripe')
          }}>
          <p className='pb-[8px] text-md font-600 text-N-800'>Credit / Debit Card </p>
          <img src='/stripe.svg' className='w-[119px]' />
        </div>

        <div
          className={CN(
            'w-full cursor-pointer rounded-[6px] bg-white  py-[16px] pl-[16px] lg:w-[264px]',
            {
              'border-[2px] border-B-500': activeTab === 'gocardless',
              'border-[2px] border-N-100': activeTab !== 'gocardless',
            }
          )}
          onClick={() => {
            setActiveTab('gocardless')
            onChange && onChange('gocardless')
          }}>
          <p className='pb-[8px] text-md font-600 text-N-800'>GoCardLess</p>
          <img src='/direct-debit.svg' />
        </div>
      </div>
    </div>
  )
}

PaymentGateway.defaultProps = {}

export default PaymentGateway
