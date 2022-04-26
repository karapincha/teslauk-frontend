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
    `page-lock h-[40vh] md:h-[50vh] flex flex-col md:flex-row pb-[56px] items-end bg-gradient-to-t from-[#F8FBFD] to-[rgba(248,251,253,0)] fixed bottom-0 via-[#F8FBFD] left-0 right-0`,
    className
  )

  return (
    <div className={PageLockClasses} {...restProps}>
      <div className='container flex gap-[24px] lg:gap-0 flex-col lg:flex-row justify-between'>
        <div className='flex flex-col gap-[12px]'>
          <h2 className='text-center lg:text-left text-h4 lg:text-h2'>{heading}</h2>
          <p className='mb-0 text-base font-500 text-N-600'>{description}</p>
        </div>

        <div className='flex w-full justify-center lg:items-end lg:justify-end'>{cta}</div>
      </div>
    </div>
  )
}

PageLock.defaultProps = {}

export default PageLock
