import React, { FC, useState } from 'react'
import CN from 'classnames'
import { Badge, Button, TextField } from '@/components/atoms'
import { ShoppingCart } from 'react-feather'
import { useViewport } from '@/utils'

import ImageGallery from 'react-image-gallery'
import Link from 'next/link'

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
      <div className='flex w-[576px] flex-shrink-0 flex-col'>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          onErrorImageURL='/placeholder.png'
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
              <div className='flex h-[576px] w-[576px] items-center justify-center rounded-[8px] border border-N-100'>
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
      <div className='flex w-full flex-col'>
        <div className='flex flex-col gap-[40px]'>
          <div className='flex flex-col'>
            <h1 className='mb-[8px] text-h2 font-600 text-N-800'>{product?.name}</h1>

            <p className='flex items-center gap-[8px] text-base font-500 text-G-500'>
              <i className='ri-check-double-line text-lg' />
              <span>({product?.stockQuantity}) In stock</span>
            </p>

            <div className='flex flex-col gap-[8px] py-[20px]'>
              <div className='flex items-center gap-[12px]'>
                <Badge className='h-[32px] w-[112px] !justify-start'>
                  <div className='flex w-full items-center gap-[4px] !font-500'>
                    <i className='ri-store-3-line text-lg' /> Sold by
                  </div>
                </Badge>

                <span className='text-md font-600 text-N-700'>{shopName}</span>
              </div>

              <div className='flex items-center gap-[12px]'>
                <Badge className='h-[32px] w-[112px] !justify-start'>
                  <div className='flex w-full items-center gap-[4px] !font-500'>
                    <i className='ri-file-copy-line text-lg' />
                    Category
                  </div>
                </Badge>

                <div className='text-md font-600 text-N-700'>
                  {product?.productCategories?.nodes?.map((cat: any) => {
                    return (
                      <Link href={`/shop?category=${cat?.slug}`} key={cat?.slug}>
                        <a>
                          <span>{cat.name}</span>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className='flex items-center pt-[12px]'>
              <div className='mr-[12px] flex border-r border-N-100 pr-[20px]'>
                <h3>{product?.price}</h3>
              </div>

              <div className='flex w-[150px] items-center'>
                <Button
                  appearance='ghost'
                  className='w-[40px] flex-shrink-0 group'
                  onClick={() => {
                    if (qty > 1) {
                      setQty(Number(qty) - 1)
                    }
                  }}>
                  <i className='ri-indeterminate-circle-fill text-[24px] group-hover:text-B-500' />
                </Button>

                <TextField
                  className='w-full appearance-none px-0 text-center text-lg font-600'
                  value={qty}
                  onChange={(e: any) => {
                    e.preventDefault()
                    const re = /^[0-9\b]+$/

                    if (e.target.value === '' || re.test(e.target.value)) {
                      setQty(Number(e.target.value))
                    }
                  }}
                />

                <Button
                  appearance='ghost'
                  className='w-[40px] flex-shrink-0 group'
                  onClick={() => {
                    if (qty < product?.stockQuantity) {
                      setQty(Number(qty) + 1)
                    }
                  }}>
                  <i className='ri-add-circle-fill text-[24px] group-hover:text-B-500' />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[8px] pt-[28px] md:gap-[24px]'>
          <div className='flex'>
            <Button className='w-full md:w-[200px]' iconAfter={<ShoppingCart size={20} />}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

ExpandedProductDetails.defaultProps = {}

export default ExpandedProductDetails
