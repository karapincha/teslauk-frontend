import React, { FC } from 'react'
import CN from 'classnames'
import { MapPin } from 'react-feather'
import { Button } from '@/components/atoms'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import parseHTML from 'html-react-parser'

export interface DateCardProps {
  [x: string]: any
  month?: string
  date?: string
  heading?: string
  location?: string
  description?: string
  ctaClassName?: string
  appearance?: 'default' | 'primary'
}

export const DateCard: FC<DateCardProps> = ({
  className,
  appearance,
  ...restProps
}: DateCardProps) => {
  const DateCardClasses = CN(
    `date-card bg-white relative pt-[24px] px-[24px] pb-[16px] rounded-[8px] w-full mt-[16px] shadow-[0px_25px_50px_-12px_rgba(95,111,140,0.1)] group hover:cursor-pointer transition-all duration-200`,
    className
  )

  const { title, date, month, location, excerpt } = restProps

  return (
    <div className={DateCardClasses} {...restProps}>
      <div
        className={CN(
          'date-card__date absolute right-[-16px] top-[-16px] flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[8px]',
          {
            'bg-B-500 text-white': appearance === 'primary',
            'bg-N-100 text-N-700': appearance === 'default',
          }
        )}>
        <span className='text-md font-600'>{month}</span>
        <span className='text-h3 font-700 leading-[1]'>{date}</span>
      </div>

      <div className='date-card__content'>
        <h4 className='date-card__heading mb-[4px] text-h5'>{title}</h4>
        <p className='date-card__location mb-[16px] flex items-center text-md font-500 text-N-500'>
          <MapPin size={16} />
          <span className='pl-[8px]'>{location}</span>
        </p>
        <div className='date-card__description mb-[16px] text-md text-N-600'>
          {parseHTML(excerpt || '')}
        </div>

        <Button
          appearance='link'
          iconAfter={<i className='ri-arrow-right-line text-lg' />}
          className={CN('group-hover:text-B-400')}>
          View Event
        </Button>
      </div>
    </div>
  )
}

DateCard.defaultProps = {
  className: ``,
  month: `Jun`,
  date: `05`,
  description: `We organise several Track days per annum where you can take your own car onto the track`,
  heading: `Track Days`,
  link: `/`,
  linkText: `View event`,
  location: `Bridgend CF32 9SY`,
  appearance: 'default',
}

export default DateCard
