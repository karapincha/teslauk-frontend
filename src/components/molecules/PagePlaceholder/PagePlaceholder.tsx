import React, { FC } from 'react'
import CN from 'classnames'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, SupplierRibbon } from '@/components/sections'
import Link from 'next/link'
import { Button } from '@/components/atoms'
import { Common as CommonLayout } from '@/components/layouts'
import parseHtml from 'html-react-parser'

export interface PagePlaceholderProps {
  [x: string]: any
}

export const PagePlaceholder: FC<PagePlaceholderProps> = ({
  className,
  heading,
  description,
  cta,
  ...restProps
}: PagePlaceholderProps) => {
  const PagePlaceholderClasses = CN(
    `page-placeholder flex flex-col items-center rounded-[8px] bg-white py-[48px] px-[48px] shadow-card-shadow justify-center gap-[32px]`,
    className
  )

  return (
    <div className={PagePlaceholderClasses} {...restProps}>
      <div className='flex flex-col items-center justify-center gap-[16px]'>
        <h1 className='text-h2 font-700 text-N-800'>{heading}</h1>
        <div className='flex w-full justify-center text-center'>{description}</div>
      </div>

      <div className='flex w-full justify-center'>{cta}</div>
    </div>
  )
}

PagePlaceholder.defaultProps = {}

export default PagePlaceholder
