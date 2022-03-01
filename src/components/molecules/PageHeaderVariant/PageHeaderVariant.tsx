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
  const PageHeaderVariantClasses = CN(`page-header-variant flex flex-col md:flex-row lg:flex-row w-full gap-[32px] lg:gap-[48px]`, className)

  return (
    <div className={PageHeaderVariantClasses} {...restProps}>
      <h1
        className='w-[80%] md:w-[30%] lg:w-[25%] flex-shrink-0 text-h3 lg:text-h1 font-700 text-N-800'
        dangerouslySetInnerHTML={{ __html: heading || '' }}
      />

      <div className='h-[178px] md:h-[205px] lg:h-[407px] w-full'>
        <img src={image} className='h-full w-full rounded-[12px] object-cover object-center' />
      </div>
    </div>
  )
}

PageHeaderVariant.defaultProps = {}

export default PageHeaderVariant
