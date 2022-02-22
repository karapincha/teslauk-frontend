import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Card, DateCard } from '@/components/molecules'
import { Button } from '@/components/atoms'

export interface EventCardProps {
  [x: string]: any
}

export const EventCard: FC<EventCardProps> = ({ className, ...restProps }: EventCardProps) => {
  const EventCardClasses = CN(`event-card`, className, {})

  return (
    <div className={EventCardClasses} {...restProps}>
      <div className='container flex flex-col gap-[56px]'>
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
                <Button iconAfter={<i className='text-lg ri-arrow-right-line' />} appearance='link'>
                  View all the events
                </Button>
              </Link>
            }
          />
        </div>

        <div className='flex gap-[64px]'>
          <DateCard appearance='primary' />
          <DateCard month='Jul' date='12' />
          <DateCard month='Aug' date='26' />
        </div>
      </div>
    </div>
  )
}

EventCard.defaultProps = {}

export default EventCard
