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
    `inline-cta w-full bg-[url('/images/004.svg')] bg-no-repeat bg-cover rounded-[8px] flex flex-col md:flex-row lg:flex-row items-center align-center md:px-[48px] lg:px-[52px] overflow-hidden bg-N-100 justify-between px-[16px] py-[16px] md:py-[28px] gap-[16px]`,
    className
  )

  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={InlineCTAClasses} {...restProps}>
      <p className='inline-cta__heading text-center text-base font-600 lg:pr-[12px] lg:text-left'>
        {heading}
      </p>
      <Button className='flex-shrink-0' iconAfter={<ArrowRight size={20} />} {...restBtnProps}>
        {children}
      </Button>
    </div>
  )
}

InlineCTA.defaultProps = {}

export default InlineCTA
