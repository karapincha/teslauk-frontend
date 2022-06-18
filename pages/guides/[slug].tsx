import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Chip } from '@/components/atoms'
import { LinkListCard } from '@/components/molecules'
import { Tag, ShoppingBag, ArrowRight } from 'react-feather'
import { ArticleViewTopic } from '@/components/molecules/ArticleViewTopic'
import { InlineCTA } from '@/components/molecules/InlineCTA'
import { articleList } from '@/dummy-data/article-list'
import { ContactCard } from '@/components/molecules/ContactCard'
import { useViewport } from '@/utils'
import { getAllGuidesWithSlug, getGuide, GUIDES_CATEGORIES } from '../../lib/graphql'
import { useQuery, gql } from '@apollo/client'

import parse from 'html-react-parser'

const Page: NextPage = ({ guide, guideCategories }: any) => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()

  const { data: categories, loading, error, refetch } = useQuery(GUIDES_CATEGORIES)

  useEffect(() => {
    console.log(categories)
  }, [categories])

  const renderCTA = () => {
    return (
      <div className='flex md:w-full lg:w-[784px]'>
        <InlineCTA
          heading='Do you have the expertise? Share your knowledge!'
          btnProps={{
            size: 'lg',
            children: 'Submit an article',
            onClick: () => {
              console.log('Clicked')
            },
          }}
        />
      </div>
    )
  }

  const renderProducts = () => {
    return (
      <div className='amazon-products not-prose relative left-[-104px] w-[calc(104px+100%)] py-[32px]'>
        <LinkListCard
          heading='Products you may like on Amazon'
          headingClassName='!text-sm !text-N-600 !font-500'
          textClassName='!text-sm !text-N-700 !font-600 !text-overflaw-[unset] whitespace-normal'
          iconClassName='text-B-500'
          list={[
            {
              id: 0,
              textIcon: <ShoppingBag size={20} />,
              text: 'Millaissolutions Car Detailing Valeters Wash and Rinse Two Bucket System - 20 litre Buckets **LIMITED TIME - NOW SUPPLIED WITH SCATCHSHIELD GUARDS **',
            },
            {
              id: 1,
              textIcon: <ShoppingBag size={20} />,
              text: 'Set of 2 Buckets and Grit Guards, Premium Quality, Prevent Swirls and Scratches when Washing Your Car, 20 Litre Buckets with Lids',
            },
            {
              id: 2,
              textIcon: <ShoppingBag size={20} />,
              text: 'AUTO RAE-CHEM GRIT SHIELD & HEAVY DUTY 20L BUCKET WHITE - For 2 Bucket Car Wash Method + FREE SHAMPOO + WASH MIT + MICROFIBRE TOWELÎ',
            },
          ]}
        />
      </div>
    )
  }

  function flatMap(array: any, fn: any) {
    let result: any = []
    for (var i = 0; i < array.length; i++) {
      var mapping = fn(array[i])
      result = result.concat(mapping)
    }
    return result
  }

  const prepareGuide = () => {
    if (guide?.content) {
      const prep = parse(guide?.content)

      const result = flatMap(guide?.content?.split('[AMAZON]'), function (part: any) {
        return [part, <div>{renderProducts()}</div>]
      })

      result.pop()

      const processed = result?.map((item: any, index: number) => {
        if (item && typeof item === 'string') {
          return parse(item)
        } else {
          return item
        }
      })

      return processed
    }
  }

  return (
    <>
      <Head>
        <title>{guide?.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='header-surface relative min-h-[358px] bg-[url(/images/004.svg)] bg-cover bg-no-repeat'>
        <div className='absolute bottom-0 h-[240px] w-full rounded-tl-[12px] rounded-tr-[12px] bg-white md:w-[75%] md:rounded-tl-none lg:bottom-0 lg:w-[60%]' />
        <div className='z-1 relative top-[116px]'>
          <ArticleViewTopic
            icon={<Tag size={16} />}
            tagText={guide?.guideCategories?.edges[0]?.node}
            heading={guide?.title}
            date={guide?.modified?.substring(0, guide?.modified?.indexOf('T'))}
            readingTime='1 min'
          />
        </div>
      </div>

      <div className='bg-white'>
        <div className='container flex flex-col lg:grid lg:grid-cols-[680px_367px] lg:gap-[150px]'>
          <div className='lg:pt-[48px]'>
            <div className='relative flex flex-col md:gap-0 lg:gap-[48px] lg:pl-[104px]'>
              <div className='hidden lg:absolute lg:top-[12px] lg:left-0 lg:flex lg:h-[4px] lg:w-[56px] lg:bg-B-500' />

              <article className='guide-content prose'>{prepareGuide()}</article>
            </div>

            <div className='py-[32px]'>{!isDesktop && renderCTA()}</div>
          </div>

          <div className='article-view-right-bar'>
            <div className='flex flex-col gap-[40px] pt-[40px] md:grid md:grid-cols-2 md:justify-between md:gap-[24px] lg:flex lg:flex-col lg:gap-[40px]'>
              <div className='article-view-categories'>
                <p className='text-base font-600 text-N-800 md:col-start-2 '>Categories</p>
                <div className='pt-[12px]'>
                  {categories?.guideCategories?.edges?.map(({ node }: any) => {
                    return (
                      <Chip
                        key={node?.slug}
                        className='mb-[16px]'
                        iconClassName='text-N-400'
                        label={node?.name}
                        icon={<Tag size={20} />}
                      />
                    )
                  })}
                </div>
              </div>

              <div className='most-accessed'>
                <p className='text-base font-600 text-N-800'>Most Usefull</p>
                <ul className='flex flex-col gap-[8px] pt-[16px]'>
                  {(articleList || []).map(({ id, text, link }: any, index: number) => (
                    <li key={id || index}>
                      <a href={link} className='font-500 text-N-800  hover:text-B-500 text-md'>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className='flex items-center gap-[4px] pt-[32px] text-B-500'>
                  <a href='#' className='text-md font-600 text-B-500 hover:text-B-600'>
                    See all most accessed (30)
                  </a>
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </p>
              </div>
            </div>
            <div className='contact-card pt-[32px] lg:pt-[48px]'>
              <ContactCard
                description='Remember modifying your vehicle may invalidate part of 
                your vehicle’s warranty.<br/>
                Therefore,  be careful and check with Tesla if unsure. Also any modifications will most likely need to be 
                OK’d with your car insurance company.<br/><br/>
                To the best of our knowledge, these guides are correct and factual.
                However we take no responsibility if something does go wrong.<br/><br/>
                If you spot a mistake please ensure you alert us.'
                btnProps={{
                  label: 'Contact Us',
                  onClick: () => {
                    console.log('Clicked')
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className='container pb-[100px]'>{isDesktop && renderCTA()}</div>
      </div>
    </>
  )
}

export async function getStaticProps({ params, preview = false, previewData }: any) {
  const data = await getGuide(params.slug || '')

  return {
    props: {
      preview,
      guide: data.guide,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const paths = await getAllGuidesWithSlug()

  return {
    paths: paths?.edges.map(({ node }: any) => `/guides/${node.slug}`) || [],
    fallback: true,
  }
}

export default Page
