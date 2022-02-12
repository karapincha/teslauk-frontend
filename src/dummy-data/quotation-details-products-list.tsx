import React, { FC } from 'react'
import { PromoTag } from '@/components/atoms/PromoTag'
import { Tag as TagIcon } from 'react-feather'

export const quotationDetailsProductList = [
  {
    id: 0,
    title: 'Dewar flasks Nalgene™, type 4150, HDPE',
    price: '$25,120.55',
    unitPrice: '$5,024.11',
    qty: 5,
    image: '/product-images/product-01.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr #', value: '322806/000000', isHighlighted: true },
    ],
    tag: <PromoTag size='sm' label='80% Off' color='green' icon={<TagIcon size={10} />} />,
  },
  {
    id: 1,
    title: 'Magnetic stirrers',
    price: '$5,120.55',
    unitPrice: '$1,024.11',
    qty: 5,
    image: '/product-images/product-02.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr #', value: '322806/000000', isHighlighted: true },
    ],
  },
  {
    id: 2,
    title: 'Mini-Diaphragm Vacuum Pumps LABOPORT®N96, Chemically-Resistant, Type 4150, HDPE',
    price: '$1,232.12',
    unitPrice: '$124.00',
    qty: 5,
    priceBefore: '$577.99',
    image: '/product-images/product-03.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr #', value: '322806/000000', isHighlighted: true },
    ],
  },
  {
    id: 3,
    title: 'Dewar flasks Nalgene™, type 4150, HDPE',
    price: '$120.55',
    unitPrice: '$24.11',
    qty: 5,
    image: '/product-images/product-04.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr #', value: '322806/000000', isHighlighted: true },
    ],
  },
]
