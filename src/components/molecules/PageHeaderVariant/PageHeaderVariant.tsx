import React, { FC } from 'react'
import CN from 'classnames'
import { useViewport } from '@/utils'

export interface PageHeaderVariantProps {
  [x: string]: any
  image?: string
  heading?: string
  description?: string
  commonClassName?: string
  imageClassName?: string
  descriptionClassName?: string
}

export const PageHeaderVariant: FC<PageHeaderVariantProps> = ({
  className,
  image,
  heading,
  commonClassName,
  description,
  imageClassName,
  descriptionClassName,
  ...restProps
}: PageHeaderVariantProps) => {
  const PageHeaderVariantClasses = CN(
    `page-header-variant flex lg:flex flex-col md:flex-row lg:flex-row w-full gap-[24px] lg:gap-[48px] md:grid md:grid-cols-2`,
    className
  )

  const { isMobile, isTablet, isDesktop } = useViewport()

  const renderGraphic = () => {
    return (
      <div className='pt-[40px] md:pt-0'>
        <div className={CN('h-[178px] w-full md:h-[248px] lg:h-[407px]', imageClassName)}>
          <img src={image} className='h-full w-full rounded-[12px] object-cover object-center' />
        </div>
      </div>
    )
  }

  return (
    <div className={PageHeaderVariantClasses} {...restProps}>
      <div
        className={CN(
          'flex w-full flex-shrink-0 flex-col lg:w-[25%] lg:gap-[28px]',
          commonClassName
        )}>
        <h1
          className='flex-shrink-0 overflow-auto text-h3 font-700 text-N-800 md:text-h2  lg:text-h1'
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />

        {isMobile && renderGraphic()}

        {description && (
          <p
            className={CN(
              'flex-shrink-0 pt-[24px] text-base font-400 text-N-600 lg:pt-0',
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        )}
      </div>
      {!isMobile && renderGraphic()}
    </div>
  )
}

PageHeaderVariant.defaultProps = {}

export default PageHeaderVariant
