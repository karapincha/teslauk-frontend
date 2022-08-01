import React, { FC, useEffect } from 'react'
import CN from 'classnames'
import { Spinner } from '@/components/atoms'

export interface PageLockOverlayProps {
  [x: string]: any
}

const addBodyClass = (className: any) => document.body.classList.add(className)
const removeBodyClass = (className: any) => document.body.classList.remove(className)

export const PageLockOverlay: FC<PageLockOverlayProps> = ({
  className,
  description,
  heading,
  ...restProps
}: PageLockOverlayProps) => {
  const PageLockOverlayClasses = CN(`page-lock-overlay`, className)

  useEffect(() => {
    className instanceof Array ? className.map(addBodyClass) : addBodyClass('lock')
    return () => {
      className instanceof Array ? className.map(removeBodyClass) : removeBodyClass('lock')
    }
  }, [className])

  return (
    <div className={PageLockOverlayClasses} {...restProps}>
      <div className='container mb-[32px]'>
        <div className='alert flex w-full items-center justify-center gap-[20px] rounded-[8px] bg-Y-50 px-[32px] py-[16px] text-md text-R-800'>
          <Spinner size={24} />
          <span>
            <span className='font-500'>{heading}</span> — {description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageLockOverlay
