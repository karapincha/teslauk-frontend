import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'

export interface ApprovalPopupProps {
  [x: string]: any
  description?: string
  btnProps?: any
}

export const ApprovalPopup: FC<ApprovalPopupProps> = ({
  className,
  btnProps,
  description,
  ...restProps
}: ApprovalPopupProps) => {
  const ApprovalPopupClasses = CN(
    `approval-popup w-[448px] bg-white rounded-[8px] px-[40px] flex flex-col items-center py-[105px] gap-[48px]`,
    className
  )

  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={ApprovalPopupClasses} {...restProps}>
      <div className='flex flex-col items-center gap-[32px]'>
        <img src='/check-circle.svg' className='h-[100px] w-[100px]' />
        <h4 className='text-center text-h4 font-600 text-N-800'>{description}</h4>
      </div>

      {btnProps && (
        <div className='w-full'>
          <Button className='!w-full' {...restBtnProps}>
            {children || 'Sign in'}
          </Button>
        </div>
      )}
    </div>
  )
}

ApprovalPopup.defaultProps = {}

export default ApprovalPopup
