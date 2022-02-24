import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { SectionHeading } from '@/components/molecules'
import { Button } from '@/components/atoms'
import { useViewport } from '@/utils'

export interface CallToActionProps {
  [x: string]: any
}

export const CallToAction: FC<CallToActionProps> = ({
  className,
  ...restProps
}: CallToActionProps) => {
  const CallToActionClasses = CN(
    `call-to-action py-[48px] lg:py-[116px] bg-B-500 bg-[url(/images/call-to-action-pattern.svg)]`,
    className
  )
  const { isDesktop, isMobile, isTablet } = useViewport()

  return (
    <div className={CallToActionClasses} {...restProps}>
      <div className='container relative flex min-h-[482px] w-[calc(100%-20px)] flex-col items-center rounded-[12px] bg-white py-[24px] md:relative md:min-h-[562px] lg:relative lg:min-h-[400px] lg:py-[72px] lg:px-[100px]'>
        <div className='absolute top-[-40px] left-auto right-auto flex h-[264px] w-[340px] md:absolute md:top-[-42px] md:left-auto md:right-auto md:h-[324px] md:w-[424px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[442px] lg:w-[576px]'>
          <img
            src='/images/cta-car.png'
            width={(isMobile && 340) || (isTablet && 424) || 576}
            height={(isMobile && 264) || (isTablet && 324) || 442}
          />
        </div>

        <div className='ml-auto flex text-center lg:max-w-[472px] lg:pt-0 lg:text-left'>
          <SectionHeading
            overline='Free membership'
            heading='Ready to get onboard?'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            cta={
              <Link href='/membership'>
                <Button
                  className='w-full md:w-[unset] lg:w-[unset]'
                  iconAfter={<i className='ri-arrow-right-line text-lg' />}>
                  Sign up
                </Button>
              </Link>
            }
          />
        </div>
      </div>
    </div>
  )
}

CallToAction.defaultProps = {}

export default CallToAction
