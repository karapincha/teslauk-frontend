import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { Users } from 'react-feather'
import { Facebook, Instagram, Twitter } from '@/icons'
import Link from 'next/link'

export interface RegionDetailsHeaderProps {
  [x: string]: any
}

export const RegionDetailsHeader: FC<RegionDetailsHeaderProps> = ({
  className,
  region,
  ...restProps
}: RegionDetailsHeaderProps) => {
  const RegionDetailsHeaderClasses = CN(
    `region-details-header flex flex-col-reverse lg:flex-row gap-[40px] md:gap-[48px] rounded-[8px] bg-white px-[16px] lg:px-[56px] py-[60px] shadow-card-shadow`,
    className
  )
  const { pageRegion } = region || {}
  const { description, organisers, regionSpecificSocialMedia, pageStaticSidebar } = pageRegion || {}

  return (
    <div className={RegionDetailsHeaderClasses} {...restProps}>
      <div className='w-full lg:w-[416px]'>
        <h3 className='text-h3 font-700 text-N-800'>{region?.title}</h3>
        <div
          className='pt-[28px] text-md font-400 text-N-600'
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />

        <div className='flex items-center gap-[8px] pt-[28px]'>
          <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
            <Users size={16} />
          </div>
          <div className='text-md font-500 text-N-600'>
            Organisers -{' '}
            {organisers?.map(({ title, slug }: any, index: number) => {
              return (
                <span key={slug || index}>
                  {title}
                  {index + 1 !== organisers?.length && ', '}
                </span>
              )
            })}
          </div>
        </div>

        <div className='pt-[20px]'>
          <Link href='#contact'>
            <Button appearance='secondary' className='w-full lg:w-[unset]' size='sm'>
              Contact Organiser(s)
            </Button>
          </Link>
        </div>

        <div className='flex flex-col gap-[20px] pt-[20px]'>
          <p className='text-md font-600 text-N-600'>Join the discussions on social media</p>
          <div className='flex gap-[20px] text-N-500'>
            <Link
              href={
                regionSpecificSocialMedia?.facebook || 'https://www.facebook.com/TeslaOwnersUK'
              }>
              <a target='_blank'>
                <Facebook />
              </a>
            </Link>

            <Link href={regionSpecificSocialMedia?.twitter || 'https://twitter.com/TeslaOwnersUK'}>
              <a target='_blank'>
                <Twitter />
              </a>
            </Link>

            <Link
              href={
                regionSpecificSocialMedia?.instagram || 'https://www.instagram.com/teslaownersuk/'
              }>
              <a target='_blank'>
                <Instagram />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className='h-[203px] w-full lg:h-[409px] lg:w-[624px]'>
        <img
          src={
            region?.pageStaticSidebar?.banner?.mediaItemUrl ||
            'https://images.unsplash.com/photo-1617704548623-340376564e68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
          }
          alt={region?.title}
          className='h-full w-full rounded-[8px] object-cover object-center'
        />
      </div>
    </div>
  )
}

RegionDetailsHeader.defaultProps = {}

export default RegionDetailsHeader
