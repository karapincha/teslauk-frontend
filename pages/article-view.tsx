import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import { useRouter } from 'next/router'
import { Chip } from '@/components/atoms'
import { LinkListCard } from '@/components/molecules'
import { Tag, ShoppingBag, ArrowRight } from 'react-feather'
import { ArticleViewTopic } from '@/components/molecules/ArticleViewTopic'
import { InlineCTA } from '@/components/molecules/InlineCTA'
import { articleList } from '@/dummy-data/article-list'
import { ContactCard } from '@/components/molecules/ContactCard'
import { useViewport } from '@/utils'

const Home: NextPage = () => {
  const router = useRouter()
  const { isDesktop, isMobile, isTablet } = useViewport()

  const renderGraphic = () => {
    return (
      <div className='flex md:w-full lg:w-[784px]'>
        <InlineCTA
          heading='Do you have the experties? Share your knowledge!'
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

  return (
    <>
      <Head>
        <title>Karapincha UI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className='py-[24px]' />

      <div className='header-surface relative min-h-[358px] bg-[url(/images/004.svg)] bg-cover bg-no-repeat'>
        <div className='absolute bottom-0 h-[240px] w-full rounded-tr-[12px] bg-white md:w-[75%] lg:bottom-0 lg:w-[60%]' />
        <div className='z-1 relative top-[120px]'>
          <ArticleViewTopic
            icon={<Tag size={16} />}
            tagText='For new owners'
            heading='Must have accessories for your Tesla Model S'
            date='05/07/2021'
            readingTime='1 min'
          />
        </div>
      </div>

      <div className='container flex flex-col lg:grid lg:grid-cols-[680px_367px] lg:gap-[150px]'>
        <div className='lg:pt-[48px]'>
          <div className='flex md:gap-0 lg:gap-[48px]'>
            <div className='hidden lg:relative lg:top-[12px] lg:flex lg:h-[4px] lg:w-[56px] lg:bg-B-500' />
            <article className='prose'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum
                nunc. Quam nulla porttitor massa id neque. Feugiat in ante metus dictum. Dignissim
                diam quis enim lobortis. Sagittis orci a scelerisque purus semper. Tincidunt
                praesent semper feugiat nibh sed pulvinar proin gravida. Neque convallis a cras
                semper auctor neque vitae tempus. Amet volutpat consequat mauris nunc congue nisi
                vitae suscipit. Nunc sed augue lacus viverra vitae congue eu consequat ac. Sit amet
                consectetur adipiscing elit. Vel pharetra vel turpis nunc. Tempor orci dapibus
                ultrices in iaculis. Imperdiet sed euismod nisi porta lorem.
                <br />
                <br />
                Venenatis tellus in metus vulputate. Suscipit tellus mauris a diam maecenas. Dolor
                sit amet consectetur adipiscing elit. Egestas diam in arcu cursus euismod quis. Quis
                risus sed vulputate odio ut enim blandit volutpat. Tortor consequat id porta nibh
                venenatis. Nisi porta lorem mollis aliquam. Ac orci phasellus egestas tellus rutrum
                tellus. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Mi
                bibendum neque egestas congue quisque egestas diam. Tempor id eu nisl nunc mi ipsum
                faucibus vitae aliquet. Dui accumsan sit amet nulla facilisi morbi tempus. Laoreet
                id donec ultrices tincidunt arcu non. In ante metus dictum at tempor. Sodales neque
                sodales ut etiam sit amet nisl purus. Odio aenean sed adipiscing diam.
              </p>
            </article>
          </div>
          <div className='my-[32px] h-[186px] w-full md:h-[376px] md:w-full lg:my-[40px] lg:h-[368px] lg:w-[680px]'>
            <img
              className='h-full w-full rounded-[12px] object-cover object-center'
              src='https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            />
          </div>
          <article className='prose'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum nunc.
              Quam nulla porttitor massa id neque. Feugiat in ante metus dictum. Dignissim diam quis
              enim lobortis. Sagittis orci a scelerisque purus semper. Tincidunt praesent semper
              feugiat nibh sed pulvinar proin gravida. Neque convallis a cras semper auctor neque
              vitae tempus. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Nunc sed
              augue lacus viverra vitae congue eu consequat ac. Sit amet consectetur adipiscing
              elit. Vel pharetra vel turpis nunc. Tempor orci dapibus ultrices in iaculis. Imperdiet
              sed euismod nisi porta lorem.
            </p>
          </article>
          <div className='amazon-products py-[32px]'>
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
          <article className='prose'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum nunc.
              Quam nulla porttitor massa id neque. Feugiat in ante metus dictum. Dignissim diam quis
              enim lobortis. Sagittis orci a scelerisque purus semper. Tincidunt praesent semper
              feugiat nibh sed pulvinar proin gravida. Neque convallis a cras semper auctor neque
              vitae tempus. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Nunc sed
              augue lacus viverra vitae congue eu consequat ac. Sit amet consectetur adipiscing
              elit. Vel pharetra vel turpis nunc. Tempor orci dapibus ultrices in iaculis. Imperdiet
              sed euismod nisi porta lorem.
            </p>
          </article>
          <div className='my-[32px] h-[186px] w-full md:h-[376px] md:w-full lg:my-[40px] lg:h-[368px] lg:w-[680px]'>
            <img
              className='h-full w-full rounded-[12px] object-cover object-center'
              src='https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            />
          </div>
          <article className='prose'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum nunc.
              Quam nulla porttitor massa id neque. Feugiat in ante metus dictum. Dignissim diam quis
              enim lobortis. Sagittis orci a scelerisque purus semper. Tincidunt praesent semper
              feugiat nibh sed pulvinar proin gravida. Neque convallis a cras semper auctor neque
              vitae tempus. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Nunc sed
              augue lacus viverra vitae congue eu consequat ac. Sit amet consectetur adipiscing
              elit. Vel pharetra vel turpis nunc. Tempor orci dapibus ultrices in iaculis. Imperdiet
              sed euismod nisi porta lorem.
            </p>
          </article>
          <div className='py-[32px]'>{!isDesktop && renderGraphic()}</div>
        </div>

        <div className='article-view-right-bar'>
          <div className='flex flex-col md:grid md:grid-cols-2 md:justify-between md:gap-[24px] md:pt-[48px] lg:flex lg:flex-col'>
            <div className='article-view-categories mb-[32px] pt-[48px] md:pt-0 lg:mb-[48px] lg:pt-[56px]'>
              <p className='text-base font-600 text-N-600 md:col-start-2 '>Categories</p>
              <div className='cursor-pointer pt-[12px]'>
                <Chip
                  className='mb-[16px]'
                  iconClassName='text-N-400'
                  label='About the car'
                  icon={<Tag size={20} />}
                />
                <Chip
                  className='mb-[16px]'
                  iconClassName='text-N-400'
                  label='For new owners'
                  icon={<Tag size={20} />}
                />
                <Chip
                  className='mb-[16px]'
                  iconClassName='text-N-400'
                  label='Charging away from home'
                  icon={<Tag size={20} />}
                />
                <Chip
                  className='mb-[16px]'
                  iconClassName='text-N-400'
                  label='Upgrading, Modifying & Fixing'
                  icon={<Tag size={20} />}
                />
                <Chip
                  className='mb-[16px]'
                  iconClassName='text-N-400'
                  label='Fear, Uncertainty & Doubt'
                  icon={<Tag size={20} />}
                />
              </div>
            </div>

            <div className='most-accessed'>
              <p className='text-base font-600 text-N-600'>Most Accessed...</p>
              <ul className='flex flex-col gap-[8px] pt-[16px]'>
                {(articleList || []).map(({ id, text, link }: any, index: number) => (
                  <li key={id || index}>
                    <a href={link} className='text-base font-500 text-N-800  hover:text-B-500'>
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
                view: 'outline',
              }}
            />
          </div>
        </div>
      </div>
      <div className='container pb-[32px]'>{isDesktop && renderGraphic()}</div>

      <SupplierRibbon />
      <Footer />
    </>
  )
}

export default Home
