import React, { FC } from 'react'
import CN from 'classnames'
import { MembershipCard } from '@/components/molecules'

export interface MembershipCardPreviewProps {
  [x: string]: any
}

export const MembershipCardPreview: FC<MembershipCardPreviewProps> = ({
  className,
  ...restProps
}: MembershipCardPreviewProps) => {
  const MembershipCardPreviewClasses = CN(`membership-card-preview`, className)

  return (
    <div className={MembershipCardPreviewClasses} {...restProps}>
      <div className='flex w-full flex-col justify-center gap-[24px] md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-[48px]'>
        <MembershipCard
          type='secondary'
          heading='Member'
          price='Free'
          list={[
            'Full access to our extensive resources',
            'Monthly email newsletter',
            'Various discussion Groups',
            'New owner onboarding',
            'Access to some club events',
          ]}
          ctaBtnText='Join'
          onClickCtaBtn={() => {}}
          className='w-full flex-shrink-0 md:w-[unset] lg:w-[368px]'
        />
        <MembershipCard
          type='primary'
          heading='Supporter'
          description='Annual subscription'
          price='£35'
          list={[
            'Full access to our extensive resources',
            'Monthly email newsletter',
            'Various discussion groups',
            'New owner onboarding',
            'Access to all club events',
          ]}
          ctaBtnText='Become a supporter'
          onClickCtaBtn={() => {}}
          secondaryCTABtnText='See more benefits'
          onClickSecondaryCtaBtn={() => {}}
        />
      </div>
    </div>
  )
}

MembershipCardPreview.defaultProps = {}

export default MembershipCardPreview
