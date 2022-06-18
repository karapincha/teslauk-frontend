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
  data,
  ...restProps
}: GuidesQuickAccessProps) => {
  const GuidesQuickAccessClasses = CN(`guides-quick-access`, className, {})
  const { isDesktop, isMobile, isTablet } = useViewport()

  const { heading, subHeading, description, hint, primaryButtonText, categories } = data

  return (
    <div className={GuidesQuickAccessClasses} {...restProps}>
      <div className='container'>
        <SectionHeading
          overline={subHeading}
          heading={heading}
          description={description}
          align='center'
          cta={
            <Link href='/guides'>
              <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
                {primaryButtonText}
              </Button>
            </Link>
          }
          className='mx-auto mb-[40px] max-w-[472px] lg:mb-[80px]'
        />

        <div className='flex flex-col lg:flex-row'>
          <div className='flex w-full flex-col items-center lg:w-auto'>
            <img
              src='/images/section-img-001.png'
              width={(isMobile && 286) || (isTablet && 486) || 576}
              height={(isMobile && 124) || (isTablet && 212) || 460}
            />

            <div className='mt-[-40px] flex gap-[8px]'>
              <span className='text-h3 font-600 text-N-800'>120+</span>
              <span className='h-[48px] w-[1px] bg-N-300' />
              <span className='w-[192px] text-md text-N-600'>{hint}</span>
            </div>
          </div>

          <div className='mx-auto block pt-[60px] md:mx-[unset] md:px-[80px] lg:ml-auto lg:max-w-[576px] lg:px-0 lg:pt-0'>
            <div className='grid gap-x-[48px] gap-y-[36px] md:grid-cols-2 md:justify-between lg:grid-cols-2'>
              {categories.map(({ description, name, taxonomyIcon, slug }: any, index: number) => (
                <Link href={`guides/category/${slug}`} key={index}>
                  <FeatureCard
                    heading={name}
                    description={description}
                    icon={taxonomyIcon?.icon?.mediaItemUrl}
                    className='cursor-pointer lg:w-[calc(100%-20px)]'
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GuidesQuickAccess.defaultProps = {}

export default GuidesQuickAccess
