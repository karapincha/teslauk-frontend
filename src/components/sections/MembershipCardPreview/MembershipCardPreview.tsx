import React, { FC } from 'react'
import CN from 'classnames'
import { MembershipCard } from '@/components/molecules'
import { useRouter } from 'next/router'

export interface MembershipCardPreviewProps {
  [x: string]: any
}

export const MembershipCardPreview: FC<MembershipCardPreviewProps> = ({
  className,
  data,
  ...restProps
}: MembershipCardPreviewProps) => {
  const MembershipCardPreviewClasses = CN(`membership-card-preview`, className)
  const router = useRouter()
  const { supporterMemberBlock, freeMemberBlock } = data

  const freeList = freeMemberBlock?.features.filter((item: any, index: number) => {
    if (index < 5) {
      return item
    }
  })

  const supporterList = supporterMemberBlock?.features.filter((item: any, index: number) => {
    if (index < 7) {
      return item
    }
  })

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/members')
  }

  return (
    <div className={MembershipCardPreviewClasses} {...restProps}>
      <div className='flex w-full max-w-[1050px] flex-col justify-center gap-[24px] md:grid md:grid-cols-2 lg:grid-cols-[1.5fr_2fr] lg:gap-[48px]'>
        <div className='block'>
          <MembershipCard
            type='secondary'
            heading={freeMemberBlock?.heading}
            price={freeMemberBlock?.price}
            list={freeList}
            ctaBtnText={freeMemberBlock?.primaryButtonText}
            onClickCtaBtn={handleClick}
            className='w-full'
          />
        </div>
        <div className='block'>
          <MembershipCard
            type='primary'
            heading={supporterMemberBlock?.heading}
            description='Annual subscription'
            price={supporterMemberBlock?.price}
            list={supporterList}
            ctaBtnText={supporterMemberBlock?.primaryButtonText}
            onClickCtaBtn={handleClick}
            secondaryCTABtnText={supporterMemberBlock?.secondaryButtonText}
            onClickSecondaryCtaBtn={handleClick}
          />
        </div>
      </div>
    </div>
  )
}

MembershipCardPreview.defaultProps = {}

export default MembershipCardPreview
