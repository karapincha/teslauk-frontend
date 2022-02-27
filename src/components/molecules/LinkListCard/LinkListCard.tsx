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
  headingClassName?: string
  textClassName?: string
  iconClassName?: string
}

export const LinkListCard: FC<LinkListCardProps> = ({
  className,
  heading,
  link,
  articleCount,
  list,
  headingClassName,
  textClassName,
  iconClassName,
  ...restProps
}: LinkListCardProps) => {
  const LinkListCardClasses = CN(
    `list-card break-inside bg-N-50 rounded-[12px] py-[40px] px-[32px] text-N-800 flex flex-col gap-[24px]`,
    className
  )

  return (
    <div className={LinkListCardClasses} {...restProps}>
      <h4 className={CN('list-card__heading text-h4 font-500 text-N-800', headingClassName)}>
        {heading}
      </h4>

      <ul className='list-card__list flex flex-col gap-[8px]'>
        {(list || []).map(({ id, textIcon, text }: any, index: number) => {
          return (
            <li className='flex items-center gap-[8px] text-N-400' key={id || index}>
              {textIcon && <span className={CN('flex', iconClassName)}>{textIcon}</span>}

              <a
                className={CN(
                  'cursor-pointer truncate text-base font-400 text-N-700 hover:text-B-500',
                  textClassName
                )}>
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
