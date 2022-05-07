import React, { FC } from 'react'
import CN from 'classnames'
import { Award, CheckCircle, Globe, Mail, MapPin, Phone, PhoneCall, Tag } from 'react-feather'
import { Chip, Pill } from '@/components/atoms'
import { PN } from 'country-flag-icons/react/3x2'

export interface SearchSuppliersProps {
  [x: string]: any
  supplierName?: string
  category?: string
  reviewCount?: string | number
  description?: string
  location?: string
  phone?: string
  mail?: string
  website?: string
  isVerified?: boolean
  isFeatured?: boolean
  image?: string
}

export const SearchSuppliers: FC<SearchSuppliersProps> = ({
  className,
  supplierName,
  category,
  reviewCount,
  description,
  location,
  phone,
  mail,
  website,
  isVerified,
  isFeatured,
  image,
  ...restProps
}: SearchSuppliersProps) => {
  const SearchSuppliersClasses = CN(`search-suppliers flex justify-between py-[40px]`, className)

  return (
    <div className={SearchSuppliersClasses} {...restProps}>
      <div className='flex flex-col'>
        <h5 className='text-h5 font-500 text-N-800'>{supplierName}</h5>

        {category && (
          <div className='flex items-center gap-[10px] pt-[8px] text-N-500'>
            <Tag size={20} />
            <p className='max-w-[348px] text-sm font-600'>{category}</p>
          </div>
        )}

        {/* Rating */}
        <div className='flex items-center pt-[16px]'>
          {/* Rating stars */}
          <div className='flex'>
            <i className='ri-star-fill text-[20px] text-[#ED920A]' />
            <i className='ri-star-fill text-[20px] text-[#ED920A]' />
            <i className='ri-star-fill text-[20px] text-[#ED920A]' />
            <i className='ri-star-line text-[20px] text-N-300' />
            <i className='ri-star-line text-[20px] text-N-300' />
          </div>

          <span className='flex gap-[8px] pl-[8px]'>
            <p className='text-sm font-600 text-N-800'>4.0</p>
            <p className='text-sm font-600 text-N-800'>( {reviewCount} reviews)</p>
          </span>

          <div className='flex gap-[12px] pl-[12px]'>
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
        </div>

        {description && <p className='pt-[16px] text-md font-500 text-N-600'>{description}</p>}

        {/* Links */}
        <div className='flex items-center gap-[8px] pt-[16px]'>
          <p className='text-sm font-600 text-N-500'>Copy info</p>
          {location && (
            <a href={location} target='_blank'>
              <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <MapPin size={16} />
              </div>
            </a>
          )}

          {phone && (
            <a href={phone} target='_blank'>
              <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Phone size={16} />
              </div>
            </a>
          )}

          {mail && (
            <a href={mail} target='_blank'>
              <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Mail size={16} />
              </div>
            </a>
          )}

          {website && (
            <a href={website} target='_blank'>
              <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Globe size={16} />
              </div>
            </a>
          )}
        </div>
      </div>

      {image && (
        <div className='flex'>
          <img src={image} className='h-[100px] w-[100px] object-cover object-center' />
        </div>
      )}
    </div>
  )
}

SearchSuppliers.defaultProps = {}

export default SearchSuppliers
