import React, { FC } from 'react'
import CN from 'classnames'

export interface BadgeProps {
  [x: string]: any
  appearance?: 'error' | 'success' | 'warning' | 'info' | 'default' | 'neutral' | 'brand'
  children?: React.ReactNode | string | number | null
  onClick?: any
  size?: 'sm' | 'default'
}

export const Badge: FC<BadgeProps> = ({
  appearance,
  children,
  className,
  onClick,
  size,
  isHover,
  isSelected,
  iconAfter,
  ...restProps
}: BadgeProps) => {
  const BadgeClasses = CN(
    `badge rounded-[4px] flex gap-[4px] items-center justify-center`,
    className,
    {
      'bg-R-10 text-R-600': appearance === 'error',
      'bg-G-10 text-G-600': appearance === 'success',
      'bg-A-10 text-A-700': appearance === 'warning',
      'bg-B-10 text-B-700': appearance === 'info',
      'bg-N-200 text-N-700': appearance === 'neutral',
      'bg-B-10 text-B-500': appearance === 'brand',
      'bg-N-200 text-N-700 hover:bg-N-300 hover:text-N-800 hover:cursor-pointer':
        appearance === 'neutral' && isHover,
      '!bg-R-50 !text-R-700': appearance === 'neutral' && isSelected,
      'bg-N-50 text-N-700': appearance === 'default' || !appearance,
      'cursor-pointer': onClick,

      /* Badge sizes */
      'px-[10px] text-xs font-500 h-[20px]': size === 'sm',
      'px-[12px] text-sm font-500 h-[24px]': size === 'default',

      '!pr-[0]': iconAfter,
    }
  )

  return (
    <div className={BadgeClasses} onClick={onClick} {...restProps}>
      {children && <span>{children}</span>}
      {iconAfter && <span className='flex pl-[4px] pr-[8px]'>{iconAfter}</span>}
    </div>
  )
}

Badge.defaultProps = {
  appearance: 'default',
  size: 'default',
}

export default Badge
