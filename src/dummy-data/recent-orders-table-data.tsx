import React from 'react'
import { Badge } from '@/components/atoms/Badge'

export const columns = [
  {
    Header: 'Order id',
    accessor: 'oderId', // accessor is the "key" in the data
    minWidth: 90,
  },
  {
    Header: 'Order date',
    accessor: 'orderDate',
  },
  {
    Header: () => <div className='flex justify-center w-full'>Payment method</div>,
    accessor: 'paymentMethod',
    Cell: ({ cell: { value } }: any) => <div className='flex justify-center w-full'>{value}</div>,
    minWidth: 180,
  },
  {
    Header: () => <div className='flex justify-end w-full pr-[20px]'>Order price</div>,
    accessor: 'orderPrice',
    Cell: ({ cell: { value } }: any) => (
      <div className='flex justify-end w-full pr-[20px]'>{value}</div>
    ),
    minWidth: 130,
  },
  {
    Header: () => <div className='flex justify-center w-full'>Order status</div>,
    accessor: 'orderStatus',
    Cell: ({ cell: { value } }: any) => {
      switch (value) {
        case 'Pending':
          return (
            <div className='flex justify-center w-full'>
              <Badge
                appearance='warning'
                className='flex items-center justify-center w-full h-full'>
                {value}
              </Badge>
            </div>
          )
        case 'Processing':
          return (
            <div className='flex justify-center w-full'>
              <Badge appearance='info' className='flex items-center justify-center w-full h-full'>
                {value}
              </Badge>
            </div>
          )
        case 'Completed':
          return (
            <div className='flex justify-center w-full'>
              <Badge
                appearance='success'
                className='flex items-center justify-center w-full h-full'>
                {value}
              </Badge>
            </div>
          )
        case 'Cancelled':
          return (
            <div className='flex justify-center w-full'>
              <Badge appearance='error' className='flex items-center justify-center w-full h-full'>
                {value}
              </Badge>
            </div>
          )
        default:
          return (
            <div className='flex justify-center w-full'>
              <Badge
                appearance='default'
                className='flex items-center justify-center w-full h-full'>
                {value}
              </Badge>
            </div>
          )
      }
    },
  },
  {
    Header: '',
    accessor: 'viewOrder',
    Cell: ({ cell: { value } }: any) => (
      <div className='flex justify-end w-full text-right'>
        <a href={value} className='cursor-pointer font-500 text-B-500 hover:text-B-400'>
          View order
        </a>
      </div>
    ),
    width: 120,
  },
]

export const data = [
  {
    oderId: '#39146',
    orderDate: '22/10/2021',
    paymentMethod: 'PayPal',
    orderPrice: '$25,658.55',
    orderStatus: 'Cancelled',
    viewOrder: '#',
  },
  {
    oderId: '#49156',
    orderDate: '23/10/2021',
    paymentMethod: 'PayPal',
    orderPrice: '$25,658.55',
    orderStatus: 'Pending',
    viewOrder: '#',
  },
  {
    oderId: '#69956',
    orderDate: '03/11/2021',
    paymentMethod: 'Credit card',
    orderPrice: '$25,658.55',
    orderStatus: 'Completed',
    viewOrder: '#',
  },
  {
    oderId: '#69756',
    orderDate: '09/11/2021',
    paymentMethod: 'Debit card',
    orderPrice: '$25,658.55',
    orderStatus: 'Completed',
    viewOrder: '#',
  },
  {
    oderId: '#87156',
    orderDate: '01/12/2021',
    paymentMethod: 'PayPal',
    orderPrice: '$25,658.55',
    orderStatus: 'Cancelled',
    viewOrder: '#',
  },
  {
    oderId: '#99156',
    orderDate: '17/12/2021',
    paymentMethod: 'Purchase order',
    orderPrice: '$25,658.55',
    orderStatus: 'Pending',
    viewOrder: '#',
  },
]
