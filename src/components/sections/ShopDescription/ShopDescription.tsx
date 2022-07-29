import React, { FC } from 'react'
import CN from 'classnames'
import parseHtml from 'html-react-parser'

export interface ShopDescriptionProps {
  [x: string]: any
}

export const ShopDescription: FC<ShopDescriptionProps> = ({
  className,
  product,
  ...restProps
}: ShopDescriptionProps) => {
  const ShopDescriptionClasses = CN(
    `shop-description max-w-[100%] flex flex-col gap-[24px]`,
    className
  )

  const { pageProduct } = product

  return (
    <div className={ShopDescriptionClasses} {...restProps}>
      <article className='prose max-w-[100%]'>
        <ul>
          {pageProduct?.features?.map(({ feature }: any, index: number) => {
            return <li key={index}>{feature}</li>
          })}
        </ul>
      </article>
    </div>
  )
}

ShopDescription.defaultProps = {}

export default ShopDescription
