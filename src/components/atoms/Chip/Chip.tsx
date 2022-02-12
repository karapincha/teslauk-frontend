import React, { FC, ReactNode } from 'react'
import { ArrowRight } from 'react-feather'
import CN from 'classnames'

import { ToolTip } from '@/components/atoms/ToolTip'

export interface ChipProps {
  [x: string]: any
  hasTooltip?: boolean
  icon?: ReactNode
  isActive?: boolean
  label: string
  labelClassName?: string
  onClick?: any
}

export const Chip: FC<ChipProps> = ({
  className,
  hasTooltip,
  icon,
  isActive,
  label,
  labelClassName,
  onClick,
  ...restProps
}: ChipProps) => {
  const chipTextColor = isActive ? 'text-white' : 'text-N-800'

  const ChipClasses = CN(
    `chip flex items-center h-[48px] py-[8px] px-[16px] rounded-[4px] w-full ease-in-out duration-100 group flex-wrap`,
    className,
    {
      /* Background Color */
      'bg-white hover:bg-N-50': !isActive,
      'bg-B-500': isActive,

      /* onClick */
      'cursor-pointer': onClick,
    }
  )

  return (
    <div
      className={ChipClasses}
      {...restProps}
      onClick={onClick}
      data-tip
      data-for={hasTooltip && label}>
      {icon && (
        <span
          className={CN(
            'chip__icon flex items-center justify-center w-[28px] h-full flex-shrink-0',
            chipTextColor
          )}>
          {icon}
        </span>
      )}

      <span
        className={CN(
          'text-md chip__label font-500 truncate overflow-hidden pl-[4px] pr-[12px] w-full max-w-[calc(100%-48px)]',
          chipTextColor,
          labelClassName
        )}>
        {label}
      </span>

      {onClick && (
        <ArrowRight
          size={16}
          className={CN(
            'ml-auto translate-x-[-12px] opacity-0 group-hover:translate-x-[0px] ease-in-out duration-100 group-hover:opacity-100 flex items-center flex-shrink-0',
            chipTextColor
          )}
        />
      )}

      <ToolTip id={label}>{label}</ToolTip>
    </div>
  )
}

Chip.defaultProps = {
  hasTooltip: true,
}

export default Chip
