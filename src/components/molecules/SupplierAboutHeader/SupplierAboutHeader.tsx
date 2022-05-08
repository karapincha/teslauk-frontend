import React, { FC, ReactNode } from 'react'
import CN from 'classnames'
import { Pill } from '@/components/atoms'
import { CheckCircle, Award } from 'react-feather'

export interface SupplierAboutHeaderProps {
  [x: string]: any
  icon?: ReactNode | string
  category?: string
  heading?: string
  isFeatured?: boolean
  isVerified?: boolean
  reviewCount?: string | number
  image?: string
}

export const SupplierAboutHeader: FC<SupplierAboutHeaderProps> = ({
  className,
  icon,
  category,
  heading,
  isFeatured,
  isVerified,
  reviewCount,
  image,
  ...restProps
}: SupplierAboutHeaderProps) => {
  const SupplierAboutHeaderClasses = CN(
    `supplier-about-header flex justify-between gap-[84px] max-w-[784px] items-left`,
    className
  )

  return (
    <div className={SupplierAboutHeaderClasses} {...restProps}>
      <div className='flex w-full flex-col'>
        {/* Category */}
        {category && (
          <div className='flex items-center gap-[12px] text-base font-600 text-N-500'>
            <span>{icon}</span>
            <p>{category}</p>
          </div>
        )}
        {/* Heading */}
        <h1 className='pt-[8px] text-h4 font-500 md:text-h3 md:font-700 lg:text-h2 lg:font-700'>
          {heading}
        </h1>

        {/* Verified / Featured */}
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
              className='!bg-Y-10 !text-Y-800 !text-base !font-600'
              children='Featured'
              size='md'
              iconBefore={<Award size={16} />}
            />
          )}
        </div>

        {/* Ratings */}
        <div className='flex items-center pt-[8px]'>
          <div className='flex'>
            <i className='ri-star-fill text-[20px] text-B-500' />
            <i className='ri-star-fill text-[20px] text-B-500' />
            <i className='ri-star-fill text-[20px] text-B-500' />
            <i className='ri-star-fill text-[20px] text-B-500' />
            <i className='ri-star-line text-[20px] text-N-300' />
          </div>

          <span className='flex gap-[8px] pl-[8px]'>
            <p className='text-sm font-600 text-N-800'>4.0</p>
            <p className='text-sm font-600 text-N-800'>( {reviewCount} reviews)</p>
          </span>
        </div>
      </div>

      {image && (
        <div className='flex items-center'>
          <img src={image} className='h-[164px] w-[164px] object-cover object-center' />
        </div>
      )}
    </div>
  )
}

SupplierAboutHeader.defaultProps = {}

export default SupplierAboutHeader
