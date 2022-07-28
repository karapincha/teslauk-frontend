import React, { FC, forwardRef } from 'react'
import CN from 'classnames'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { Button } from '@/components/atoms/Button'
import { Pill } from '@/components/atoms/Pill'
import { ArrowRight, Check, MapPin } from 'react-feather'
import { Logo } from '@/components/atoms'

import parseHTML from 'html-react-parser'
import Link from 'next/link'

export interface SingleEventCardProps {
  [x: string]: any
  cover?: any
  btnProps?: any
  heading?: string
  description?: string
  isFeatured?: any
  location?: string
  appearance?: 'default' | 'gray'
  month?: string
  date?: string
  eventTopic?: string
}

export const SingleEventCard = forwardRef(
  (
    {
      className,
      title,
      pageEvent,
      excerpt,
      slug,
      isFeatured,
      eventTopic,
      location,
      description,
      url,
      banner,
      start_date,
      isHighlighted,
      isHorizontal,
      isPast,
      ...restProps
    }: SingleEventCardProps,
    ref: any
  ) => {
    const SingleEventCardClasses = CN(
      `single-event-card relative group flex shadow-card-shadow hover:cursor-pointer w-full`,
      {
        'flex-row': isHorizontal,
        'flex-col': !isHorizontal,
      },
      className
    )
    const { date } = pageEvent || {}
    const formattedDate = start_date ? new Date(start_date) : null

    return (
      <div className={SingleEventCardClasses} {...restProps} ref={ref}>
        <div
          className={CN('flex w-full flex-shrink-0 bg-N-300 bg-cover bg-no-repeat', {
            'w-[160px] rounded-l-[8px]': isHorizontal,
            'h-[207px] rounded-t-[8px]': !isHorizontal,
            'grayscale': isPast,
          })}
          style={{
            backgroundImage: `url('${
              banner?.url ||
              'https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
            }')`,
          }}>
          {/* Featured */}
          {isFeatured && (
            <div className='flex px-[24px] pt-[24px]'>
              <Pill size='md' className={CN('bg-B-100 font-400 !text-B-500')}>
                {isFeatured}
              </Pill>
            </div>
          )}
        </div>

        <div className='w-full rounded-b-[8px] bg-white px-[24px] py-[24px]'>
          <div className='flex gap-[16px]'>
            {formattedDate && (
              <div
                className={CN(
                  'absolute right-[-16px] top-[-16px] flex h-[80px] w-[80px] flex-shrink-0  flex-col items-center justify-center rounded-[4px]',
                  {
                    'bg-B-500 text-white': isHighlighted,
                    'bg-N-700 text-white': !isHighlighted,
                    '!bg-N-100 !text-N-700': isPast,
                  }
                )}>
                <span className='text-md font-600'>{format(formattedDate, 'MMM')}</span>
                <span className='text-h4 font-700 leading-[1]'>{format(formattedDate, 'dd')}</span>
                <span className='text-sm font-600'>{format(formattedDate, 'Y')}</span>
              </div>
            )}

            <div
              className={CN('flex flex-col', {
                'pr-[60px]': isHorizontal,
              })}>
              {title && (
                <h5 className='mb-[8px] text-base font-500 text-N-800 line-clamp-1 group-hover:text-B-400'>
                  {title}
                </h5>
              )}

              {description && (
                <div className='mb-[12px] text-md font-400 text-N-600 line-clamp-3'>
                  {parseHTML(description)}
                </div>
              )}

              <div className='date-card__location flex items-center pt-[4px] text-md font-500 text-N-600'>
                <div className='flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-full bg-N-100'>
                  <MapPin size={16} />
                </div>
                <span className='pl-[8px] line-clamp-1'>{location || 'To be decided'}</span>
              </div>

              {/* <span className='flex items-center gap-[8px] text-base font-500 group-hover:text-B-400'>
                <span>View Event</span>
                <i className='ri-arrow-right-line text-lg' />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export default SingleEventCard
