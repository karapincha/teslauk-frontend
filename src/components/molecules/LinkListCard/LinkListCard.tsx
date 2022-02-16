import React, { FC } from 'react'
import CN from 'classnames'
import { ArrowRight } from 'react-feather'
import { Button } from '@/components/atoms'
import Link from 'next/link'

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
  const LinkListCardClasses = CN(
    `list-card break-inside bg-N-50 rounded-[12px] py-[40px] px-[32px] text-N-800 mb-[48px] flex flex-col gap-[24px]`,
    className
  )

  return (
    <div className={LinkListCardClasses} {...restProps}>
      <h4 className='lis-card__heading text-h4 font-500 text-N-800'>{heading}</h4>

      <ul className='list-card__list flex flex-col gap-[8px]'>
        {(list || []).map(({ id, textIcon, text }: any, index: number) => {
          return (
            <li className='flex items-center gap-[8px] text-N-400' key={id || index}>
              {textIcon && <span className='flex'>{textIcon}</span>}

              <a className='cursor-pointer truncate text-base font-400 text-N-700 hover:text-B-500'>
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      {articleCount && (
        <div className='block'>
          <Link href='/guides' passHref>
            <Button
              className='!text-B-500'
              iconAfter={<i className='ri-arrow-right-line text-lg' />}
              appearance='link'>
              {`See all ${articleCount} articles`}
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

LinkListCard.defaultProps = {}

export default LinkListCard
