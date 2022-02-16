import React, { FC } from 'react'
import CN from 'classnames'
import { ArrowRight } from 'react-feather'
import { linkListCardList } from '@/dummy-data/link-list-card-list'

export interface LinkListCardProps {
  [x: string]: any
  link: string
  cardHeading: string
  articleCount: string | number
}

export const LinkListCard: FC<LinkListCardProps> = ({
  className,
  cardHeading,
  link,
  articleCount,
  ...restProps
}: LinkListCardProps) => {
  const LinkListCardClasses = CN(`list-card`, className, {
    'bg-N-50 rounded-[20px] py-[40px] px-[32px] text-N-800': true,
  })

  return (
    <div className={LinkListCardClasses} {...restProps}>
      <h4 className='lis-card__heading mb-[24px] text-h4 font-500'>{cardHeading}</h4>
      <ul className='list-card__list pb-[24px]'>
        {linkListCardList.map(({ id, textIcon, text }: any, index: number) => {
          return (
            <li className='mb-[16px] flex' key={id || index}>
              {textIcon}{' '}
              <a className='ml-[12px] cursor-pointer text-base font-500 hover:text-B-500'>{text}</a>
            </li>
          )
        })}
      </ul>

      <span className='list-card__link flex cursor-pointer items-center'>
        <a className='mr-[4px] text-base font-600 !text-B-500' href={link}>
          See all {articleCount} articles
        </a>
        <ArrowRight className='text-B-500' size={20} />
      </span>
    </div>
  )
}

LinkListCard.defaultProps = {}

export default LinkListCard
