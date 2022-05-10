import React, { FC } from 'react'
import CN from 'classnames'
import { SearchSuppliers } from '@/components/molecules/SearchSuppliers'
import supplierList from '@/dummy-data/supplier-list'
import { TextField } from '@/components/atoms'
import { Pagination } from '@/components/molecules'
import { Button } from '@/components/atoms'
import { Bookmark, Compass, Globe, Mail, MapPin, Phone } from 'react-feather'

export interface SupplierDetailsRelatedListingsProps {
  [x: string]: any
}

export const SupplierDetailsRelatedListings: FC<SupplierDetailsRelatedListingsProps> = ({
  className,
  ...restProps
}: SupplierDetailsRelatedListingsProps) => {
  const SupplierDetailsRelatedListingsClasses = CN(
    `supplier-details-related-listings flex flex-col gap-[24px] pb-[40px] md:gap-[48px] md:pb-[80px] lg:flex-row`,
    className
  )

  return (
    <div className={SupplierDetailsRelatedListingsClasses} {...restProps}>
      <div className='pt-[24px]  md:pt-[40px] '>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <p className='text-base text-N-600'>57 related listings</p>
          </div>
          <div className='flex'>
            {/* Add a dropdown here */}
            <TextField placeHolder='Sort by Relevance' />
          </div>
        </div>

        <ul className='group flex flex-col'>
          {(supplierList || []).map(
            (
              {
                id,
                supplierName,
                category,
                reviewCount,
                isVerified,
                isFeatured,
                description,
                location,
                phone,
                mail,
                website,
                image,
              }: any,
              index: number
            ) => (
              <li
                key={id || index}
                className='border-b border-N-200 py-[24px] last:border-b-0 last:pb-0 md:py-[40px]'>
                <SearchSuppliers
                  supplierName={supplierName}
                  category={category}
                  reviewCount={reviewCount}
                  isVerified={isVerified}
                  isFeatured={isFeatured}
                  description={description}
                  location={location}
                  phone={phone}
                  mail={mail}
                  website={website}
                  image={image}
                />
              </li>
            )
          )}
        </ul>

        <div className='py-[80px]'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

SupplierDetailsRelatedListings.defaultProps = {}

export default SupplierDetailsRelatedListings
