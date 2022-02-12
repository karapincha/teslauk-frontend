import React from 'react'
import { Minus, ShoppingCart } from 'react-feather'
import { Badge } from '@/components/atoms/Badge'

export const columns = [
  {
    Header: 'Product',
    accessor: 'product',
    Cell: ({ cell: { value } }: any) => (
      <img src={value} className='w-[40px] h-[40px] object-contain object-center rounded-[4px]' />
    ),
    width: 80,
  },
  {
    Header: 'Modal #',
    accessor: 'modalNumber', // accessor is the "key" in the data
  },
  {
    Header: 'Part #',
    accessor: 'partNumber',
  },
  {
    Header: 'Cat. No.',
    accessor: 'catNumber',
  },
  {
    Header: 'Diaphragm',
    accessor: 'diaphragm',
  },
  {
    Header: () => <div className='flex justify-center w-full'>PK</div>,
    accessor: 'pk',
    Cell: ({ cell: { value } }: any) => <div className='flex justify-center w-full'>{value}</div>,
  },
  {
    Header: () => <div className='flex justify-end w-full'>Price</div>,
    accessor: 'price',
    Cell: ({ cell: { value } }: any) => <div className='flex justify-end w-full'>{value}</div>,
    width: 130,
  },
  {
    Header: '',
    accessor: 'link',
    Cell: ({ cell: { value } }: any) => (
      <div className='flex justify-end w-full'>
        <a href={value} className='font-500 text-B-500 hover:text-B-400'>
          View product
        </a>
      </div>
    ),
    width: 160,
  },
  {
    Header: '',
    accessor: 'action',
    Cell: ({ cell: { value } }: any) => {
      if (value) {
        return (
          <div className='flex justify-end w-full'>
            <ShoppingCart size={24} className='cursor-pointer' />
          </div>
        )
      }

      return (
        <div className='flex justify-end w-full'>
          <Minus />
        </div>
      )
    },
    width: 80,
  },
]

export const data = [
  {
    product: '/product-images/product-01.png',
    modalNumber: 'HDPE',
    partNumber: '20696841',
    catNumber: 'HDPE-20696841',
    diaphragm: 'PTFE coated',
    pk: '1.5',
    price: '$12,395.55',
    link: '#',
    action: '#',
  },
  {
    product: '/product-images/product-02.png',
    modalNumber: 'HDPE',
    partNumber: '20696841',
    catNumber: 'HDPE-20696841',
    diaphragm: 'PTFE coated',
    pk: '1.5',
    price: <Badge appearance='warning'>Call for price</Badge>,
    link: '#',
    action: null,
  },
  {
    product: '/product-images/product-03.png',
    modalNumber: 'HDPE',
    partNumber: '20696841',
    catNumber: 'HDPE-20696841',
    diaphragm: 'PTFE coated',
    pk: '1.5',
    price: '$12,395.55',
    link: '#',
    action: '#',
  },
  {
    product: '/product-images/product-04.png',
    modalNumber: 'HDPE',
    partNumber: '20696841',
    catNumber: 'HDPE-20696841',
    diaphragm: 'PTFE coated',
    pk: '1.5',
    price: '$12,395.55',
    link: '#',
    action: '#',
  },
  {
    product: '/product-images/product-05.png',
    modalNumber: 'HDPE',
    partNumber: '20696841',
    catNumber: 'HDPE-20696841',
    diaphragm: 'PTFE coated',
    pk: '1.5',
    price: '$12,395.55',
    link: '#',
    action: '#',
  },
  {
    product: '/product-images/product-01.png',
    modalNumber: 'HDPE',
    partNumber: '20696841',
    catNumber: 'HDPE-20696841',
    diaphragm: 'PTFE coated',
    pk: '1.5',
    price: '$12,395.55',
    link: '#',
    action: '#',
  },
]
