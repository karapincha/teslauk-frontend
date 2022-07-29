import React, { FC } from 'react'
import CN from 'classnames'

export interface ShopReviewsProps {
  [x: string]: any
}

export const ShopReviews: FC<ShopReviewsProps> = ({
  className,
  product,
  ...restProps
}: ShopReviewsProps) => {
  const ShopReviewsClasses = CN(`shop-reviews max-w-[100%] flex flex-col gap-[24px]`, className)

  const { pageProduct } = product

  return (
    <div className={ShopReviewsClasses} {...restProps}>
      <article className='prose max-w-[100%]'>
        <div className='flex flex-col gap-[40px]'>
          {pageProduct?.reviews?.map(({ author, review, authorLink }: any, index: number) => {
            return (
              <figure key={index} className='m-0'>
                <blockquote cite={authorLink}>{review}</blockquote>
                <figcaption>
                  <a href={authorLink} target='_blank' className='text-N-600 no-underline'>
                    — {author}
                  </a>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </article>
    </div>
  )
}

ShopReviews.defaultProps = {}

export default ShopReviews
