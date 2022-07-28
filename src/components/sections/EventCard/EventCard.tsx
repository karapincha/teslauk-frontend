import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Card, DateCard } from '@/components/molecules'
import { Button } from '@/components/atoms'
import { useViewport } from '@/utils'

export interface EventCardProps {
  [x: string]: any
}

export const EventCard: FC<EventCardProps> = ({
  className,
  data,
  ...restProps
}: EventCardProps) => {
  const EventCardClasses = CN(`event-card`, className, {})

  const { description, heading, subHeading, primaryButtonText, featuredEvents, featuredImage } =
    data

  return (
    <div className={EventCardClasses} {...restProps}>
      <div className='container flex flex-col gap-[24px] md:gap-[32px] lg:gap-[56px]'>
        <div className='flex w-full'>
          <Card
            heading={heading}
            subHeading={subHeading}
            image={featuredImage?.mediaItemUrl || '/placeholder.png'}
            imageAlt={heading}
            description={description}
            cta={
              <Link href='/events'>
                <a>
                  <Button
                    iconAfter={<i className='ri-arrow-right-line text-lg' />}
                    appearance='link'>
                    {primaryButtonText}
                  </Button>
                </a>
              </Link>
            }
          />
        </div>

        <div className='flex flex-col gap-[40px] md:flex md:flex-col md:gap-[32px] lg:flex lg:flex-row lg:gap-[36px]'>
          {featuredEvents &&
            featuredEvents.length > 0 &&
            featuredEvents.map((event: any, index: number) => {
              if (index < 3) {
                console.log(event)

                if (index === 0) {
                  return (
                    <Link key={index} href={`/events/${event?.pageEvent?.slug}`}>
                      <a className='w-full'>
                        <DateCard
                          {...event}
                          appearance='primary'
                          className='!w-[calc(100%-16px)]'
                        />
                      </a>
                    </Link>
                  )
                }
                return (
                  <Link key={index} href={`/events/${event?.pageEvent?.slug}`}>
                    <a className='w-full'>
                      <DateCard
                        {...event}
                        key={index}
                        month='Jul'
                        date='12'
                        className='!w-[calc(100%-16px)]'
                      />
                    </a>
                  </Link>
                )
              }
            })}

          {featuredEvents?.length === 0 && <>No events</>}
        </div>
      </div>
    </div>
  )
}

EventCard.defaultProps = {}

export default EventCard
