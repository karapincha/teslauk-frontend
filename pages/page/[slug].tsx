import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { PageHeader } from '@/components/molecules'
import { Button, Badge } from '@/components/atoms'
import { PageLock } from '@/components/molecules/PageLock'
import { Common as CommonLayout } from '@/components/layouts'

import { getAllStaticPagesWithSlug, getStaticPage } from '../../lib/graphql'

const Page: NextPage = ({ isServer, page }: any) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{`${page?.title} - Tesla Owners UK` || `Tesla Owners UK`}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex pt-[40px] pb-[24px]'>
          <div className='mx-auto flex w-full max-w-[782px] flex-col items-center gap-[40px] text-center'>
            <div className='flex w-full flex-col gap-[28px]'>
              <div className='flex justify-center'>
                <Badge>Tesla Owners UK Initiative</Badge>
              </div>
              <h1 className='text-h1'>{page?.title || '404'}</h1>
            </div>

            <div className='banner-image flex w-full'>
              {/* <img
                src={initiative?.pageInitiativeSidebar?.thumbnail?.mediaItemUrl}
                alt={initiative?.title}
                className='w-[100%] rounded-[8px]'
              /> */}
            </div>
          </div>
        </div>

        <div className='container flex flex-col'>
          <article className='prose mx-auto max-w-[782px] pt-[24px] md:pb-[80px]'>
            <div dangerouslySetInnerHTML={{ __html: page?.pageStatic?.content }} />
          </article>
        </div>
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ params, preview = false, previewData, req }: any) {
  const data = await getStaticPage(params.slug || '')

  return {
    props: {
      preview,
      page: data.staticPage,
      isServer: !!req,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths({ req }: any) {
  const allPages = await getAllStaticPagesWithSlug()

  return {
    paths: allPages?.edges.map(({ node }: any) => `/${node.slug}`) || [],
    fallback: true,
  }
}

export default Page
