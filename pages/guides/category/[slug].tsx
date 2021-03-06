import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { PageHeader, ArticleCard, Pagination } from '@/components/molecules'
import { useRouter } from 'next/router'
import { useViewport } from '@/utils'
import { articleSearchResultA, articleSearchResultB } from '@/dummy-data/article-search-results'
import articleList from '@/dummy-data/article-list'
import { Tag, ShoppingBag, ArrowRight } from 'react-feather'
import { ContactCard } from '@/components/molecules/ContactCard'
import { InlineCTA } from '@/components/molecules/InlineCTA'
import { Chip, Button } from '@/components/atoms'
import { Common as CommonLayout } from '@/components/layouts'
import Link from 'next/link'
import { getAllGuidesByCategories, getGuidesByCategory } from '../../../lib/graphql'
import ReactPaginate from 'react-paginate'

const Page: NextPage = ({ page, categories, guides }: any) => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop } = useViewport()
  const [searchString, setSearchString] = useState('')

  const [items, setItems] = useState<any>(page?.guides?.nodes || [])
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10

  useEffect(() => {
    if (page && page?.guides && page?.guides?.nodes) {
      setItems(page?.guides?.nodes)
    }
  }, [page])

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
        <title>
          {page?.name ? `Guides: ${page?.name} - Tesla Owners UK` : `Guides - Tesla Owners UK`}
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container'>
          <PageHeader
            hasSearch
            heading={`Guides: ${page?.name}`}
            description={`Search through over ${page?.guides?.pageInfo?.total} guides`}
            btnProps={{
              onClick: (e: any) => {
                e.preventDefault()
                router.push(`/guides/search/?q="${searchString}"`)
              },
              children: 'Search',
              appearance: 'primary',
            }}
            inputProps={{
              onChange: (e: any) => setSearchString(e.target.value),
              placeholder: 'Search a guide',
              value: searchString,
              size: 'lg',
              onKeyDown: (event: any) => {
                if (event.key === 'Enter') {
                  router.push(`/guides/search/?q="${searchString}"`)
                }
              },
            }}
          />
        </div>

        {/* Main div with all the content */}
        <div className='container flex flex-col lg:grid lg:grid-cols-[738px_auto] lg:gap-[92px]'>
          <div className='flex flex-col lg:flex-row lg:gap-[48px] lg:pt-[48px]'>
            {/* Article list */}
            <div className='article_list flex flex-col'>
              {(currentItems || []).map((item: any, index: number) => {
                if (index === 3) {
                  return (
                    <div key={index}>
                      <ArticleCard
                        data={item}
                        key={index}
                        tags={item?.guideCategories?.nodes}
                        title={item?.title}
                        thumbnail={item?.thumbnail?.mediaItemUrl}
                        className='py-[16px]'
                        link={`/guides/${item?.slug}`}
                        excerpt={item?.pageGuide?.excerpt}
                      />

                      <InlineCTA
                        key={`${index}${item?.slug}${item?.title}`}
                        heading='Do you have the expertise? Share your knowledge!'
                        btnProps={{
                          children: 'Submit an article',
                          onClick: () => {},
                        }}
                        className='my-[20px]'
                      />
                    </div>
                  )
                }

                return (
                  <ArticleCard
                    data={item}
                    key={index}
                    tags={item?.guideCategories?.nodes}
                    title={item?.title}
                    thumbnail={item?.pageGuide?.thumbnail?.mediaItemUrl}
                    className='py-[16px] first:pt-[0] last:pb-0'
                    link={`/guides/${item?.slug}`}
                    excerpt={item?.pageGuide?.excerpt}
                  />
                )
              })}

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
            </div>
          </div>

          {/* Right side section with quick links */}
          <div className='article-view-right-bar pt-[40px]'>
            <div className='flex flex-col gap-[24px] md:grid md:grid-cols-2 md:justify-between md:gap-[24px] lg:flex lg:flex-col lg:gap-[24px]'>
              <div className='article-view-categories'>
                <p className='text-base font-600 text-N-800 md:col-start-2 '>Categories</p>
                <div className='pt-[12px]'>
                  {categories?.nodes?.map(({ slug, name }: any) => {
                    return (
                      <Link key={slug} href={`/guides/category/${slug}`} passHref>
                        <a>
                          <Chip
                            key={slug}
                            className='mb-[16px]'
                            iconClassName='text-N-400'
                            label={name}
                            icon={<Tag size={20} />}
                          />
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className='most-accessed'>
                <p className='text-base font-600 text-N-800'>Most recent guides</p>
                <ul className='flex flex-col gap-[8px] pt-[16px]'>
                  {(guides?.nodes || []).map(({ id, slug, title }: any, index: number) => (
                    <li key={id || index}>
                      <Link href={`/guides/${slug}`} passHref>
                        <a className='text-md font-500  text-N-800 hover:text-B-500'>{title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className='flex items-center gap-[4px] pt-[32px] text-B-500'>
                  <Link href={`/guides`} passHref>
                    <a className='cursor-pointer text-md font-600 text-B-500 hover:text-B-600'>
                      See all guides ({guides?.pageInfo?.total})
                    </a>
                  </Link>
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </p>
              </div>
            </div>

            <div className='contact-card sticky top-[0] pt-[32px] lg:pt-[48px]'>
              <ContactCard
                description='Remember modifying your vehicle may invalidate part of 
                your vehicle???s warranty.<br/>
                Therefore,  be careful and check with Tesla if unsure. Also any modifications will most likely need to be 
                OK???d with your car insurance company.<br/><br/>
                To the best of our knowledge, these guides are correct and factual.
                However we take no responsibility if something does go wrong.<br/><br/>
                If you spot a mistake please ensure you alert us.'
                btnProps={{
                  label: 'Contact Us',
                  onClick: () => {
                    router.push('/contact')
                  },
                }}
              />
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ params, preview = false, previewData }: any) {
  const data = await getGuidesByCategory(params.slug || '')

  return {
    props: {
      preview,
      page: data?.guideCategory,
      categories: data?.guideCategories,
      guides: data?.guides,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await getAllGuidesByCategories()

  return {
    paths: paths?.guideCategories?.nodes.map(({ slug }: any) => `/guides/category/${slug}`) || [],
    fallback: true,
  }
}

export default Page
