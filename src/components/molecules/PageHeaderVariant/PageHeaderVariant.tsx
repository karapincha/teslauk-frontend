import React, { FC } from 'react'
import CN from 'classnames'

export interface PageHeaderVariantProps {
  [x: string]: any
  image?: string
  heading?: string
}

export const PageHeaderVariant: FC<PageHeaderVariantProps> = ({
  className,
  image,
  heading,
  ...restProps
}: PageHeaderVariantProps) => {
  const PageHeaderVariantClasses = CN(`page-header-variant flex gap-[48px]`, className)

  return (
    <div className={PageHeaderVariantClasses} {...restProps}>
      <h1 className='w-fixed w-[300px] text-h1 font-700 text-N-800 flex-shrink-0'>{heading}</h1>
      <div className='h-[407px] w-[852px]'>
        <img
          src={image}
          className='w-full rounded-[12px] object-cover object-center h-full'
        />
      </div>
    </div>
  )
}

PageHeaderVariant.defaultProps = {}

export default PageHeaderVariant
