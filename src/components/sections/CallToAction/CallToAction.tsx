import React, { FC } from 'react'
import CN from 'classnames'
import { SectionHeading } from '@/components/molecules'
import { Button } from '@/components/atoms'

export interface CallToActionProps {
  [x: string]: any
}

export const CallToAction: FC<CallToActionProps> = ({
  className,
  ...restProps
}: CallToActionProps) => {
  const CallToActionClasses = CN(`call-to-action py-[116px] bg-B-500`, className)

  return (
    <div className={CallToActionClasses} {...restProps}>
      <div className='container flex rounded-[12px] bg-white py-[72px] px-[100px]'>
        <div className='ml-auto flex max-w-[472px]'>
          <SectionHeading
            overline='Free membership'
            heading='Ready to get onboard?'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            cta={<Button iconAfter={<i className='ri-arrow-right-line text-lg' />}>Sign up</Button>}
          />
        </div>
      </div>
    </div>
  )
}

CallToAction.defaultProps = {}

export default CallToAction
