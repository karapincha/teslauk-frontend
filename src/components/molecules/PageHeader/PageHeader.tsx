import React, { FC, ReactNode, useState, useEffect } from 'react'
import CN from 'classnames'
import { FieldGroup } from '@/components/atoms/FieldGroup'
import { ButtonProps } from '@/components/atoms/Button'

export interface PageHeaderProps {
  [x: string]: any
}

export const PageHeader: FC<PageHeaderProps> = ({
  btnProps,
  className,
  description,
  descriptionClassName,
  hasSearch,
  heading,
  headingClassName,
  icon,
  iconClassName,
  image,
  inputProps,
  textColor,
  ...restProps
}: PageHeaderProps) => {
  const [bannerImage, setBannerImage] = useState<any>(
    'url(/images/page-header-banner-fallback.png)'
  )
  const PageHeaderClasses = CN(
    `page-header flex flex-col w-full bg-no-repeat bg-cover rounded-[12px] overflow-hidden relative lg:py-[48px] bg-center`,
    {
      "after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-N-800/70 after:z-[0]":
        image,
    },
    className
  )

  useEffect(() => {
    image && setBannerImage(`url(${image})`)
  }, [image])

  return (
    <div className={CN(PageHeaderClasses)} style={{ backgroundImage: bannerImage }} {...restProps}>
      <div className='relative z-[1] flex flex-col items-center'>
        {icon && <span className={CN(iconClassName)}>{icon}</span>}

        {heading && (
          <h2
            className={CN(
              'page-header__heading w-[60%] max-w-[529px] text-center font-700 text-N-800 lg:text-h3',
              headingClassName
            )}
            dangerouslySetInnerHTML={{ __html: heading || '' }}
          />
        )}

        {description && (
          <p
            className={CN(
              'page-header__description w-1/2 text-center text-md font-500 lg:pt-[24px]',
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        )}

        {hasSearch && (
          <FieldGroup
            className='w-[370px] lg:pt-[16px]'
            btnProps={btnProps}
            inputProps={inputProps}
          />
        )}
      </div>
    </div>
  )
}

PageHeader.defaultProps = {}

export default PageHeader
