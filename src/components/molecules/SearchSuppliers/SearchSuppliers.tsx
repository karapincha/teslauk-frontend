import React, { FC } from 'react'
import CN from 'classnames'
import { Award, CheckCircle, Globe, Mail, MapPin, Phone, PhoneCall, Tag } from 'react-feather'
import { Chip, Pill } from '@/components/atoms'
import Link from 'next/link'

export interface SearchSuppliersProps {
  [x: string]: any
  supplierName?: string
  category?: any
  reviewCount?: any
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
  slug,
  ...restProps
}: SearchSuppliersProps) => {
  const SearchSuppliersClasses = CN(
    `search-suppliers flex flex-col-reverse md:flex-row gap-[24px] md:gap-0 justify-between`,
    className
  )

  return (
    <div className={SearchSuppliersClasses} {...restProps}>
      <div className='flex flex-col'>
        <Link href={`/suppliers/${slug}` || ''} passHref>
          <h5 className='cursor-pointer text-h5 font-500 text-N-800 hover:text-B-400'>
            {supplierName}
          </h5>
        </Link>

        {category && category?.length && (
          <div className='flex items-center gap-[10px] pt-[8px] text-N-500'>
            <Tag size={20} />

            {category?.map((item: any, index: number) => (
              <p
                key={index}
                className='max-w-[348px] text-sm font-600 after:content-["/"] last:after:content-[""]'>
                {item?.node?.name} <span className='last:hidden'>/</span>
              </p>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className='flex flex-col pt-[16px] md:flex-row'>
          {/* Rating stars */}
          <div className='flex items-center'>
            <div className='relative flex'>
              {Array.from({ length: 5 }, (_, index) => {
                if (index < reviewCount) {
                  return <i className='ri-star-fill text-[20px] text-[#ED920A]' />
                }

                return <i className='ri-star-line text-[20px] text-N-300' />
              })}
            </div>

            <span className='flex gap-[8px] pl-[8px]'>
              <p className='text-sm font-600 text-N-800'>{reviewCount} Star(s)</p>
            </span>
          </div>

          <div className='flex gap-[12px] pt-[12px] md:pt-0 md:pl-[12px]'>
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
        <div className='flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center bg-white'>
          <img src={image} className='h-[80%] w-[80%] object-contain object-center' />
        </div>
      )}
    </div>
  )
}

SearchSuppliers.defaultProps = {}

export default SearchSuppliers
