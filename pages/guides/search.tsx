import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { PageHeader, ArticleCard, Pagination } from '@/components/molecules'
import { Common as CommonLayout } from '@/components/layouts'
import { getAllGuidesByCategories, getTotals, SEARCH_GUIDES } from '../../lib/graphql'
import { useQuery, gql } from '@apollo/client'
import ReactPaginate from 'react-paginate'
import { Badge, Button, Spinner } from '@/components/atoms'

const Page: NextPage = ({ totals }: any) => {
  const router = useRouter()
  const removeQuotes = (str: any) => {
    return (str || '').replace(/['"]+/g, '')
  }
  const [searchString, setSearchString] = useState(removeQuotes(router.query.q) || '')
  const [submitSearchString, setSubmitSearchString] = useState(removeQuotes(router.query.q) || '')

  const { data, loading, error, refetch } = useQuery(SEARCH_GUIDES, {
    variables: { search: submitSearchString || '' },
  })

  const [items, setItems] = useState<any>([])
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5

  useEffect(() => {
    if (router.query.q) {
      setSearchString(removeQuotes(router.query.q))
      setSubmitSearchString(removeQuotes(router.query.q))
    }
  }, [router])

  useEffect(() => {
    if (data && data?.guides?.nodes) {
      setItems(data?.guides?.nodes)
    }
  }, [data])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <Head>
        <title>Guides Search - Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex'>
          <PageHeader
            hasSearch
            heading={`Guides Search: ${router.query.q}`}
            description={`Search through over ${totals?.guides?.pageInfo?.total} guides`}
            btnProps={{
              onClick: (e: any) => {
                e.preventDefault()
                router.push(`/guides/search/?q="${searchString}"`)
                setSubmitSearchString(searchString)
              },
              children: 'Search',
              appearance: 'primary',
            }}
            inputProps={{
              onChange: (e: any) => {
                setSearchString(e.target.value)

                if (e.target.value.length === 0) {
                  router.push(`/guides/search/?q="${e.target.value}"`)
                  setSubmitSearchString(e.target.value)
                }
              },
              placeholder: 'Search a guide',
              value: removeQuotes(searchString),
              size: 'lg',
              onKeyDown: (event: any) => {
                if (event.key === 'Enter') {
                  setSubmitSearchString(searchString)
                  router.push(`/guides/search/?q="${searchString}"`)
                }
              },
            }}
          />
        </div>

        <div className='container flex flex-col pt-[40px]'>
          {loading && (
            <div className='flex justify-center text-R-400'>
              <Spinner />
            </div>
          )}

          {!loading && (
            <>
              <div className='mx-auto flex w-full max-w-[784px] flex-col'>
                {submitSearchString && (
                  <div className='mb-[48px] text-h5 text-N-700'>
                    Results:{' '}
                    {`${items.length} ${items.length === 1 ? `guide found` : `guides found`}`} for
                    <span className='font-500 text-B-500'> "{submitSearchString}"</span>
                  </div>
                )}

                <div className='flex flex-col gap-[32px]'>
                  {(currentItems || []).map((item: any, index: number) => {
                    return (
                      <ArticleCard
                        title={item?.title}
                        key={index}
                        link={`/guides/${item?.slug}`}
                        excerpt={item?.pageGuide?.excerpt}
                        thumbnail={item?.pageGuide?.thumbnail?.mediaItemUrl}
                      />
                    )
                  })}
                </div>
              </div>

              {items.length > 0 && (
                <div className='mx-auto w-full max-w-[784px] py-[40px] md:py-[80px]'>
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
              )}
            </>
          )}
        </div>
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }: any) {
  const data = await getTotals()

  return {
    props: {
      preview,
      totals: data,
    },
    
  }
}

export default Page
