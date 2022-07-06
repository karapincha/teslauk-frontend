import React, { FC } from 'react'
import CN from 'classnames'

export interface AvatarProps {
  [x: string]: any
  image?: string
  onClick?: any
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'full' | 'default'
}

export const Avatar: FC<AvatarProps> = ({
  className,
  image,
  onClick,
  size,
  rounded,
  ...restProps
}: AvatarProps) => {
  const AvatarClasses = CN(`avatar flex`, className, {})

  return (
    <div className={AvatarClasses} {...restProps}>
      <img
        src={image || '/images/avatar.png'}
        onClick={onClick}
        className={CN(
          'object-cover object-center',
          { 'rounded-[50px]': rounded === 'default', 'rounded-full': rounded === 'full' },
          {
            'h-[200px] w-[200px]': size === 'xl',
            'h-[76px] w-[76px]': size === 'lg',
            'h-[56px] w-[56px]': size === 'md',
            'h-[40px] w-[40px]': size === 'sm',
          }
        )}
      />
    </div>
  )
}

Avatar.defaultProps = {
  size: 'md',
  rounded: 'default',
}

export default Avatar
