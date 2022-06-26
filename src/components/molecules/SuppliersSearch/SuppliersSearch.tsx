import React, { FC, useState, useEffect } from 'react'
import CN from 'classnames'
import { useQuery, gql } from '@apollo/client'
import { Badge, Button, TextField } from '@/components/atoms'
import { Pagination, SectionHeading } from '@/components/molecules'
import { ArrowRight, Search } from 'react-feather'
import { SearchSuppliers } from '@/components/molecules'
import ReactPaginate from 'react-paginate'

import { SEARCH_SUPPLIERS } from '../../../../lib/graphql'
import { useViewport } from '@/utils'

export interface SuppliersSearchProps {
  [x: string]: any
}

function Items({ currentItems, searchString, allItems, selectedTag }: any) {
  const [items, setItems] = useState(currentItems || [])

  useEffect(() => {
    setItems(currentItems)
  }, [currentItems])

  useEffect(() => {
    if (selectedTag && allItems?.length > 0) {
      const filteredData = allItems.filter((tag: any) => {
        return tag.supplierTags.edges.some((deepTag: any) => deepTag.node.slug === selectedTag)
      })

      setItems(filteredData)
    } else {
      setItems(currentItems)
    }
  }, [selectedTag])

  const renderLength = () => {
    if (searchString || selectedTag) {
      return `${items.length} ${items.length === 1 ? `supplier found` : `suppliers found`}`
    }

    return `${allItems.length} ${allItems.length === 1 ? `supplier found` : `suppliers found`}`
  }

  return (
    <>
      <p className='text-base font-400 text-N-600'>{renderLength()}</p>

      <ul className='group flex flex-col pt-[12px]'>
        {(items || []).map((data: any, index: number) => {
          return (
            <li key={index} className='border-b border-N-200 py-[24px]  last:border-b-0 last:pb-0'>
              <SearchSuppliers data={data} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const SuppliersSearch: FC<SuppliersSearchProps> = ({
  className,
  tags,
  suppliers,
  ...restProps
}: SuppliersSearchProps) => {
  const SuppliersSearchClasses = CN(`suppliers-search`, className)
  const { isMobile, isTablet, isDesktop } = useViewport()

  const [searchString, setSearchString] = useState('')

  const { data, loading, error, refetch } = useQuery(SEARCH_SUPPLIERS, {
    variables: { search: searchString || '' },
  })

  const [selectedTag, setSelectedTag] = useState<any>('')

  const [items, setItems] = useState(suppliers?.nodes || [])
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5

  useEffect(() => {
    if (data && data?.suppliers?.nodes) {
      setItems(data?.suppliers?.nodes)
    }
  }, [data])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className={SuppliersSearchClasses} {...restProps}>
      {/* Search suppliers */}
      <div className='container'>
        <div className='flex flex-col gap-[24px] md:gap-[60px]'>
          <SectionHeading
            overline='Directory'
            heading={`Search Suppliers`}
            headingClassName='!text-h3 lg:!text-h2 font-700 !mb-0'
            align={'center'}
          />

          <div className='flex flex-col rounded-[8px] bg-N-50 px-[24px] py-[32px]'>
            <div className='flex flex-col items-center gap-[12px] md:flex-row'>
              <TextField
                placeholder='Enter supplier name'
                onChange={(e: any) => {
                  setSearchString(e.target.value)
                  setSelectedTag('')
                }}
                value={searchString}
                wrapperClassName='h-[48px]'
              />
              <Button
                appearance='primary'
                iconAfter={<Search size={20} />}
                className='w-full md:w-[unset]'
                onClick={(e: any) => handleSearch(e)}>
                Search
              </Button>
            </div>

            <div className='flex flex-col gap-[20px] pt-[20px]'>
              <p className='text-md font-500 text-N-600'>Search by tag</p>

              <div className='flex flex-wrap gap-[12px]'>
                {tags?.nodes?.map(({ name, slug }: any, index: number) => (
                  <Badge
                    appearance='neutral'
                    isHover
                    key={index || slug}
                    isSelected={slug === selectedTag}
                    onClick={() => {
                      setSelectedTag(slug)
                      setSearchString('')
                    }}
                    iconAfter={
                      slug === selectedTag && (
                        <i
                          onClick={(e: any) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setSelectedTag('')
                          }}
                          className='ri-close-line'
                        />
                      )
                    }>
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Search results */}
          <div className='flex flex-col'>
            <Items
              currentItems={currentItems}
              selectedTag={selectedTag}
              searchString={searchString}
              allItems={suppliers.nodes || data?.suppliers?.nodes}
            />
          </div>
        </div>

        <div className=' w-full max-w-[784px] py-[40px] md:py-[80px]'>
          <ReactPaginate
            breakLabel='...'
            nextLabel={
              <Button appearance='ghost' isSquare>
                <i className='ri-arrow-right-s-line text-lg' />
              </Button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <Button appearance='ghost' isSquare>
                <i className='ri-arrow-left-s-line text-lg' />
              </Button>
            }
            className='pagination'
          />
        </div>
      </div>
    </div>
  )
}

SuppliersSearch.defaultProps = {}

export default SuppliersSearch
