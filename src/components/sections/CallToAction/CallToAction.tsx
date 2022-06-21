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
  data,
  ...restProps
}: CallToActionProps) => {
  const CallToActionClasses = CN(
    `call-to-action pb-[48px] pt-[90px] lg:pb-[116px] lg:pt-[160px] bg-B-500 bg-[url(/images/call-to-action-pattern.svg)]`,
    className
  )
  const { isDesktop, isMobile, isTablet } = useViewport()

  const { heading, subHeading, description, image, primaryButtonText } = data

  return (
    <div className={CallToActionClasses} {...restProps}>
      <div className='container relative flex min-h-[482px] w-[calc(100%-20px)] flex-col-reverse items-center gap-[48px] rounded-[8px] bg-white py-[24px] md:relative md:min-h-[562px] lg:relative lg:min-h-[400px] lg:justify-center lg:py-[72px] lg:px-[100px]'>
        <div className='absolute top-[-40px] left-auto right-auto flex h-[264px] w-[340px] md:absolute md:top-[-42px] md:left-auto md:right-auto md:h-[324px] md:w-[424px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[442px] lg:w-[576px]'>
          <img
            src={image?.mediaItemUrl}
            width={(isMobile && 340) || (isTablet && 424) || 576}
            height={(isMobile && 264) || (isTablet && 324) || 442}
          />
        </div>

        <div className='flex text-center lg:ml-auto lg:flex lg:max-w-[472px] lg:justify-center lg:pt-0 lg:text-left'>
          <SectionHeading
            align={(!isDesktop && 'center') || 'left'}
            overline={subHeading}
            heading={heading}
            description={description}
            cta={
              <Link href='/membership'>
                <Button
                  className='w-full md:w-[264px] lg:w-[unset]'
                  iconAfter={<i className='ri-arrow-right-line text-lg' />}>
                  {primaryButtonText}
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
