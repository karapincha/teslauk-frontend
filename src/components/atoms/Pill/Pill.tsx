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
  size?: 'default' | 'sm' | 'lg' | undefined
}

export const Pill: FC<PillProps> = (
  {
    children,
    className,
    isActive,
    onClick,
    onClose,
    size,
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
  const pillTextSize =
    (size === 'default' && 'text-base') || (size === 'sm' && 'text-sm')

  /* General */
  const PillClasses = CN('pill', className, {
    /* Common */
    'rounded-[12px] font-500 flex items-center cursor-pointer': true,

    /* Sizing */
    'px-[16px] h-[44px] flex items-center': size === 'default',
    'px-[16px] h-[36px] flex items-center': size === 'sm',
  })

  return (
    <div
      className={CN('pill', pillBGColor, pillTextSize, PillClasses)}
      onClick={onClick}
      {...restProps}>
      <span>{children}</span>

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
