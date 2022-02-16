import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { SectionHeading } from '@/components/molecules'
import { Button } from '@/components/atoms'

export interface CallToActionProps {
  [x: string]: any
}

export const CallToAction: FC<CallToActionProps> = ({
  className,
  ...restProps
}: CallToActionProps) => {
  const CallToActionClasses = CN(
    `call-to-action py-[116px] bg-B-500 bg-[url(/images/call-to-action-pattern.svg)]`,
    className
  )

  return (
    <div className={CallToActionClasses} {...restProps}>
      <div className='container relative flex min-h-[400px] items-center rounded-[12px] bg-white py-[72px] px-[100px]'>
        <div className='absolute bottom-0 left-0 flex h-[442px] w-[576px]'>
          <img src='/images/cta-car.png' width={576} height={442} />
        </div>

        <div className='ml-auto flex max-w-[472px]'>
          <SectionHeading
            overline='Free membership'
            heading='Ready to get onboard?'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            cta={
              <Link href='/membership'>
                <Button iconAfter={<i className='ri-arrow-right-line text-lg' />}>Sign up</Button>
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
