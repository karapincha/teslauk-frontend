import React, { FC } from 'react'
import CN from 'classnames'
import { ArrowRight } from 'react-feather'

export interface LinkListCardProps {
  [x: string]: any
  link?: string
  heading?: string
  articleCount?: string | number
  list?: any[]
}

export const LinkListCard: FC<LinkListCardProps> = ({
  className,
  heading,
  link,
  articleCount,
  list,
  ...restProps
}: LinkListCardProps) => {
  const LinkListCardClasses = CN(`list-card`, className, {
    'bg-N-50 rounded-[20px] py-[40px] px-[32px] text-N-800': true,
  })

  return (
    <div className={LinkListCardClasses} {...restProps}>
      <h4 className='lis-card__heading mb-[24px] text-N-800 text-h4 font-500'>{heading}</h4>
      <ul className='list-card__list'>
        {(list || []).map(({ id, textIcon, text }: any, index: number) => {
          return (
            <li className='mb-[16px] flex text-N-400' key={id || index}>
              {textIcon}{' '}
              <a className='ml-[12px] cursor-pointer text-base font-500 text-N-800 hover:text-B-500'>{text}</a>
            </li>
          )
        })}
      </ul>

      {articleCount && (
        <span className='flex items-center cursor-pointer list-card__link pt-[24px]'>
          <a className='mr-[4px] text-base font-600 !text-B-500' href={link}>
            See all {articleCount} articles
          </a>
          <ArrowRight className='text-B-500' size={20} />
        </span>
      )}
    </div>
  )
}

LinkListCard.defaultProps = {}

export default LinkListCard
