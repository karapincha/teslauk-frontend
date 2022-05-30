import React, { FC } from 'react'
import CN from 'classnames'
import { CheckBox } from '@/components/atoms'

export interface PayWithDirectProps {
  [x: string]: any
}

export const PayWithDirect: FC<PayWithDirectProps> = ({
  className,
  ...restProps
}: PayWithDirectProps) => {
  const PayWithDirectClasses = CN(`pay-with-direct flex flex-col gap-[24px]`, className)

  return (
    <div className={PayWithDirectClasses} {...restProps}>
      <p className='text-base font-400 text-N-800'>Pay securely via your bank account.</p>

      <CheckBox children='Save to account' labelClassName='!text-N-600' />
    </div>
  )
}

PayWithDirect.defaultProps = {}

export default PayWithDirect
