import React, { FC, ReactNode } from 'react'
import CN from 'classnames'
import { Clock, Tag } from 'react-feather'
import Link from 'next/link'

export interface ArticleViewTopicProps {
  [x: string]: any
  icon?: ReactNode | string
  tagText?: any
  heading?: string
  date?: string | number
  readingTime?: string
}

export const ArticleViewTopic: FC<ArticleViewTopicProps> = ({
  className,
  icon,
  tagText,
  heading,
  date,
  readingTime,
  ...restProps
}: ArticleViewTopicProps) => {
  const ArticleViewTopicClasses = CN(`article-view-topic container`, className)

  return (
    <div className={ArticleViewTopicClasses} {...restProps}>
      <Link href={`/guides/category/${tagText?.slug}`}>
        <a className='flex items-center gap-[12px] pt-[64px] pb-[8px] text-md font-600 text-N-500'>
          <span>{icon}</span>
          <p>{tagText?.name}</p>
        </a>
      </Link>

      <h1 className='text-h4 font-500 md:w-[70%] md:text-h3 md:font-700 lg:w-1/2 lg:text-h2 lg:font-700'>
        {heading}
      </h1>

      <div className='flex items-center gap-[16px] pt-[16px]'>
        <p className='text-md text-N-600'>
          Last modified: <span className='text-N-800'>{date}</span>
        </p>

        {readingTime && (
          <span className='flex items-center gap-[4px] text-N-500'>
            <Clock size={16} />
            <p className='text-md font-500'>{readingTime} read</p>
          </span>
        )}
      </div>
    </div>
  )
}

ArticleViewTopic.defaultProps = {}

export default ArticleViewTopic
