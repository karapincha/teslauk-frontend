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
      <h1 className='text-h1 font-700 text-N-800'>{heading}</h1>
      <div>
        <img src={image} width={784} height={407} className='rounded-[12px]' />
      </div>
    </div>
  )
}

PageHeaderVariant.defaultProps = {}

export default PageHeaderVariant
