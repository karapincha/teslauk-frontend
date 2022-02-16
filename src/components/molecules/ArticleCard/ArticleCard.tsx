import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

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
    `article-card flex justify-between w-full gap-[80px] group cursor-pointer`,
    className
  )
  const { tags, heading, excerpt, image } = data

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
        <h2 className='mb-[8px] text-h5 font-500 group-hover:text-B-500'>{heading}</h2>
        <p className='text-N-600 text-md' dangerouslySetInnerHTML={{ __html: excerpt || '' }} />
      </div>

      {image && (
        <div className='flex h-[136px] w-[200px] flex-shrink-0 overflow-hidden rounded-[6px]'>
          <img src={image} width={200} height={136} className='object-cover object-center' />
        </div>
      )}
    </div>
  )
}

ArticleCard.defaultProps = {}

export default ArticleCard
