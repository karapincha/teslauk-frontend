import React, { FC, ReactNode } from 'react'
import CN from 'classnames'
import { Pill } from '@/components/atoms'
import { CheckCircle, Award } from 'react-feather'
import { Breadcrumb } from '@/components/molecules/Breadcrumb'

export interface SupplierAboutHeaderProps {
  [x: string]: any
  icon?: ReactNode | string
  breadcrumbLinks?: any
  heading?: string
  isFeatured?: boolean
  isVerified?: boolean
  reviewCount?: string | number
  image?: string
}

export const SupplierAboutHeader: FC<SupplierAboutHeaderProps> = ({
  className,
  icon,
  breadcrumbLinks,
  heading,
  isFeatured,
  isVerified,
  reviewCount,
  image,
  rating,
  ...restProps
}: SupplierAboutHeaderProps) => {
  const SupplierAboutHeaderClasses = CN(
    `supplier-about-header relative flex justify-between md:gap-[84px] md:max-w-[784px] w-full md:items-left bg-N-10 mt-auto h-full pt-[32px] md:pt-[40px] pb-[32px] before:content-[''] before:absolute before:h-full before:bg-N-10 before:top-0 before:bottom-0 before:w-screen before:right-[100%] md:pr-[32px] rounded-tr-[12px] lg:rounded-tr-none`,
    className
  )

  return (
    <div className={SupplierAboutHeaderClasses} {...restProps}>
      <div className='flex w-full flex-col'>
        {/* breadcrumbLinks */}
        {breadcrumbLinks && (
          <div className='flex items-center gap-[12px] text-base font-600 text-N-500'>
            <span>{icon}</span>
            <div>{breadcrumbLinks}</div>
          </div>
        )}
        {/* Heading */}
        <h1 className='pt-[8px] text-h4 font-500 md:text-h3 md:font-700 lg:text-h2 lg:font-700'>
          {heading}
        </h1>

        {/* Verified / Featured */}
        {(isVerified || isFeatured) && (
          <div className='flex gap-[12px] pt-[16px]'>
            {isVerified && (
              <Pill
                className='!bg-G-10 !text-base !font-600 !text-G-600'
                children='Verified'
                size='md'
                iconBefore={<CheckCircle size={16} />}
              />
            )}

            {isFeatured && (
              <Pill
                className='!bg-Y-10 !text-base !font-600 !text-Y-800'
                children='Featured'
                size='md'
                iconBefore={<Award size={16} />}
              />
            )}
          </div>
        )}

        {/* Ratings */}
        {/* <div className='flex items-center pt-[8px]'>
          <div className='relative flex'>
            {Array.from({ length: 5 }, (_, index) => {
              if (index < rating) {
                return <i key={index} className='ri-star-fill text-[20px] text-[#ED920A]' />
              }

              return <i key={index} className='ri-star-line text-[20px] text-N-300' />
            })}
          </div>

          <span className='flex gap-[8px] pl-[8px]'>
            <p className='text-sm font-600 text-N-800'>{rating} Star(s)</p>
          </span>
        </div> */}
      </div>

      {image && (
        <div className='flex h-[164px] w-[164px] flex-shrink-0 items-center justify-center border border-N-50 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]'>
          <img src={image} className='h-[80%] w-[80%] object-contain object-center' />
        </div>
      )}
    </div>
  )
}

SupplierAboutHeader.defaultProps = {}

export default SupplierAboutHeader
