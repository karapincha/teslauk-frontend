import React, { FC } from 'react'
import { Tag } from '@/components/atoms/Tag'
import { Tag as TagIcon, Shield, Disc, Zap } from 'react-feather'

export const productsList = [
  {
    id: 0,
    title: 'Mini-Diaphragm Vacuum Pumps LABOPORT®N96, Chemically-Resistant, Type 4150, HDPE',
    price: '$1,232.12',
    priceBefore: '$577.99',
    image: '/product-images/product-00.png',
    slideImages: [
      {
        id: 0,
        src: '/product-preview-images/001.png',
      },
      {
        id: 1,
        src: '/product-preview-images/002.png',
      },
      {
        id: 2,
        src: '/product-preview-images/003.png',
      },
      {
        id: 3,
        src: '/product-preview-images/004.png',
      },
      {
        id: 4,
        src: '/product-preview-images/005.png',
      },
    ],
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='purple' onClick={() => {}} icon={<Disc size={14} />}>
        Radioactive
      </Tag>
    ),
  },
  {
    id: 1,
    title: 'Magnetic stirrers',
    price: '$25,120.55',
    image: '/product-images/product-02.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='red' onClick={() => {}} icon={<Shield size={14} />}>
        Hazardous
      </Tag>
    ),
  },
  {
    id: 2,
    title: 'Dewar flasks Nalgene™, type 4150, HDPE',
    image: '/product-images/product-01.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='green' onClick={() => {}} icon={<TagIcon size={14} />}>
        Promotional
      </Tag>
    ),
  },
  {
    id: 3,
    title: 'Sampling spatulas, PS, sterile',
    price: '$459.88',
    image: '/product-images/product-04.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='orange' onClick={() => {}} icon={<Zap size={14} />}>
        Fragile
      </Tag>
    ),
  },
  {
    id: 4,
    title: 'Mini-Diaphragm Vacuum Pumps LABOPORT®N96, Chemically-Resistant, Type 4150, HDPE',
    price: '$1,232.12',
    priceBefore: '$577.99',
    image: '/product-images/product-00.png',
    slideImages: [
      {
        id: 0,
        src: '/product-preview-images/001.png',
      },
      {
        id: 1,
        src: '/product-preview-images/002.png',
      },
      {
        id: 2,
        src: '/product-preview-images/003.png',
      },
      {
        id: 3,
        src: '/product-preview-images/004.png',
      },
      {
        id: 4,
        src: '/product-preview-images/005.png',
      },
    ],
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='purple' onClick={() => {}} icon={<Disc size={14} />}>
        Radioactive
      </Tag>
    ),
  },
  {
    id: 5,
    title: 'Magnetic stirrers',
    price: '$25,120.55',
    image: '/product-images/product-02.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='red' onClick={() => {}} icon={<Shield size={14} />}>
        Hazardous
      </Tag>
    ),
  },
  {
    id: 6,
    title: 'Dewar flasks Nalgene™, type 4150, HDPE',
    price: '$5,120.55',
    image: '/product-images/product-01.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='green' onClick={() => {}} icon={<TagIcon size={14} />}>
        Promotional
      </Tag>
    ),
  },
  {
    id: 7,
    title: 'Sampling spatulas, PS, sterile',
    price: '$459.88',
    image: '/product-images/product-04.png',
    meta: [
      { label: 'Part', value: '2035235' },
      { label: 'Mfr. No.', value: '9875423' },
    ],
    tag: (
      <Tag color='orange' onClick={() => {}} icon={<Zap size={14} />}>
        Fragile
      </Tag>
    ),
  },
]
