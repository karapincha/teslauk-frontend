import React, { FC, useState, useEffect } from 'react'
import CN from 'classnames'
import { useQuery, gql } from '@apollo/client'
import { Button, TextField } from '@/components/atoms'
import { Pagination, SectionHeading } from '@/components/molecules'
import { ArrowRight, Search } from 'react-feather'
import { SearchSuppliers } from '@/components/molecules'
import { supplierList } from '@/dummy-data/supplier-list'

export interface SuppliersSearchProps {
  [x: string]: any
}

export const SuppliersSearch: FC<SuppliersSearchProps> = ({
  className,
  ...restProps
}: SuppliersSearchProps) => {
  const SuppliersSearchClasses = CN(`suppliers-search`, className)
  const [searchString, setSearchString] = useState('')
  const [searchLocation, setSearchLocation] = useState('')

  const QUERY = gql`
    {
      suppliers(where: { search: "${searchString}" }) {
        nodes {
          id
          title
          slug
          supplierTags {
            edges {
              node {
                slug
                name
              }
            }
          }
          pageSupplier {
            address
            description
            email
            isFeatured
            isVerified
            location {
              latitude
              longitude
            }
            name
            phone
            rating
            website
            logo {
              mediaItemUrl
            }
          }
        }
      }
    }
  `

  const { data, loading, error, refetch } = useQuery(QUERY)

  useEffect(() => {
    console.log(data?.suppliers?.nodes)
  }, [data])

  return (
    <div className={SuppliersSearchClasses} {...restProps}>
      {/* Search suppliers */}
      <div className='container pb-[80px]'>
        <div className='flex flex-col gap-[24px] md:gap-[40px]'>
          <h3 className='text-center text-h3 font-700'>Search suppliers</h3>
          <div className='flex flex-col items-center gap-[24px] bg-N-50 px-[24px] py-[24px] md:flex-row'>
            <TextField
              placeHolder='Enter name'
              onChange={(e: any) => {
                setSearchString(e.target.value)
              }}
            />

            {/* Change into dropdowns */}
            <TextField
              placeHolder='Enter location'
              onChange={(e: any) => {
                setSearchLocation(e.target.value)
              }}
            />

            <Button
              appearance='primary'
              iconAfter={<Search size={20} />}
              className='w-full md:w-[unset]'>
              Search
            </Button>
          </div>

          {/* Search results */}
          <div className='flex flex-col'>
            {!loading && (
              <p className='text-base font-400 text-N-600'>
                {data?.suppliers?.nodes?.length || 0} search results
              </p>
            )}

            {loading && <p>Loading...</p>}

            <ul className='group flex flex-col'>
              {(data?.suppliers?.nodes || []).map(
                ({ id, title, pageSupplier, supplierTags }: any, index: number) => {
                  const {
                    address,
                    phone,
                    email,
                    website,
                    logo,
                    description,
                    rating,
                    isVerified,
                    isFeatured,
                  } = pageSupplier

                  return (
                    <li
                      key={id || index}
                      className='border-b border-N-200 py-[24px] last:border-b-0 last:pb-0 md:py-[40px]'>
                      <SearchSuppliers
                        supplierName={title}
                        category={supplierTags.edges}
                        reviewCount={rating}
                        isVerified={isVerified}
                        isFeatured={isFeatured}
                        description={description}
                        location={address}
                        phone={phone}
                        mail={email}
                        website={website}
                        image={logo?.mediaItemUrl}
                      />
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>

        {/* <div className=' w-full max-w-[784px] py-[40px] md:py-[80px]'>
          <Pagination />
        </div> */}
      </div>
    </div>
  )
}

SuppliersSearch.defaultProps = {}

export default SuppliersSearch
