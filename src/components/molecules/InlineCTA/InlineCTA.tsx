import React, { FC } from 'react'
import CN from 'classnames'
import { Button, ButtonProps } from '@/components/atoms/Button'
import { ArrowRight } from 'react-feather'

export interface InlineCTAProps {
  [x: string]: any
  heading: string
  btnProps?: ButtonProps
}

export const InlineCTA: FC<InlineCTAProps> = ({
  className,
  heading,
  btnProps,
  ...restProps
}: InlineCTAProps) => {
  const InlineCTAClasses = CN(
    `inline-cta w-full h-[104px] bg-[url('/images/004.svg')] bg-no-repeat bg-cover rounded-[12px] flex items-center align-center px-[52px] overflow-hidden bg-N-100 justify-between`,
    className
  )

  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={InlineCTAClasses} {...restProps}>
      <p className='inline-cta__heading pr-[12px] font-600 text-base'>{heading}</p>
      <Button iconAfter={<ArrowRight size={20} />} {...restBtnProps}>
        {children}
      </Button>
    </div>
  )
}

InlineCTA.defaultProps = {}

export default InlineCTA
