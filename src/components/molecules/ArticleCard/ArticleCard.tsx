import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { useViewport } from '@/utils'

export interface ArticleCardProps {
  [x: string]: any
  data: { tags?: any[]; heading?: string; excerpt?: string; image?: string }
}

export const ArticleCard: FC<ArticleCardProps> = ({
  className,
  data,
  ...restProps
}: ArticleCardProps) => {
  const ArticleCardClasses = CN(
    `article-card flex md:flex-row flex-col-reverse items-center justify-between w-full gap-[24px] md:gap-[32px] lg:gap-[80px] group cursor-pointer md:items-end`,
    className
  )
  const { tags, heading, excerpt, image } = data
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={ArticleCardClasses} {...restProps}>
      <div className='flex flex-col'>
        <div className='mb-[4px] flex items-center gap-[8px]'>
          <i className='ri-price-tag-3-line inline-flex text-lg text-N-600' />
          <ul className='group flex items-center gap-[8px] text-sm font-500 uppercase'>
            {(tags || []).map(({ id, label, url }: any, index: number) => (
              <li className='after:ml-[2px] after:content-[","] last:after:content-[""]'>
                <Link href={url} key={id || index}>
                  <a className='text-N-600'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h2 className='mb-[8px] text-h4 font-600 group-hover:text-B-500 lg:text-h5 lg:font-500'>
          {heading}
        </h2>
        <p className='text-md text-N-600' dangerouslySetInnerHTML={{ __html: excerpt || '' }} />
      </div>

      {image && (
        <div className='flex h-[232px] w-[343px] flex-shrink-0 overflow-hidden rounded-[6px] md:h-[136px] md:w-[200px]'>
          <img
            src={image}
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
