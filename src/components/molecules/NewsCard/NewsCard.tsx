import React, { FC } from 'react'
import CN from 'classnames'

export interface NewsCardProps {
  [x: string]: any
}

export const NewsCard: FC<NewsCardProps> = ({
  className,
  ...restProps
}: NewsCardProps) => {
  const NewsCardClasses = CN(`news-card`, className)

  return (
    <div className={NewsCardClasses} {...restProps}>
      news-card is working...
    </div>
  )
}

NewsCard.defaultProps = {}

export default NewsCard
