import React, { FC } from 'react'
import CN from 'classnames'
import { SectionHeading, MembershipCard } from '@/components/molecules'
import { MembershipCardPreview } from '@/components/sections'

export interface QuickMembershipProps {
  [x: string]: any
}

export const QuickMembership: FC<QuickMembershipProps> = ({
  className,
  data,
  ...restProps
}: QuickMembershipProps) => {
  const QuickMembershipClasses = CN(
    `quick-membership w-full bg-N-50 bg-[url('/images/patterns/002.svg')] bg-cover bg-no-repeat`,
    className
  )

  const { description, subHeading, heading, freeMemberBlock, supporterMemberBlock } = data

  return (
    <div className={QuickMembershipClasses} {...restProps}>
      <div className='container flex flex-col items-center'>
        <div className='mb-[40px] flex items-center justify-between'>
          <SectionHeading
            overline={subHeading}
            heading={heading}
            description={description}
            align='center'
          />
        </div>

        <MembershipCardPreview data={{ supporterMemberBlock, freeMemberBlock }} />
      </div>
    </div>
  )
}

QuickMembership.defaultProps = {}

export default QuickMembership
