import React, { FC } from 'react'
import CN from 'classnames'
import { Avatar } from '@/components/atoms'
import { LinkedIn, Mail } from '@/icons'
import { useViewport } from '@/utils'

export interface TeamMemberProps {
  [x: string]: any
  name?: string
  role?: string
  image?: string
  linkedIn?: string
  mail?: string
}

export const TeamMember: FC<TeamMemberProps> = ({
  className,
  name,
  role,
  image,
  linkedIn,
  mail,
  ...restProps
}: TeamMemberProps) => {
  const TeamMemberClasses = CN(
    `team-member bg-white border border-N-100 h-full pb-[12px] md:pb-[36px] lg:pb-[40px] lg:w-[368px] lg:h-[440px] flex flex-col items-center pt-[24px] md:pt-[36px] lg:pt-[42px] rounded-[8px]`,
    className
  )

  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={TeamMemberClasses} {...restProps}>
      <img
        src={image}
        className='h-[100px] w-[100px] rounded-full object-cover object-center md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]'
        width={(isDesktop && 200) || (isTablet && 150) || 100}
        height={(isDesktop && 200) || (isTablet && 150) || 100}
      />

      <div className='flex flex-col items-center px-[16px] pt-[12px] lg:pt-[22px]'>
        <h4 className='pb-[4px] text-center text-base font-600 text-N-800 lg:pb-[12px] lg:text-h4'>
          {name}
        </h4>
        <h5 className='pb-[12px] text-center text-base font-500 text-N-500 lg:text-h5'>{role}</h5>
        <div className='flex items-center gap-[16px]'>
          <a href={linkedIn} className='text-N-500'>
            <LinkedIn size={20} />
          </a>
          <a href={mail} className='text-N-500'>
            <Mail />
          </a>
        </div>
      </div>
    </div>
  )
}

TeamMember.defaultProps = {}

export default TeamMember
