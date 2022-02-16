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
  const PageHeaderVariantClasses = CN(`page-header-variant flex w-full gap-[48px]`, className)

  return (
    <div className={PageHeaderVariantClasses} {...restProps}>
      <h1 className='w-fixed w-[300px] flex-shrink-0 text-h1 font-700 text-N-800'>{heading}</h1>
      <div className='h-[407px] w-full'>
        <img src={image} className='h-full w-full rounded-[12px] object-cover object-center' />
      </div>
    </div>
  )
}

PageHeaderVariant.defaultProps = {}

export default PageHeaderVariant
