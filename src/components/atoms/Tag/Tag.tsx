import React, { FC, ReactNode } from 'react'
import CN from 'classnames'

export interface TagProps {
  [x: string]: any
  children?: ReactNode | string | number | undefined
  className?: string | undefined
  color?: string | number | undefined
  icon?: ReactNode | string | number | undefined
  onClick?: any
}

export const Tag: FC<TagProps> = ({
  children,
  className,
  color,
  icon,
  onClick,
  ...restProps
}: TagProps) => {
  const tagIconBGColor = CN({
    'bg-A-600': color === 'orange',
    'bg-G-400': color === 'green',
    'bg-P-800': color === 'purple',
    'bg-R-400': color === 'red',
  })

  const TagClasses = CN(`tag`, className, {
    /* Common */
    ' flex items-center cursor-pointer bg-white pl-[8px] rounded-tr-xl overflow-hidden':
      true,

    /* Text */
    'text-xs text-N-500 font-600': true,

    /* Sizing */
    'h-[24px]': true,
  })

  return (
    <div className={CN('tag', TagClasses)} onClick={onClick} {...restProps}>
      <span className='flex items-center h-full'>{children}</span>

      {icon && (
        <span
          className={CN(
            'tag__icon ml-[8px] px-[6px] h-full flex items-center text-white',
            tagIconBGColor
          )}>
          {icon}
        </span>
      )}
    </div>
  )
}

Tag.defaultProps = {
  children: 'Tag',
  color: undefined,
  icon: undefined,
  onClick: undefined,
}

export default Tag
