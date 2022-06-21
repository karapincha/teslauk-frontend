import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Button, Badge } from '@/components/atoms'

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
  tags,
  ...restProps
}: ProgrammeCardProps) => {
  const ProgrammeCardClasses = CN(
    `programme-card flex flex-col lg:flex-row w-full rounded-[8px] bg-white px-[16px] lg:pl-[20px] lg:pr-[32px] py-[20px] gap-[24px] shadow-card-shadow group items-center relative`,
    className
  )
  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={ProgrammeCardClasses} {...restProps}>
      <img
        src={image}
        className='h-full flex-shrink-0 rounded-[4px] object-cover object-center lg:w-[280px]'
      />
      <div className='flex flex-col gap-[12px]'>
        <div className='flex flex-col gap-[16px]'>
          {tags && (
            <div className='absolute right-[12px] top-[16px] flex items-center gap-[12px]'>
              {tags &&
                tags.map(({ name }: any, index: number) => (
                  <Badge appearance='warning' key={index}>
                    {name}
                  </Badge>
                ))}
            </div>
          )}

          <h2 className='pr-[100px] text-h5 font-500 text-N-800'>{heading}</h2>
          <p
            className='text-md font-400 text-N-700'
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
          {/* {descriptionCTA && (
            <a href='#' target='_blank' className='text-md font-500 text-B-500'>
              {descriptionCTA}
            </a>
          )} */}
          {/* {link && (
            <a href='#' target='_blank' className='text-md font-500 text-N-800'>
              {link}
            </a>
          )} */}
        </div>

        <div className='flex'>
          <Button
            appearance='link'
            iconAfter={<i className='ri-arrow-right-line text-lg' />}
            className={CN('group-hover:text-B-400')}>
            Read more
          </Button>
        </div>

        {/* {btnProps && (
          <div className='w-full pt-[24px] text-base !font-600 md:w-[unset] lg:w-[unset] lg:pt-0'>
            <Button {...restBtnProps} className='w-full md:w-[unset] lg:w-[unset]'>
              {children || 'Read more'}
            </Button>
          </div>
        )} */}
      </div>
    </div>
  )
}

ProgrammeCard.defaultProps = {}

export default ProgrammeCard
