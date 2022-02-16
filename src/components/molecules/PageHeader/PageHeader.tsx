import React, { FC, ReactNode, useState, useEffect } from 'react'
import CN from 'classnames'
import { FieldGroup } from '@/components/atoms/FieldGroup'
import { ButtonProps } from '@/components/atoms/Button'

export interface PageHeaderProps {
  [x: string]: any
  heading?: string
  description?: string
  image?: string
  icon?: ReactNode
  searchPlaceholder?: string
  btnProps?: ButtonProps
  onSearchChange?: Function
  onSearchSubmit?: Function
  textColor?: 'white' | 'black'
}

export const PageHeader: FC<PageHeaderProps> = ({
  className,
  heading,
  description,
  image,
  icon,
  searchPlaceholder,
  btnProps,
  onSearchChange,
  onSearchSubmit,
  textColor,
  headingClassName,
  iconClassName,
  descriptionClassName,
  hasSearch,
  ...restProps
}: PageHeaderProps) => {
  const [bannerImage, setBannerImage] = useState<any>(
    'url(/images/page-header-banner-fallback.png)'
  )
  const PageHeaderClasses = CN(
    `page-header flex flex-col w-full items-center bg-no-repeat bg-cover rounded-[12px] overflow-hidden lg:py-[48px] bg-center`,
    className
  )

  useEffect(() => {
    if (image) {
      setBannerImage(`url(${image})`)
    }
  }, [image])

  return (
    <div className={CN(PageHeaderClasses)} style={{ backgroundImage: bannerImage }} {...restProps}>
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
            'page-header__description w-1/2 text-center text-md font-500 text-N-600 lg:pt-[24px]',
            descriptionClassName
          )}
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      )}

      {hasSearch && (
        <FieldGroup
          className='w-[496px] lg:pt-[16px]'
          placeholder={searchPlaceholder}
          btnProps={{
            label: 'Search',
            onSearchSubmit: (e: any) => {
              console.log('Clicked', e)
            },
            appearance: 'primary',
          }}
          inputProps={{
            onSearchChange: (e: any) => {
              console.log(e.target.value)
            },
          }}
        />
      )}
    </div>
  )
}

PageHeader.defaultProps = {}

export default PageHeader
