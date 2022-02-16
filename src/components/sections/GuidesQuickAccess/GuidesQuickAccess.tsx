import React, { FC } from 'react'
import CN from 'classnames'
import { SectionHeading, FeatureCard } from '@/components/molecules'

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
          link={{
            text: 'Browse articles',
            url: '/guides',
          }}
          className='mx-auto max-w-[472px] mb-[80px]'
        />

        <div className='flex'>
          <div className='flex flex-col items-center'>
            <img src='/images/section-img-001.png' width={576} height={460} />

            <div className='flex gap-[8px]'>
              <span className='text-h3 font-600 text-N-800'>120+</span>
              <span className='h-[48px] w-[1px] bg-N-300' />
              <span className='w-[192px] text-md text-N-600'>
                Guides written by Tesla Owners for Tesla Owners
              </span>
            </div>
          </div>

          <div className='flex'>
            <FeatureCard />
          </div>
        </div>
      </div>
    </div>
  )
}

GuidesQuickAccess.defaultProps = {}

export default GuidesQuickAccess
