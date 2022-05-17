import React, { FC, ReactNode } from 'react'
import { X } from 'react-feather'
import CN from 'classnames'
export interface PillProps {
  [x: string]: any
  children?: ReactNode | string | number | undefined
  className?: string | undefined
  isActive?: boolean
  onClick?: any
  onClose?: any
  size?: 'default' | 'sm' | 'md' | 'lg' | undefined
  iconBefore?: ReactNode | string | number
  iconAfter?: ReactNode | string | number
}

export const Pill: FC<PillProps> = (
  {
    children,
    className,
    isActive,
    onClick,
    onClose,
    size,
    iconBefore,
    iconAfter,
    ...restProps
  }: PillProps,
  ref: any
) => {
  /* Background color*/
  const pillBGColor = CN({
    'bg-A-200 hover:bg-A-300': isActive,
    'bg-N-100 hover:bg-N-200': !isActive,
  })

  /* Size*/
  const pillTextSize = (size === 'default' && 'text-base') || (size === 'md' && 'text-sm')

  /* General */
  const PillClasses = CN('pill', className, {
    /* Common */
    'rounded-full font-600 text-white flex items-center cursor-pointer': true,

    /* Sizing */
    'px-[16px] h-[44px] flex items-center': size === 'default',
    'px-[16px] h-[28px] flex items-center': size === 'md',
    'px-[12px] h-[24px] flex items-center': size === 'sm',
  })

  return (
    <div
      className={CN('pill', pillBGColor, pillTextSize, PillClasses)}
      onClick={onClick}
      {...restProps}>
      {iconBefore && <div className={CN('pr-[4px]')}>{iconBefore}</div>}
      <span>{children}</span>
      {iconAfter && <div className={CN('pl-[4px]')}>{iconAfter}</div>}

      {onClose && (
        <span onClick={onClose} className='pill__icon'>
          <X size={16} />
        </span>
      )}
    </div>
  )
}

Pill.defaultProps = {
  children: 'Pill',
  isActive: false,
  onClick: undefined,
  onClose: undefined,
  size: 'default',
}

export default Pill
