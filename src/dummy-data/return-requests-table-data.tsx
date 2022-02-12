import React from 'react'
import { Badge } from '@/components/atoms/Badge'

export const columns = [
  {
    Header: 'Date requested',
    accessor: 'requestedDate',
    minWidth: 130,
  },
  {
    Header: 'Order',
    accessor: 'oderId',
    Cell: ({ cell: { value } }: any) => (
      <a href='#' className='font-500'>
        {value}
      </a>
    ),
    minWidth: 100,
  },
  {
    Header: 'Product name',
    accessor: 'productName',
    Cell: ({ cell: { value } }: any) => (
      <a href='#' className='font-500'>
        {value}
      </a>
    ),
    minWidth: 170,
  },
  {
    Header: () => <div className='flex justify-center w-full'>status</div>,
    accessor: 'status',
    minWidth: 100,
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
    Header: 'Return reason',
    accessor: 'reason',
    minWidth: 120,
  },
  {
    Header: 'Action',
    accessor: 'action',
    minWidth: 120,
  },
  {
    Header: 'Staff notes',
    accessor: 'notes',
    minWidth: 120,
  },
]

export const data = [
  {
    requestedDate: '22/10/2021',
    oderId: '#39146',
    productName: 'Dewar flasks Nalgene™, type 4150, HDPE',
    status: 'Cancelled',
    reason: 'Received wrong product',
    action: 'Send replacement',
    notes: 'Confirming receipt of return request.',
  },
  {
    requestedDate: '22/10/2021',
    oderId: '#39146',
    productName: 'Dewar flasks Nalgene™, type 4150, HDPE',
    status: 'Pending',
    reason: 'Received wrong product',
    action: 'Send replacement',
    notes: 'Confirming receipt of return request.',
  },
  {
    requestedDate: '22/10/2021',
    oderId: '#39146',
    productName: 'Dewar flasks Nalgene™, type 4150, HDPE',
    status: 'Completed',
    reason: 'Received wrong product',
    action: 'Send replacement',
    notes: 'Confirming receipt of return request.',
  },
  {
    requestedDate: '22/10/2021',
    oderId: '#39146',
    productName: 'Dewar flasks Nalgene™, type 4150, HDPE',
    status: 'Processing',
    reason: 'Received wrong product',
    action: 'Send replacement',
    notes: 'Confirming receipt of return request.',
  },
]
