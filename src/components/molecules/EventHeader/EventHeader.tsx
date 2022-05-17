import React, { FC } from 'react'
import CN from 'classnames'
import { Pill } from '@/components/atoms'

export interface EventHeaderProps {
  [x: string]: any
  month?: string
  date?: string
  heading?: string
}

export const EventHeader: FC<EventHeaderProps> = ({
  className,
  month,
  date,
  heading,
  ...restProps
}: EventHeaderProps) => {
  const EventHeaderClasses = CN(
    `event-header flex gap-[16px] lg:gap-[24px] md:relative flex flex-col md:flex-row md:max-w-[597px] lg:max-w-[784px] w-full md:items-left md:bg-N-10 md:mt-auto h-full py-[24px] lg:py-[32px] md:before:content-[''] md:before:absolute md:before:h-full md:before:bg-N-10 md:before:top-0 md:before:bottom-0 md:before:w-screen md:before:right-[100%] md:pr-[44px] rounded-tr-[12px]`,
    className
  )

  return (
    <div className={EventHeaderClasses} {...restProps}>
      {/* Date */}
      <div
        className={CN(
          'flex h-[72px] w-[72px] flex-col items-center justify-center rounded-[4px] bg-N-800 px-[22px] text-N-10 lg:h-[84px] lg:w-[84px]'
        )}>
        <span className='text-md font-600'>{month}</span>
        <span className='text-h3 font-700 leading-[1]'>{date}</span>
      </div>

      <div className='flex flex-col gap-[16px]'>
        <h3
          className='text-h4 font-700 text-N-800 md:text-h3'
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />

        <div className='flex'>
          <Pill
            size='md'
            className={CN('!bg-B-10 !text-B-500')}
            iconBefore={<i className='ri-star-line text-base' />}>
            Official Tesla Club UK event
          </Pill>
        </div>
      </div>
    </div>
  )
}

EventHeader.defaultProps = {}

export default EventHeader
