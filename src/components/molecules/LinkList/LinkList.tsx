import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

export interface LinkListProps {
  [x: string]: any
  direction?: 'vertical' | 'horizontal'
  list?: any[]
}

export const LinkList: FC<LinkListProps> = ({
  className,
  direction,
  list,
  ...restProps
}: LinkListProps) => {
  const LinkListClasses = CN(`link-list`, className, {})

  const DirectionClassName =
    (direction === 'horizontal' && 'flex flex-row') || (direction === 'vertical' && 'flex flex-col')

  return (
    <div className={LinkListClasses} {...restProps}>
      <ul className={CN('link-list__items', DirectionClassName)}>
        {(list || []).map(({ id, url, label }, index) => {
          return (
            <li
              className='mb-[16px] cursor-pointer text-base text-N-600 hover:text-B-500'
              key={id || index}>
              <Link href={url || ''}>
                <a>{label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

LinkList.defaultProps = {}

export default LinkList
