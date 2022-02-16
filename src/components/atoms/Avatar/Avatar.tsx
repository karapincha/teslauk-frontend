import React, { FC } from 'react'
import CN from 'classnames'

export interface AvatarProps {
  [x: string]: any
  image?: string
  onClick?: any
  size?: 'sm' | 'md' | 'lg'
}

export const Avatar: FC<AvatarProps> = ({
  className,
  image,
  onClick,
  size,
  ...restProps
}: AvatarProps) => {
  const AvatarClasses = CN(`avatar flex`, className, {})

  return (
    <div className={AvatarClasses} {...restProps}>
      <img
        src={image}
        onClick={onClick}
        className={CN('rounded-[50px]', {
          'h-[76px] w-[76px]': size === 'lg',
          'h-[56px] w-[56px]': size === 'md',
          'h-[40px] w-[40px]': size === 'sm',
        })}
      />
    </div>
  )
}

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
