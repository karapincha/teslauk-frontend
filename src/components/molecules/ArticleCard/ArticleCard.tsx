import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { useViewport } from '@/utils'
import { Award, CheckCircle, Globe, Mail, MapPin, Phone, PhoneCall, Tag } from 'react-feather'

export interface ArticleCardProps {
  [x: string]: any
  data: any
}

export const ArticleCard: FC<ArticleCardProps> = ({
  className,
  data,
  tags,
  title,
  thumbnail,
  ...restProps
}: ArticleCardProps) => {
  const ArticleCardClasses = CN(
    `article-card flex md:flex-row flex-col-reverse w-full gap-[24px] md:gap-[32px] lg:gap-[80px] group`,
    className
  )
  const { pageGuide, slug } = data
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={ArticleCardClasses} {...restProps}>
      <div className='flex flex-col w-full'>
        {tags && tags?.length > 0 && (
          <div className='flex items-center gap-[8px] pb-[12px]'>
            <Tag className='flex' size={16} />

            <ul className='group flex flex-wrap items-center gap-x-[8px]'>
              {(tags || []).map(({ name, slug }: any, index: number) => (
                <li
                  key={index}
                  className='after:ml-[8px] after:text-N-500 after:content-["/"] last:after:content-[""]'>
                  <Link href={`/guides/category/${slug}`} key={slug || index}>
                    <a className='max-w-[348px] cursor-pointer text-sm font-600 text-N-500 hover:text-R-400'>
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='flex'>
          <Link href={`/guides/${slug}` || ''} passHref>
            <a className='mb-[8px] cursor-pointer text-h5 font-500 text-N-800 hover:text-B-400'>
              {title}
            </a>
          </Link>
        </div>

        <p
          className='text-md text-N-600'
          dangerouslySetInnerHTML={{ __html: pageGuide?.excerpt || '' }}
        />
      </div>

      {thumbnail && (
        <div className='flex h-[232px] w-[343px] flex-shrink-0 overflow-hidden rounded-[6px] md:h-[136px] md:w-[200px]'>
          <img
            src={thumbnail}
            width={(!isMobile && 200) || 343}
            height={(!isMobile && 136) || 232}
            className='object-cover object-center'
          />
        </div>
      )}
    </div>
  )
}

ArticleCard.defaultProps = {}

export default ArticleCard
