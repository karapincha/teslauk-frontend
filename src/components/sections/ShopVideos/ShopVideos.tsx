import React, { FC } from 'react'
import CN from 'classnames'

export interface ShopVideosProps {
  [x: string]: any
}

export const ShopVideos: FC<ShopVideosProps> = ({
  className,
  product,
  ...restProps
}: ShopVideosProps) => {
  const ShopVideosClasses = CN(`shop-reviews max-w-[100%] flex flex-col gap-[24px]`, className)

  const { pageProduct } = product

  return (
    <div className={ShopVideosClasses} {...restProps}>
      <article className='prose max-w-[100%]'>
        <div
          className={CN('grid gap-[40px]', {
            'grid-cols-3': pageProduct?.videos?.length > 1,
            'grid-cols-2': pageProduct?.videos?.length === 1,
          })}>
          {pageProduct?.videos?.map(({ youtubeUrl }: any, index: number) => {
            const urlParams = new URLSearchParams(youtubeUrl.split('?')[1])
            const vdoId = urlParams.get('v')

            return (
              <iframe
                key={index}
                src={`https://www.youtube.com/embed/${vdoId}`}
                title={product?.name}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            )
          })}
        </div>
      </article>
    </div>
  )
}

ShopVideos.defaultProps = {}

export default ShopVideos
