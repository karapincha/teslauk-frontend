import React, { FC, useState, useEffect } from 'react'
import CN from 'classnames'
import { Award, CheckCircle, Globe, Mail, MapPin, Phone, PhoneCall, Tag } from 'react-feather'
import { Chip, Pill } from '@/components/atoms'
import Link from 'next/link'

export interface SearchSuppliersProps {
  [x: string]: any
}

export const SearchSuppliers: FC<SearchSuppliersProps> = ({
  className,
  data,
  ...restProps
}: SearchSuppliersProps) => {
  const SearchSuppliersClasses = CN(
    `search-suppliers flex flex-col-reverse md:flex-row gap-[24px] md:gap-0 justify-between`,
    className
  )

  const { title, pageSupplier, supplierTags, slug } = data
  const {
    name,
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
    excerpt,
    address,
    logo,
    email,
  } = pageSupplier

  return (
    <div className={SearchSuppliersClasses} {...restProps}>
      <div className='flex flex-col'>
        <div className='flex'>
          <Link href={`/suppliers/${slug}` || ''} passHref>
            <h5 className='mb-[8px] cursor-pointer border-b border-dotted border-N-500 text-h5 font-500 text-N-800 hover:text-B-400'>
              {name}
            </h5>
          </Link>
        </div>

        {supplierTags && supplierTags?.edges?.length > 0 && (
          <div className='flex items-center gap-[10px] pt-[8px] text-N-500'>
            <Tag size={20} />

            {supplierTags?.edges?.map((item: any, index: number) => {
              return (
                <Link href={`/suppliers/tags/${item?.node?.slug}`} passHref key={index}>
                  <p
                    key={index}
                    className='max-w-[348px] cursor-pointer text-sm font-600 after:ml-[8px] after:content-["/"] last:after:content-[""] hover:text-R-400'>
                    {item?.node?.name}
                  </p>
                </Link>
              )
            })}
          </div>
        )}

        {(isVerified || isFeatured) && (
          <div className='flex flex-col pt-[16px] md:flex-row'>
            {/* Rating stars */}
            {/* <div className='flex items-center'>
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
          </div> */}

            <div className='flex gap-[12px] pt-[12px] md:pt-0'>
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
        )}

        {excerpt && (
          <p
            className='pt-[16px] text-md font-500 text-N-600 md:pr-[20px]'
            dangerouslySetInnerHTML={{ __html: excerpt || '' }}
          />
        )}

        {/* Links */}
        <div className='flex items-center gap-[8px] pt-[16px]'>
          {location && (
            <Link href={`http://maps.google.com/?q=${location?.latitude},${location?.longitude}`}>
              <a target='_blank'>
                <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                  <MapPin size={16} />
                </div>
              </a>
            </Link>
          )}

          {phone && (
            <a href={`tel:${phone}`} target='_blank'>
              <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Phone size={16} />
              </div>
            </a>
          )}

          {email && (
            <a href={`mailto:${email}`} target='_blank'>
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

      {logo && (
        <div className='flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center border border-N-50 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]'>
          <img src={logo?.mediaItemUrl} className='h-[80%] w-[80%] object-contain object-center' />
        </div>
      )}
    </div>
  )
}

export default SearchSuppliers
