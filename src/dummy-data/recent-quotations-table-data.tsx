import React from 'react'
import { Badge } from '@/components/atoms/Badge'

export const columns = [
  {
    Header: 'Quotation date',
    accessor: 'quotationDate', // accessor is the "key" in the data
    minWidth: 130,
  },
  {
    Header: 'Reference number',
    accessor: 'refNumber',
    minWidth: 160,
  },
  {
    Header: () => <div className='flex justify-center w-full'>Quote status</div>,
    accessor: 'quoteStatus',
    minWidth: 120,
    Cell: ({ cell: { value } }: any) => {
      switch (value) {
        case 'Expired':
          return (
            <div className='flex justify-center w-full'>
              <Badge appearance='error' className='flex items-center justify-center w-full h-full'>
                {value}
              </Badge>
            </div>
          )
        case 'Active':
          return (
            <div className='flex justify-center w-full'>
              <Badge
                appearance='success'
                className='flex items-center justify-center w-full h-full'>
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
    Header: () => <div className='flex justify-end w-full pr-[20px]'>Quote value</div>,
    accessor: 'quoteValue',
    Cell: ({ cell: { value } }: any) => (
      <div className='flex justify-end w-full pr-[20px]'>{value}</div>
    ),
    minWidth: 140,
  },
  {
    Header: () => <div className='flex justify-end w-full'>&nbsp;</div>,
    accessor: 'viewQuote',
    Cell: ({ cell: { value } }: any) => (
      <div className='flex justify-end w-full'>
        <a href={value} className='cursor-pointer font-500 text-B-500 hover:text-B-400'>
          View quote
        </a>
      </div>
    ),
    width: 120,
  },
]

export const data = [
  {
    quotationDate: '22/10/2021',
    refNumber: '201905340014',
    quoteValue: '$25,658.55',
    quoteStatus: 'Active',
    viewOrder: '#',
  },
  {
    refNumber: '201905234521',
    quotationDate: '23/10/2021',
    quoteValue: '$25,658.55',
    quoteStatus: 'Active',
    viewOrder: '#',
  },
  {
    refNumber: '201923456645',
    quotationDate: '03/11/2021',
    quoteValue: '$25,658.55',
    quoteStatus: 'Expired',
    viewOrder: '#',
  },
  {
    refNumber: '201909000987',
    quotationDate: '09/11/2021',
    quoteValue: '$25,658.55',
    quoteStatus: 'Expired',
    viewOrder: '#',
  },
  {
    refNumber: '201923445656',
    quotationDate: '01/12/2021',
    quoteValue: '$25,658.55',
    quoteStatus: 'Expired',
    viewOrder: '#',
  },
  {
    refNumber: '201923445678',
    quotationDate: '17/12/2021',
    quoteValue: '$25,658.55',
    quoteStatus: 'Expired',
    viewOrder: '#',
  },
]
