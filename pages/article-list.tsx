import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { PageHeader, ArticleCard, Pagination } from '@/components/molecules'
import { useRouter } from 'next/router'
import { useViewport } from '@/utils'
import { articleSearchResultA, articleSearchResultB } from '@/dummy-data/article-search-results'
import articleList from '@/dummy-data/article-list'
import { ArrowRight } from 'react-feather'
import { ContactCard } from '@/components/molecules/ContactCard'
import { InlineCTA } from '@/components/molecules/InlineCTA'

import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop } = useViewport()
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container pt-[24px] md:pt-[40px]'>
          <PageHeader
            hasSearch
            heading='Written by Tesla Owners <br />for Tesla Owners'
            description='Search through over 120 guides'
            headingClassName='text-N-800'
            descriptionClassName='text-N-600'
            btnProps={{
              onClick: (e: any) => {},
              children: 'Search',
              appearance: 'primary',
            }}
            inputProps={{
              onChange: (e: any) => {},
              placeholder: 'Need some help? Search guides to find out',
              defaultValue: '',
              size: 'lg',
            }}
          />
        </div>

        {/* Main div with all the content */}
        <div className='container py-[48px] md:py-[80px]'>
          <h3 className='pb-[24px] text-h3 font-700 text-N-800 md:pb-[40px]'>About the car</h3>

          <div className='flex flex-col lg:flex-row lg:gap-[48px]'>
            {/* Article list */}
            <div className='article_list flex flex-col gap-[24px] md:gap-[46px]'>
              {(articleSearchResultA || []).map((item: any, index: number) => (
                <Link href={item?.permalink} passHref key={index}>
                  <ArticleCard data={item} className='w-full items-center md:!gap-[64px]' />
                </Link>
              ))}

              <div className='lg::py-[80px] py-[40px]'>
                <InlineCTA
                  heading='Do you have the expertise?  Share your knowledge!'
                  btnProps={{
                    children: 'Submit an article',
                    onClick: () => {},
                  }}
                />
              </div>
              <div className='article_list flex flex-col gap-[24px] md:gap-[46px]'>
                {(articleSearchResultB || []).map((item: any, index: number) => (
                  <Link href={item?.permalink} passHref key={index}>
                    <ArticleCard data={item} className='w-full items-center md:!gap-[64px]' />
                  </Link>
                ))}
              </div>
              <div className='w-full max-w-[784px] pt-[24px] md:pt-[80px]'>
                <Pagination />
              </div>
            </div>

            {/* Right side section with quick links */}
            <div className='flex flex-col gap-[40px] pt-[48px] md:pt-[80px]'>
              <div className='md:flex lg:flex-col lg:gap-[40px]'>
                <div className='most-accessed'>
                  <p className='text-h4 font-600 text-N-800'>Most Accessed...</p>
                  <ul className='flex flex-col gap-[8px] pt-[16px]'>
                    {(articleList || []).map(({ id, text, link }: any, index: number) => (
                      <li key={id || index}>
                        <a href={link} className='text-h5 font-500 text-N-600  hover:text-B-500'>
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className='flex items-center gap-[4px] pt-[16px] text-B-500'>
                    <a href='#' className='text-base font-600 text-B-500 hover:text-B-600'>
                      See all most accessed (30)
                    </a>
                    <span>
                      <ArrowRight size={20} />
                    </span>
                  </p>
                </div>
                <div className='most-usefull'>
                  <p className='text-h4 font-600 text-N-800'>Most Usefull...</p>
                  <ul className='flex flex-col gap-[8px] pt-[16px]'>
                    {(articleList || []).map(({ id, text, link }: any, index: number) => (
                      <li key={id || index}>
                        <a href={link} className='text-h5 font-500 text-N-600  hover:text-B-500'>
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className='flex items-center gap-[4px] pt-[16px] text-B-500'>
                    <a href='#' className='text-base font-600 text-B-500 hover:text-B-600'>
                      See all most usefull (25)
                    </a>
                    <span>
                      <ArrowRight size={20} />
                    </span>
                  </p>
                </div>
              </div>
              <div className='contact-card'>
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
                    onClick: () => {},
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
