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
    `inline-cta w-full h-[152px] md:h-[104px] lg:h-[104px] bg-[url('/images/004.svg')] bg-no-repeat bg-cover rounded-[12px] flex flex-col md:flex-row lg:flex-row items-center align-center md:px-[48px] lg:px-[52px] overflow-hidden bg-N-100 justify-between px-[16px] py-[16px] gap-[16px]`,
    className
  )

  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={InlineCTAClasses} {...restProps}>
      <p className='inline-cta__heading lg:pr-[12px] font-600 text-base text-center lg:text-left'>{heading}</p>
      <Button iconAfter={<ArrowRight size={20} />} {...restBtnProps}>
        {children}
      </Button>
    </div>
  )
}

InlineCTA.defaultProps = {}

export default InlineCTA
