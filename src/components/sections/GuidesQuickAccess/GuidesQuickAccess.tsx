import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { SectionHeading, FeatureCard } from '@/components/molecules'
import { Button } from '@/components/atoms'

export interface GuidesQuickAccessProps {
  [x: string]: any
}

export const GuidesQuickAccess: FC<GuidesQuickAccessProps> = ({
  className,
  ...restProps
}: GuidesQuickAccessProps) => {
  const GuidesQuickAccessClasses = CN(`guides-quick-access`, className, {})

  return (
    <div className={GuidesQuickAccessClasses} {...restProps}>
      <div className='container'>
        <SectionHeading
          overline='Guides'
          heading='A comprehensive guide'
          description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
          align='center'
          cta={
            <Link href='/guides'>
              <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
                Browse articles
              </Button>
            </Link>
          }
          className='mx-auto mb-[80px] max-w-[472px]'
        />

        <div className='flex'>
          <div className='flex flex-col items-center'>
            <img src='/images/section-img-001.png' width={576} height={460} />

            <div className='mt-[-40px] flex gap-[8px]'>
              <span className='text-h3 font-600 text-N-800'>120+</span>
              <span className='h-[48px] w-[1px] bg-N-300' />
              <span className='w-[192px] text-md text-N-600'>
                Guides written by Tesla Owners for Tesla Owners
              </span>
            </div>
          </div>

          <div className='block max-w-[576px] ml-auto'>
            <div className='grid grid-cols-2 gap-x-[48px] gap-y-[36px]'>
              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='About your <br />Tesla car'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-1.png'
                  className='cursor-pointer'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Charging away <br />from home'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-2.png'
                  className='cursor-pointer'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Things to do for <br />new owners'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-3.png'
                  className='cursor-pointer'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Upgrading and Modifying'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-4.png'
                  className='cursor-pointer'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Fear, Uncertainty &amp; Doubt (FUD)'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-1.png'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GuidesQuickAccess.defaultProps = {}

export default GuidesQuickAccess
