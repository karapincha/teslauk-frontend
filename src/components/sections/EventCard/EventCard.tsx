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
            image={
              featuredImage?.mediaItemUrl ||
              'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            imageAlt={heading}
            description={description}
            cta={
              <Link href='/events'>
                <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
                  {primaryButtonText}
                </Button>
              </Link>
            }
          />
        </div>

        <div className='flex flex-col gap-[40px] md:flex md:flex-col md:gap-[32px] lg:flex lg:flex-row lg:gap-[64px]'>
          {featuredEvents &&
            featuredEvents.length > 0 &&
            featuredEvents.map((event: any, index: number) => {
              if (index < 3) {
                if (index === 0) {
                  return (
                    <DateCard
                      {...event}
                      key={index}
                      appearance='primary'
                      className='!w-[calc(100%-16px)]'
                    />
                  )
                }
                return (
                  <DateCard
                    {...event}
                    key={index}
                    month='Jul'
                    date='12'
                    className='!w-[calc(100%-16px)]'
                  />
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
