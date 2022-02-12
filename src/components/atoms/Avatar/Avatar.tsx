import React, { FC } from 'react'
import CN from 'classnames'

export interface AvatarProps {
  [x: string]: any
  image?: string
  onClick?: any
  size?: 'sm' | 'md' | 'default'
}

export const Avatar: FC<AvatarProps> = ({
  className,
  image,
  onClick,
  size,
  ...restProps
}: AvatarProps) => {
  const AvatarClasses = CN(`avatar`, className, {})

  return (
    <div className={AvatarClasses} {...restProps}>
      <img
        src={image}
        onClick={onClick}
        className={CN({
          'w-[76px] h-[76px] rounded-[50px]': size === 'default',
          'w-[56px] h-[56px] rounded-[50px]': size === 'md',
          'w-[36px] h-[36px] rounded-[50px]': size === 'sm',
        })}
      />
    </div>
  )
}

Avatar.defaultProps = {
  size: 'default'
}

export default Avatar
