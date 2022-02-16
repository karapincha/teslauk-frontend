import React, { FC, ReactNode } from 'react'
import CN from 'classnames'

export interface PageLockProps {
  [x: string]: any
  heading?: string
  description?: string
  cta?: ReactNode | string | number | undefined
}

export const PageLock: FC<PageLockProps> = ({
  className,
  heading,
  description,
  cta,
  ...restProps
}: PageLockProps) => {
  const PageLockClasses = CN(
    `page-lock bg-gradient-to-t[rgba(248, 251, 253, 0) 0%, #F8FBFD 40.39%, #F8FBFD 100%)] mb-[56px]`,
    className
  )

  return (
    <div className={PageLockClasses} {...restProps}>
      <div className='container flex justify-between'>
        <div className='flex flex-col gap-[12px]'>
          <h2>{heading}</h2>
          <p className='mb-0 text-base font-500 text-N-600'>{description}</p>
        </div>

        <div className='flex items-end justify-end w-full'>{cta}</div>
      </div>
    </div>
  )
}

PageLock.defaultProps = {}

export default PageLock
