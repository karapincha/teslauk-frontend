import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PageHeader, ArticleCard, Pagination } from '@/components/molecules'
import { searchResult } from '@/dummy-data/search-result'
import { Common as CommonLayout } from '@/components/layouts'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex pb-[24px] md:pb-0'>
          <PageHeader
            hasSearch
            heading='Written by Tesla Owners <br />for Tesla Owners'
            description='Search through over 120 guides'
            headingClassName='text-N-800'
            descriptionClassName='text-N-600'
            btnProps={{
              onClick: (e: any) => console.log(e),
              children: 'Search',
              appearance: 'primary',
            }}
            inputProps={{
              onChange: (e: any) => console.log(e.target.value),
              placeholder: 'Search your question here?',
              defaultValue: 'Tesla',
              size: 'lg',
            }}
          />
        </div>

        <div className='container flex flex-col pt-[24px] pb-[40px] md:py-[80px]'>
          <div className='mx-auto flex w-full max-w-[784px] flex-col'>
            <div className='lg::mb-[48px] mb-[24px] text-h5 text-N-700 md:mb-[40px]'>
              Results <span className='font-500 text-N-800'>1-10</span> of{' '}
              <span className='font-500 text-N-800'>57</span> search results for{' '}
              <span className='font-500 text-B-500'>“Tesla”</span>
            </div>

            <div className='flex flex-col gap-[24px] md:gap-[32px]'>
              {(searchResult || []).map((item: any, index: number) => (
                <Link href={item?.permalink} passHref key={index}>
                  <ArticleCard data={item} />
                </Link>
              ))}
            </div>
          </div>

          <div className='mx-auto w-full max-w-[784px] pt-[40px]'>
            <Pagination />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Page
