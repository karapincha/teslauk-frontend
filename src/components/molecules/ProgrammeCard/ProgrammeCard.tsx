import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Button } from '@/components/atoms'

export interface ProgrammeCardProps {
  [x: string]: any
  heading?: string
  description?: string
  image?: string
  btnProps?: any
  descriptionCTA?: string
  link?: string
}

export const ProgrammeCard: FC<ProgrammeCardProps> = ({
  className,
  heading,
  description,
  image,
  btnProps,
  descriptionCTA,
  link,
  ...restProps
}: ProgrammeCardProps) => {
  const ProgrammeCardClasses = CN(
    `programme-card flex flex-col lg:flex-row w-full rounded-[12px] bg-white px-[16px] lg:pl-[24px] lg:pr-[48px] py-[24px] gap-[24px]`,
    className
  )
  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={ProgrammeCardClasses} {...restProps}>
      <img src={image} className='h-full object-cover object-center lg:max-w-[472px]' />
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col gap-[12px]'>
          <h5 className='text-h5 font-500 text-N-800'>{heading}</h5>
          <p
            className='text-sm font-400 text-N-600'
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
          {descriptionCTA && (
            <a href='#' target='_blank' className='text-md font-500 text-B-500'>
              {descriptionCTA}
            </a>
          )}
          {link && (
            <a href='#' target='_blank' className='text-md font-500 text-N-800'>
              {link}
            </a>
          )}
        </div>
        {btnProps && (
          <div className='w-full pt-[24px] text-base !font-600 md:w-[unset] lg:w-[unset] lg:pt-0'>
            <Button {...restBtnProps} className='w-full md:w-[unset] lg:w-[unset]'>
              {children || 'Read more'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

ProgrammeCard.defaultProps = {}

export default ProgrammeCard
