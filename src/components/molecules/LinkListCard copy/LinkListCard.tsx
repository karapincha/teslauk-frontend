import React, { FC } from 'react'
import CN from 'classnames'
import { ArrowRight } from 'react-feather'
import { linkListCardList } from '@/dummy-data/link-list-card-list'

export interface LinkListCardProps {
  [x: string]: any
  link: string
  heading: string
  articleCount: string | number
}

export const LinkListCard: FC<LinkListCardProps> = ({
  className,
  heading,
  link,
  articleCount,
  ...restProps
}: LinkListCardProps) => {
  const LinkListCardClasses = CN(`list-card`, className, {
    'bg-N-50 rounded-[20px] py-[40px] px-[32px] text-N-800': true,
  })


  return (
    <div className={LinkListCardClasses} {...restProps}>
      <h4 className='lis-card__heading text-h4 font-500 mb-[24px]'>{heading}</h4>
      <ul className='list-card__list pb-[24px]'>
        {linkListCardList.map(({ id, textIcon, text }, index) => {
          return (
            <li className='flex mb-[16px]' key={id || index}>
              {textIcon} <a className='ml-[12px] text-base font-500 cursor-pointer hover:text-B-500'>{text}</a>
            </li>
          )
        })}
      </ul>

      <span className='flex items-center cursor-pointer list-card__link'>
        <a className='text-base !text-B-500 font-600 mr-[4px]' href={link}>
          See all {articleCount} articles
        </a>
        <ArrowRight className='text-B-500' size={20} />
      </span>
    </div>
  )
}

LinkListCard.defaultProps = {}

export default LinkListCard
