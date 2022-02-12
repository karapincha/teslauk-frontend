import React, { FC } from 'react'
import CN from 'classnames'
import ReactTooltip from 'react-tooltip'

export interface ToolTipProps {
  [x: string]: any
  children?: any
  id: string
  size?: 'default' | 'lg'
}

export const ToolTip: FC<ToolTipProps> = ({
  arrowColor,
  children,
  className,
  clickable,
  effect,
  html,
  id,
  insecure,
  size,
  ...restProps
}: ToolTipProps) => {
  const ToolTipClasses = CN(
    `tool-tip !bg-N-800 !text-white !py-[2px] !px-[16px] !text-sans !text-sm`,
    className,
    {
      '!rounded-[8px]': size === 'lg',
      '!rounded-[24px]': size === 'default',
    }
  )

  return (
    <ReactTooltip
      id={id}
      arrowColor={arrowColor || '#040D1F'}
      className={ToolTipClasses}
      clickable={clickable || true}
      effect={effect || 'solid'}
      html={html || true}
      insecure={insecure || true}
      {...restProps}>
      {children}
    </ReactTooltip>
  )
}

ToolTip.defaultProps = {
  size: 'default',
}

export default ToolTip
