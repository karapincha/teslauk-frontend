import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms/Button'
import { Pill } from '@/components/atoms/Pill'
import { ArrowRight, Check, MapPin } from 'react-feather'
import { Logo } from '@/components/atoms'

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

export const SingleEventCard: FC<SingleEventCardProps> = ({
  className,
  cover,
  heading,
  isFeatured,
  description,
  location,
  appearance,
  month,
  date,
  eventTopic,
  ...restProps
}: SingleEventCardProps) => {
  const SingleEventCardClasses = CN(`single-event-card flex flex-col `, className)

  return (
    <div className={SingleEventCardClasses} {...restProps}>
      {/* Background with image */}
      <div
        className={CN(
          'flex h-[207px] w-[368px] flex-shrink-0 rounded-t-[12px] bg-cover bg-no-repeat',
          {
            'bg-N-300 mix-blend-luminosity': appearance === 'gray',
          }
        )}
        style={{ backgroundImage: `url('${cover || ''}')` }}>
        {/* Featured */}
        {isFeatured && (
          <div className='flex px-[24px] pt-[24px]'>
            <Pill size='md' className={CN('bg-B-100 font-400 !text-B-500')}>
              {isFeatured}
            </Pill>
          </div>
        )}
      </div>

      <div className='w-[368px] rounded-b-[12px] bg-white px-[24px] py-[24px]'>
        <div>
          {heading && <h5 className='text-h5 font-500 text-N-800'>{heading}</h5>}
          {description && (
            <p className='pt-[8px] text-base font-400 text-N-600 line-clamp-3'>{description}</p>
          )}

          {eventTopic && (
            <div className='flex gap-[16px]'>
              <div
                className={CN(
                  'flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[2px]',
                  {
                    'bg-N-800 text-N-10': appearance === 'default',
                    'bg-N-500 text-N-10': appearance === 'gray',
                  }
                )}>
                <span className='text-md font-600'>{month}</span>
                <span className='text-h3 font-700 leading-[1]'>{date}</span>
              </div>
              <div className='flex w-[208px]'>
                <p
                  className={CN('text-base font-500', {
                    'text-N-500': appearance === 'gray',
                    'text-N-800': appearance === 'default',
                  })}>
                  {eventTopic}
                </p>
              </div>
            </div>
          )}

          {location && (
            <div className='flex items-center justify-center gap-[8px] pt-[16px]'>
              <div className='w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <MapPin size={16} />
              </div>
              <p
                className={CN('text-md font-500', {
                  'text-N-500': appearance === 'gray',
                  'text-N-600': appearance === 'default',
                })}>
                {location}
              </p>
            </div>
          )}

          <div className='flex justify-center pt-[16px]'>
            <Button
              iconAfter={<ArrowRight size={20} />}
              appearance='link'
              className={CN({
                'text-N-300': appearance === 'gray',
                'text-N-800': appearance === 'default',
              })}>
              View event
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

SingleEventCard.defaultProps = {}

export default SingleEventCard
