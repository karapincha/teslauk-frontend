import React, { FC } from 'react'
import CN from 'classnames'
import { Badge, Tag } from '@/components/atoms'

export interface PlaceholderProductThumbnailProps {
  [x: string]: any
}

export const PlaceholderProductThumbnail: FC<PlaceholderProductThumbnailProps> = ({
  className,
  image,
  heading,
  price,
  shopName,
  stockQuantity,
  ...restProps
}: PlaceholderProductThumbnailProps) => {
  const PlaceholderProductThumbnailClasses = CN(
    `placeholder-card flex flex-col gap-[4px] group opacity-[0.9]`,
    className
  )

  return (
    <div className={PlaceholderProductThumbnailClasses} {...restProps}>
      <div className='relative flex h-[240px] w-full rounded-[8px] border border-dashed border-N-200 bg-N-50/20' />

      <div className='flex w-full flex-col'>
        <p className='mb-[8px] mt-[8px] h-[6px] w-[100px] rounded-full bg-N-100'></p>
        <p className='mb-[4px] h-[8px] w-[120px] rounded-full bg-N-100'></p>
        <p className='mb-[4px] h-[8px] w-[100px] rounded-full bg-N-100'></p>
        <p className='mb-[16px] h-[8px] w-[180px] rounded-full bg-N-100'></p>
        <p className='mb-[8px] h-[8px] w-[80px] rounded-full bg-N-100'></p>
      </div>
    </div>
  )
}

PlaceholderProductThumbnail.defaultProps = {}

export default PlaceholderProductThumbnail
