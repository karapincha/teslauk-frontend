import Link from 'next/link'
import React, { FC, useState } from 'react'
import CN from 'classnames'
import parseHtml from 'html-react-parser'
import ImageGallery from 'react-image-gallery'

import { ShoppingCart } from 'react-feather'
import { Badge, Button, TextField, QtySelector } from '@/components/atoms'

import { useViewport } from '@/utils'

export interface ExpandedProductDetailsProps {
  [x: string]: any
  productName?: string
  price?: string | number
  shopName?: string
  category?: string
  stockAmount?: string | number
  image?: string
}

export const ExpandedProductDetails: FC<ExpandedProductDetailsProps> = ({
  className,
  productName,
  price,
  shopName,
  category,
  stockAmount,
  image,
  product,
  onAddToCart,
  isLoading,
  ...restProps
}: ExpandedProductDetailsProps) => {
  const ExpandedProductDetailsClasses = CN(
    `expanded-product-details flex flex-col lg:flex-row justify-between gap-[24px] md:gap-[48px] w-full`,
    className
  )
  const { isMobile, isTablet, isDesktop } = useViewport()

  const [qty, setQty] = useState(1)

  const mapImages = product?.galleryImages?.nodes?.map((image: any) => {
    return {
      original: image.mediaItemUrl,
      thumbnail: image.mediaItemUrl,
      thumbnailWidth: 80,
      thumbnailHeight: 80,
    }
  })

  const images = [
    {
      original: product?.image?.mediaItemUrl,
      thumbnail: product?.image?.mediaItemUrl,
      thumbnailWidth: 80,
      thumbnailHeight: 80,
    },
    ...mapImages,
  ]

  return (
    <div className={ExpandedProductDetailsClasses} {...restProps}>
      {/* Product image carousel */}
      <div className='flex w-[576px] flex-shrink-0 flex-col gap-[20px]'>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          onErrorImageURL='/placeholder.png'
          showThumbnails={product?.galleryImages?.nodes?.length === 0 ? false : true}
          renderThumbInner={(props: any) => {
            return (
              <div className='flex items-center justify-center'>
                <img
                  src={props?.original}
                  className='h-[calc(100%)] w-[calc(100%)] rounded-[4px] object-cover object-center shadow-card-shadow'
                />
              </div>
            )
          }}
          renderItem={(props: any) => {
            return (
              <div className='flex h-[576px] w-[576px] items-center justify-center rounded-[8px] border border-N-100 bg-white'>
                <img
                  src={props?.original}
                  className='h-[calc(100%)] w-[calc(100%)] rounded-[8px] object-contain object-center'
                />
              </div>
            )
          }}
          renderLeftNav={(onClick: any, disabled: any) => {
            return (
              <Button
                onClick={onClick}
                disabled={disabled}
                appearance='secondary'
                className='absolute bottom-[-86px] left-0 z-10 w-[52px] px-0'>
                <i className='ri-arrow-left-s-line text-lg' />
              </Button>
            )
          }}
          renderRightNav={(onClick: any, disabled: any) => {
            return (
              <Button
                onClick={onClick}
                disabled={disabled}
                appearance='secondary'
                className='absolute bottom-[-86px] right-0 z-10 w-[52px] px-0'>
                <i className='ri-arrow-right-s-line text-lg' />
              </Button>
            )
          }}
        />
      </div>

      {/* Product description */}
      <div className='flex w-full flex-col gap-[32px]'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-[32px]'>
            <div className='flex flex-col gap-[16px]'>
              <div className='flex items-center gap-[8px]'>
                {product?.productCategories?.nodes?.map((cat: any) => {
                  return (
                    <Link href={`/shop?category=${cat?.slug}`} key={cat?.slug}>
                      <a>
                        <Badge appearance='warning'>{cat.name}</Badge>
                      </a>
                    </Link>
                  )
                })}
              </div>

              <h1 className='text-h2 leading-[48px]'>{product?.name}</h1>

              <div className='prose text-md'>{parseHtml(product?.shortDescription || '')}</div>

              {product?.stockQuantity ? (
                <p className='flex items-center gap-[8px] text-base font-500 text-G-500'>
                  <i className='ri-check-double-line text-lg' />
                  <span>({product?.stockQuantity}) In stock</span>
                </p>
              ) : (
                <p className='flex items-center gap-[8px] text-base font-500 text-R-500'>
                  <i className='ri-error-warning-line text-lg' />
                  <span>Out-of stock</span>
                </p>
              )}

              <div className='flex flex-col'>
                <div className='flex items-center gap-[8px]'>
                  <div className='flex text-md'>
                    <div className='flex w-full items-center gap-[8px] !font-500'>
                      <i className='ri-truck-line text-lg' /> Estimated shipping —
                    </div>
                  </div>

                  <span className='text-md font-600 text-N-700'>4-6 Weeks</span>
                </div>

                {product?.sku && (
                  <div className='flex items-center gap-[8px]'>
                    <div className='flex text-md'>
                      <div className='flex w-full items-center gap-[8px] !font-500'>
                        <i className='ri-store-3-line text-lg' /> SKU —
                      </div>
                    </div>

                    <span className='text-md font-600 text-N-700'>{product?.sku}</span>
                  </div>
                )}
              </div>
            </div>

            <div className='flex'>
              <div className='mr-[12px] flex border-r border-N-100 pr-[20px]'>
                <h3>{product?.price}</h3>
              </div>

              <div className='flex w-[150px] items-center'>
                <QtySelector
                  onChange={(qty: number) => {
                    setQty(qty)
                  }}
                  stockQty={product?.stockQuantity}
                  defaultQty={qty}
                />
              </div>
            </div>

            <div className='flex'>
              <Button
                isLoading={isLoading}
                className='w-full md:w-[200px]'
                iconAfter={<ShoppingCart size={20} />}
                disabled={!product?.stockQuantity}
                onClick={() => onAddToCart(qty)}>
                Add to cart
              </Button>
            </div>

            {(product?.pageProduct?.features ||
              product?.pageProduct?.reviews ||
              product?.pageProduct?.videos) && (
              <div className='flex items-center'>
                <a href='#description' className='flex items-center gap-[4px] text-md font-500'>
                  Read more details about this product{' '}
                  <i className='ri-arrow-down-s-line text-lg' />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ExpandedProductDetails.defaultProps = {}

export default ExpandedProductDetails
