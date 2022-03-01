import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Card, DateCard } from '@/components/molecules'
import { Button } from '@/components/atoms'
import { useViewport } from '@/utils'

export interface EventCardProps {
  [x: string]: any
}

export const EventCard: FC<EventCardProps> = ({ className, ...restProps }: EventCardProps) => {
  const EventCardClasses = CN(`event-card`, className, {})

  return (
    <div className={EventCardClasses} {...restProps}>
      <div className='container flex flex-col gap-[16px] md:gap-[32px] lg:gap-[56px]'>
        <div className='flex w-full'>
          <Card
            heading='Events happening <br /> around you'
            subHeading='Private events'
            image='/images/banners/002.jpg'
            imageAlt="Event's banner"
            link='/events'
            linkText='View all events'
            onClickLink={() => {}}
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            cta={
              <Link href='/guides'>
                <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
                  View all events
                </Button>
              </Link>
            }
          />
        </div>

        <div className='flex flex-col gap-[40px] md:flex md:flex-row lg:gap-[64px] lg:flex lg:flex-row'>
          <DateCard appearance='primary' className='!w-[calc(100%-16px)]' />
          <DateCard month='Jul' date='12' className='!w-[calc(100%-16px)]' />
          <DateCard month='Aug' date='26' className='!w-[calc(100%-16px)]' />
        </div>
      </div>
    </div>
  )
}

EventCard.defaultProps = {}

export default EventCard
