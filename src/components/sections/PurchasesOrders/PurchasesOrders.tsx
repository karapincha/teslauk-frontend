import React, { FC } from 'react'
import CN from 'classnames'

export interface PurchasesOrdersProps {
  [x: string]: any
}

export const PurchasesOrders: FC<PurchasesOrdersProps> = ({
  className,
  ...restProps
}: PurchasesOrdersProps) => {
  const recentOrdersList = [
    {
      id: '0',
      orderNumber: '#39155',
      label: 'Pending payment',
      url: '#',
      date: '21/10/2021',
      itemsCount: '1',
      price: '£35',
      isCompleted: false,
      isPending: true,
    },
    {
      id: '1',
      orderNumber: '#39155',
      label: 'Delivered',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: false,
      isPending: false,
    },
    {
      id: '2',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
    {
      id: '3',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
    {
      id: '4',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
    {
      id: '5',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
    {
      id: '6',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
    {
      id: '7',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
    {
      id: '8',
      orderNumber: '#39155',
      label: 'Order completed',
      url: '#',
      itemsCount: '1',
      price: '£35',
      date: '21/10/2021',
      isCompleted: true,
      isPending: false,
    },
  ]
  const PurchasesOrdersClasses = CN(
    `purchases-orders scrollbar-py-[12px] scrollbar-track-rounded-full scrollbar-thumb-rounded-full w-full overflow-auto overflow-y-scroll pt-[24px]  scrollbar-thin scrollbar-track-N-100 scrollbar-thumb-N-300 md:pt-[24px] lg:pt-[16px]`,
    className
  )

  return (
    <div className={PurchasesOrdersClasses} {...restProps}>
      <div className='flex w-[1000px] flex-col gap-[16px] overflow-auto md:w-[960px] lg:w-[unset]'>
        <div className='grid grid-cols-[1.5fr_2fr_4fr_3fr_2fr_3fr] gap-[16px] bg-N-50 py-[4px] pl-[8px] text-md text-N-600'>
          <div>Order ID</div>
          <div>Date</div>
          <div>Status</div>
          <div>No. of items</div>
          <div>Total</div>
          <div>Actions</div>
        </div>
      </div>
      <div>
        <ul className='flex w-[1000px] flex-col gap-[16px] overflow-auto pt-[12px] md:w-[960px] lg:w-[unset] pb-[24px]'>
          {recentOrdersList.map(
            (
              { id, orderNumber, url, label, itemsCount, price, date, isCompleted, isPending },
              index
            ) => (
              <li
                key={id || index}
                className='grid grid-cols-[1.5fr_2fr_4fr_3fr_2fr_3fr] gap-[16px] pl-[8px]'>
                <span className='text-base text-N-800'>{orderNumber}</span>
                <p className='text-base font-400 text-N-600'>{date}</p>
                <p
                  className={CN(`text-base font-400`, {
                    'text-N-800': !isCompleted,
                    'text-G-500': isCompleted,
                  })}>
                  {label}
                </p>
                <p>{itemsCount}</p>
                <p>{price}</p>
                <div className='flex gap-[16px]'>
                  <a target='_blank' href={url} className='font-600 text-N-800 hover:text-B-500'>
                    View
                  </a>
                  <a
                    target='_blank'
                    href={url}
                    className={CN(`text-base font-600`, {
                      'hidden': !isPending,
                      'text-B-500 hover:text-B-600': isPending,
                    })}>
                    Pay
                  </a>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

PurchasesOrders.defaultProps = {}

export default PurchasesOrders
