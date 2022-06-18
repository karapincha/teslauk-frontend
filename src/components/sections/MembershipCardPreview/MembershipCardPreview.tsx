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
      <div className='flex w-full flex-col justify-center gap-[24px] md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-[48px]'>
        <MembershipCard
          type='secondary'
          heading={freeMemberBlock?.heading}
          price={freeMemberBlock?.price}
          list={freeList}
          ctaBtnText={freeMemberBlock?.primaryButtonText}
          onClickCtaBtn={handleClick}
          className='w-full flex-shrink-0 md:w-[unset] lg:w-[368px]'
        />
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
  )
}

MembershipCardPreview.defaultProps = {}

export default MembershipCardPreview
