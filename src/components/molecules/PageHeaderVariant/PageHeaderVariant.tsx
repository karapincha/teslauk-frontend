import React, { FC } from 'react'
import CN from 'classnames'
import { useViewport } from '@/utils'
import { Button } from '@/components/atoms'

export interface PageHeaderVariantProps {
  [x: string]: any
  image?: string
  heading?: string
  btnProps?: any
  description?: string
  metaData?: string
  metaDataNumber?: string
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
  btnProps,
  metaData,
  metaDataNumber,
  imageClassName,
  descriptionClassName,
  ...restProps
}: PageHeaderVariantProps) => {
  const PageHeaderVariantClasses = CN(
    `page-header-variant flex lg:flex flex-col md:flex-row lg:flex-row w-full gap-[24px] lg:gap-[48px] md:grid md:grid-cols-2`,
    className
  )

  const { isMobile, isTablet, isDesktop } = useViewport()
  const { children, ...restBtnProps } = btnProps || {}

  const renderGraphic = () => {
    return (
      <div className='w-full pt-[24px] md:pt-0'>
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
        {/* Heading */}
        <h1
          className='flex-shrink-0 overflow-auto text-h3 font-700 text-N-800 md:text-h2  lg:text-h1'
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />

        {/* Image in mobile version */}
        {isMobile && renderGraphic()}

        {/* Description */}
        {description && (
          <p
            className={CN(
              'flex-shrink-0 pt-[24px] text-base font-400 text-N-600 lg:pt-0',
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        )}

        {/* MetaData */}

        {metaData && (
          <div className='flex items-center justify-center gap-[16px] pt-[32px] md:justify-start'>
            <h3 className='text-h3 font-700'>{metaDataNumber}</h3>
            <div className='h-[72px] w-[1px] bg-N-200' />
            <p
              className={CN('text-md font-400 text-N-600')}
              dangerouslySetInnerHTML={{ __html: metaData || '' }}
            />
          </div>
        )}

        {btnProps && (
          <div className='pt-[32px]'>
            <Button {...restBtnProps}>{children || 'Search suppliers'}</Button>
          </div>
        )}
      </div>

      {!isMobile && renderGraphic()}
    </div>
  )
}

PageHeaderVariant.defaultProps = {}

export default PageHeaderVariant
