import React, { FC, useEffect, useState } from 'react'
import CN from 'classnames'
import { useMutation, useQuery } from '@apollo/client'

import { QtySelector } from '@/components/atoms'

import { UPDATE_ITEM_QTY } from '../../../../lib/graphql'

import { useAppContext } from '@/context'

export interface CheckoutProductCardProps {
  [x: string]: any
  image?: string
  heading?: string
  shopName?: string
  price?: string
  priceDetails?: string
}

export const CheckoutProductCard: FC<CheckoutProductCardProps> = ({
  className,
  image,
  heading,
  shopName,
  priceDetails,
  product: productSrc,
  ...restProps
}: CheckoutProductCardProps) => {
  const CheckoutProductCardClasses = CN(
    `checkout-product-card flex gap-[16px] items-start`,
    className
  )

  const { sidemenu, header, footer, suppliers, user, fullUser, isLoading, cart, refetchCart }: any =
    useAppContext()

  const [updateItemQty, { loading: loadingUpdateItemQty }] = useMutation(UPDATE_ITEM_QTY)

  const { product: productNode, quantity, total, key } = productSrc
  const { node: product } = productNode
  const { price, sku, stockQuantity } = product

  // const [qty, setQty] = useState(quantity)

  // useEffect(() => {
  //   setQty(quantity)
  // }, [quantity])

  useEffect(() => {
    console.log(productSrc)
  }, [productSrc])

  return (
    <div className={CheckoutProductCardClasses} {...restProps}>
      <div className='flex h-[50px] w-[50px] flex-shrink-0 rounded-[4px] border border-N-100'>
        <img src={product?.image?.mediaItemUrl || '/placeholder.png'} className='h-full w-full' />
      </div>

      <div className='flex w-full justify-between gap-[32px]'>
        <div className='flex w-full flex-col'>
          <p className='text-base font-400 text-N-800'>{product?.name}</p>
          <p className='text-sm font-400 text-N-600'>SKU — {sku}</p>
        </div>

        <div className='flex'>
          <QtySelector
            onChange={(qty: number) => {
              updateItemQty({
                variables: {
                  key: key,
                  quantity: qty,
                },
              })
                .then((res: any) => {
                  console.log(res)
                  refetchCart()
                    .then((res: any) => {
                      console.log(res)
                    })
                    .catch((res: any) => {
                      console.log(res)
                    })
                })
                .catch((res: any) => {
                  console.log(res)
                })
            }}
            stockQty={stockQuantity}
          />
        </div>

        <div className='ml-auto w-[100px] flex-shrink-0 text-right'>
          <p className='text-base font-600 text-N-800'>{total}</p>
          <p className='text-sm font-400 text-N-600'>{`${quantity}x — ${price}`}</p>
        </div>
      </div>
    </div>
  )
}

CheckoutProductCard.defaultProps = {}

export default CheckoutProductCard
