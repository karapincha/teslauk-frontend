import React, { FC } from 'react'
import CN from 'classnames'

export interface ListCardProps {
  [x: string]: any
  list?: ListItemProps[]
}

export interface ListItemProps {
  id?: number | string
  label?: string
  link?: string
  isActive?: boolean
}

export const ListCard: FC<ListCardProps> = ({ className, list, ...restProps }: ListCardProps) => {
  const ListCardClasses = CN(`list-card w-full`, className, {})

  return (
    <div className={ListCardClasses} {...restProps}>
      <ul className='group flex flex-col border-b border-N-200 text-md text-N-800'>
        {(list || []).map(({ id, label, link, isActive }: any, index: number) => {
          return (
            <li
              className='flex items-center border-N-200 bg-N-50 py-[12px] group-first:border-t'
              key={id || index}>
              {link && (
                <a
                  className={CN(`list-card__item`, {
                    'text-N-800': !isActive,
                    'text-B-500': isActive,
                  })}
                  href={link}>
                  {label}
                </a>
              )}

              {!link && <span>{label}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ListCard.defaultProps = {}

export default ListCard