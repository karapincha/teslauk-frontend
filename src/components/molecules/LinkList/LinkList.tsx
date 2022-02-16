import React, { FC } from 'react'
import CN from 'classnames'

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
      {(list || []).map(({ id, onClick, linkText, wrapperComponent: Wrap }, index) => {
        return (
          <ul className={CN('link-list__items', DirectionClassName)}>
            <li
              className='mb-[16px] cursor-pointer text-base font-500 text-N-600 hover:text-B-500'
              key={id || index}>
              {Wrap && (
                <Wrap onClick={onClick}>
                  <a>{linkText}</a>
                </Wrap>
              )}

              {!Wrap && <a onClick={onClick}>{linkText}</a>}
            </li>
          </ul>
        )
      })}
    </div>
  )
}

LinkList.defaultProps = {}

export default LinkList
