import React, { FC } from 'react'
import CN from 'classnames'
import { MembershipCard } from '@/components/molecules'

export interface MembershipCardPreviewProps {
  [x: string]: any
}

export const MembershipCardPreview: FC<MembershipCardPreviewProps> = ({
  className,
  data,
  ...restProps
}: MembershipCardPreviewProps) => {
  const MembershipCardPreviewClasses = CN(`membership-card-preview`, className)
  const { supporterMemberBlock, freeMemberBlock } = data

  return (
    <div className={MembershipCardPreviewClasses} {...restProps}>
      <div className='flex w-full flex-col justify-center gap-[24px] md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-[48px]'>
        <MembershipCard
          type='secondary'
          heading={freeMemberBlock?.heading}
          price={freeMemberBlock?.price}
          list={freeMemberBlock?.features}
          ctaBtnText={freeMemberBlock?.primaryButtonText}
          onClickCtaBtn={() => {
            '/login'
          }}
          className='w-full flex-shrink-0 md:w-[unset] lg:w-[368px]'
        />
        <MembershipCard
          type='primary'
          heading={supporterMemberBlock?.heading}
          description='Annual subscription'
          price={supporterMemberBlock?.price}
          list={supporterMemberBlock?.features}
          ctaBtnText={supporterMemberBlock?.primaryButtonText}
          onClickCtaBtn={() => {}}
          secondaryCTABtnText={supporterMemberBlock?.secondaryButtonText}
          onClickSecondaryCtaBtn={() => {}}
        />
      </div>
    </div>
  )
}

MembershipCardPreview.defaultProps = {}

export default MembershipCardPreview
