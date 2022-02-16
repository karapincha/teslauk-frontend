import React, { FC } from 'react'
import { Tag } from '@/components/atoms/Tag'
import { Tag as TagIcon, Shield, Disc, Zap } from 'react-feather'

export const productsList = [
  {
    id: 0,
    title: 'Dewar flasks Nalgene™, type 4150, HDPE',
    price: '$1.99',
    image: '/product-images/product-01.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Modal', value: '9875423' },
    ],
    tag: (
      <Tag color='green' onClick={() => {}} icon={<TagIcon size={14} />}>
        Promotional
      </Tag>
    ),
  },
  {
    id: 1,
    title: 'Magnetic stirrers',
    price: '$1.99',
    image: '/product-images/product-02.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Modal', value: '9875423' },
    ],
    tag: (
      <Tag color='red' onClick={() => {}} icon={<Shield size={14} />}>
        Hazardous
      </Tag>
    ),
  },
  {
    id: 2,
    title: 'Mini-Diaphragm Vacuum Pumps LABOPORT®N96, Chemically-Resistant',
    price: '$1.99',
    image: '/product-images/product-03.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Modal', value: '9875423' },
    ],
    tag: (
      <Tag color='purple' onClick={() => {}} icon={<Disc size={14} />}>
        Radioactive
      </Tag>
    ),
  },
  {
    id: 3,
    title: 'Dewar flasks Nalgene™, type 4150, HDPE',
    price: '$1.99',
    image: '/product-images/product-04.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Modal', value: '9875423' },
    ],
    tag: (
      <Tag color='orange' onClick={() => {}} icon={<Zap size={14} />}>
        Fragile
      </Tag>
    ),
  },
]
