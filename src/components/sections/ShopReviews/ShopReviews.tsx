import React, { FC } from 'react'
import CN from 'classnames'

export interface ShopReviewsProps {
  [x: string]: any
}

export const ShopReviews: FC<ShopReviewsProps> = ({
  className,
  ...restProps
}: ShopReviewsProps) => {
  const ShopReviewsClasses = CN(`shop-reviews`, className)

  return (
    <div className={ShopReviewsClasses} {...restProps}>
      shop-reviews is working...
    </div>
  )
}

ShopReviews.defaultProps = {}

export default ShopReviews
