import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { SectionHeading, FeatureCard } from '@/components/molecules'
import { Button } from '@/components/atoms'
import { useViewport } from '@/utils'

export interface GuidesQuickAccessProps {
  [x: string]: any
}

export const GuidesQuickAccess: FC<GuidesQuickAccessProps> = ({
  className,
  ...restProps
}: GuidesQuickAccessProps) => {
  const GuidesQuickAccessClasses = CN(`guides-quick-access`, className, {})
  const { isDesktop, isMobile, isTablet } = useViewport()

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
          className='mx-auto mb-[40px] lg:mb-[80px] max-w-[472px]'
        />

        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col items-center w-full lg:w-auto'>
            <img src='/images/section-img-001.png' width={(isMobile && 286) || (isTablet && 486) || 576} height={(isMobile && 124) || (isTablet && 212) || 460} />

            <div className='mt-[-40px] flex gap-[8px]'>
              <span className='text-h3 font-600 text-N-800'>120+</span>
              <span className='h-[48px] w-[1px] bg-N-300' />
              <span className='w-[192px] text-md text-N-600'>
                Guides written by Tesla Owners for Tesla Owners
              </span>
            </div>
          </div>

          <div className='block lg:max-w-[576px] mx-auto md:mx-[unset] md:px-[80px] lg:px-0 lg:ml-auto pt-[60px] lg:pt-0'>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-x-[48px] gap-y-[36px] md:justify-between'>
              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='About your Tesla car'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-2.png'
                  className='cursor-pointer lg:w-[calc(100%-20px)]'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Charging away from home'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-2.png'
                  className='cursor-pointer lg:w-[calc(100%-20px)]'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Things to do for new owners'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-3.png'
                  className='cursor-pointer lg:w-[calc(100%-20px)]'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Upgrading, Modifying and Fixing'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-4.png'
                  className='cursor-pointer lg:w-[calc(100%-20px)]'
                />
              </Link>

              <Link href='/guides/about-the-car'>
                <FeatureCard
                  heading='Fear, Uncertainty &amp; Doubt (FUD)'
                  description='Everything you need to know about the car'
                  icon='/images/icons/quick-guide-icon-2.png'
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
