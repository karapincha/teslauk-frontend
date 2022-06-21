import React, { FC } from 'react'
import CN from 'classnames'
import { ArrowRight } from 'react-feather'
import { Button } from '@/components/atoms'
import Link from 'next/link'
import { FileText, Mail } from 'react-feather'

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
    `list-card break-inside bg-N-50 rounded-[12px] py-[24px] md:py-[24px] lg:py-[40px] px-[24px] text-N-800 flex flex-col gap-[24px]`,
    className
  )

  return (
    <div className={LinkListCardClasses} {...restProps}>
      <h4 className={CN('list-card__heading text-h5 font-500 text-N-800', headingClassName)}>
        {heading}
      </h4>

      <ul className='list-card__list flex flex-col gap-[12px]'>
        {(list || []).map(({ id, slug, title }: any, index: number) => {
          return (
            <li className='flex items-center gap-[8px] text-N-400' key={id || index}>
              <span className={CN('flex flex-shrink-0', iconClassName)}>
                <FileText size={20} />
              </span>

              <Link href={`/guides/${slug}`}>
                <a
                  className={CN(
                    'cursor-pointer truncate text-base font-400 text-N-700 hover:text-B-500',
                    textClassName
                  )}>
                  {title}
                </a>
              </Link>
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
