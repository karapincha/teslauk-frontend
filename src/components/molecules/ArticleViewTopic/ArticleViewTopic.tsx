import React, { FC, ReactNode } from 'react'
import CN from 'classnames'
import { Clock, Tag } from 'react-feather'

export interface ArticleViewTopicProps {
  [x: string]: any
  icon?: ReactNode | string
  tagText?: string
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
  const ArticleViewTopicClasses = CN(
    `article-view-topic container`,
    className
  )

  return (
    <div className={ArticleViewTopicClasses} {...restProps}>
      <div className='flex items-center gap-[12px] pt-[64px] text-base font-600 text-N-500'>
        <span>{icon}</span>
        <p>{tagText}</p>
      </div>
      <h1 className='md:w-[70%] lg:w-1/2 text-h4 font-500 md:text-h3 md:font-700 lg:text-h2 lg:font-700'>{heading}</h1>
      <div className='flex items-center gap-[8px] pt-[16px]'>
        <p className='text-md text-N-600'>
          Last modified: <span className='text-N-800'>{date}</span>
        </p>
        <span className='flex items-center gap-[4px] text-N-500'>
          <Clock size={16} />
          <p className='text-md font-500'>{readingTime} read</p>
        </span>
      </div>
    </div>
  )
}

ArticleViewTopic.defaultProps = {}

export default ArticleViewTopic
