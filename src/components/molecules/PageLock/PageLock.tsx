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
    `page-lock h-[50vh] flex pb-[56px] items-end bg-gradient-to-t from-[#F8FBFD] to-[rgba(248,251,253,0)] fixed bottom-0 via-[#F8FBFD] left-0 right-0`,
    className
  )

  return (
    <div className={PageLockClasses} {...restProps}>
      <div className='container flex justify-between'>
        <div className='flex flex-col gap-[12px]'>
          <h2>{heading}</h2>
          <p className='mb-0 text-base font-500 text-N-600'>{description}</p>
        </div>

        <div className='flex w-full items-end justify-end'>{cta}</div>
      </div>
    </div>
  )
}

PageLock.defaultProps = {}

export default PageLock
