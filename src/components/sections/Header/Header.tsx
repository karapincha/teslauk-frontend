import React, { FC } from 'react'
import CN from 'classnames'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({
  className,
  ...restProps
}: HeaderProps) => {
  const HeaderClasses = CN(`header`, className, {})

  return (
    <div className={HeaderClasses} {...restProps}>
      header is working...
    </div>
  )
}

Header.defaultProps = {}

export default Header
