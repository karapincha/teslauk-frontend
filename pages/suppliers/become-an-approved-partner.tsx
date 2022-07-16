import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Faq, QuickTestimonials } from '@/components/sections'
import { useRouter } from 'next/router'
import { PageHeaderVariant } from '@/components/molecules/PageHeaderVariant'
import { Button, TextField, Badge } from '@/components/atoms'
import { Pagination, SectionHeading, FeatureCard, MembershipCard } from '@/components/molecules'
import { ArrowRight, Search } from 'react-feather'
import { SearchSuppliers, SuppliersSearch } from '@/components/molecules'
import { supplierList } from '@/dummy-data/supplier-list'
import { useViewport } from '@/utils'
import parseHTML from 'html-react-parser'
import { useQuery, gql } from '@apollo/client'

import { getBlockTestimonial, getStaticPage } from '../../lib/graphql'
import Link from 'next/link'
import { Common as CommonLayout } from '@/components/layouts'
import CN from 'classnames'

const Page: NextPage = ({ page }: any) => {
  const router = useRouter()
  const { isMobile, isTablet, isDesktop } = useViewport()
  const { staticPage, testimonials, faq } = page

  return (
    <>
      <Head>
        <title>
          {page.title ? `${page.title} - Tesla Owners UK` : 'Become a partner - Tesla Owners UK'}
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <CommonLayout>
        <div className='container flex pb-[40px] md:pb-[60px]'>
          <PageHeaderVariant
            heading={staticPage?.staticPageHeader?.heading}
            image={staticPage?.staticPageHeader?.banner?.mediaItemUrl}
            description={staticPage?.staticPageHeader?.description}
            descriptionClassName='!mb-0'
            btnProps={{
              children: 'See partnership plans',
              onClick: (e: any) => {
                e.preventDefault()
                router.push('#partnership-plans')
              },
              appearance: 'primary',
            }}
          />
        </div>

        <div className='flex w-full bg-N-50 bg-cover bg-center bg-no-repeat py-[40px] md:py-[80px]'>
          <div className='container flex flex-col gap-[40px] md:gap-[80px]'>
            <SectionHeading
              overline={staticPage?.pageBecomeAnApprovedPartner?.benefits?.tag}
              heading={staticPage?.pageBecomeAnApprovedPartner?.benefits?.heading}
              headingClassName='!mb-0'
              align={'center'}
              className='mx-auto max-w-[472px]'
            />

            <div className='mx-auto grid w-full max-w-[992px] gap-y-[24px] gap-x-[80px] md:gap-y-[40px] lg:grid-cols-2'>
              {staticPage?.pageBecomeAnApprovedPartner?.benefits?.benefitsList?.map(
                ({ icon, description, name }: any, index: number) => {
                  return (
                    <FeatureCard
                      key={index}
                      isLarge
                      heading={name}
                      headingClassName='!text-base !leading-[1.5]'
                      description={description}
                      descriptionClassName='!text-sm !text-N-700'
                      icon={parseHTML(icon)}
                    />
                  )
                }
              )}
            </div>
          </div>
        </div>

        <div className='flex w-full py-[40px] md:py-[80px]' id='partnership-plans'>
          <div className='container flex flex-col gap-[40px] md:gap-[80px]'>
            <SectionHeading
              overline={staticPage?.pageBecomeAnApprovedPartner?.partnershipPlans?.overline}
              heading={staticPage?.pageBecomeAnApprovedPartner?.partnershipPlans?.heading}
              description={staticPage?.pageBecomeAnApprovedPartner?.partnershipPlans?.description}
              align={'center'}
            />

            <div className='mx-auto grid w-full gap-[20px] md:grid-cols-2 lg:grid-cols-4'>
              {staticPage?.pageBecomeAnApprovedPartner?.partnershipPlans?.plans?.map(
                ({ name, planUniqueId, price, benefits }: any, index: number) => {
                  return (
                    <div className='block' key={index}>
                      <MembershipCard
                        type='secondary'
                        heading={name}
                        headingClassName='!text-h5 !pb-[8px]'
                        price={price === 'CONTACT' ? 'Contact for price' : `£${price}`}
                        priceClassName={CN('!font-600', {
                          '!text-N-700 !text-base': price === 'CONTACT',
                          '!text-R-400': price !== 'CONTACT',
                        })}
                        list={benefits}
                        listClassName='!pt-[20px]'
                        listItemClassName='!text-sm'
                        ctaBtnText='Apply for this plan'
                        ctaBtnAppearance='primary'
                        onClickCtaBtn={() =>
                          router.push(`/forms/apply-for-partnership?info=${planUniqueId}`)
                        }
                        className='w-full flex-shrink-0'
                      />
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>

        <div className='flex w-full bg-N-50 bg-cover bg-center bg-no-repeat py-[40px] md:py-[80px]'>
          <div className='container'>
            <Faq className='mx-auto max-w-[992px]' list={faq?.faq?.faqList} />
          </div>
        </div>

        <QuickTestimonials
          data={testimonials?.blockTestimonials}
          className='py-[40px] md:py-[80px] lg:py-[80px]'
        />
      </CommonLayout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const data = await getStaticPage(
    'become-an-approved-partner',
    `pageBecomeAnApprovedPartner {
      benefits {
        benefitsList {
          description
          icon
          name
        }
        heading
        tag
        description
      }
      partnershipPlans {
        heading
        overline
        description
        plans {
          description
          footNote
          isFeatured
          isKeyPartner
          name
          price
          benefits {
            label
          }
          planUniqueId
        }
      }
    }`,
    `testimonials: block(id: "testimonials", idType: SLUG) {
      blockTestimonials {
        description
        heading
        primaryButtonText
        subHeading
        featuredTestimonial {
          ... on Testimonial {
            id
            title
            pageTestimonial {
              author
              role
              testimonial
              image {
                mediaItemUrl
              }
            }
          }
        }
      }
      slug
    }
    faq: staticPage(id: "become-an-approved-partner", idType: SLUG) {
      faq {
        faqList {
          answer
          question
        }
        faqOverline
        faqHeading
      }
    }`
  )

  return {
    props: {
      preview,
      page: data,
    },
    revalidate: 1,
  }
}

export default Page
