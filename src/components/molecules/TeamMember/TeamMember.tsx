import React, { FC } from 'react'
import CN from 'classnames'
import { Avatar } from '@/components/atoms'
import { LinkedIn, Mail } from '@/icons'

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
    `team-member bg-white border border-N-100 w-[368px] h-[440px] flex flex-col items-center pt-[42px] rounded-[12px]`,
    className
  )

  return (
    <div className={TeamMemberClasses} {...restProps}>
      <Avatar image={image} size='xl' rounded='full' />
      <div className='flex flex-col items-center gap-[12px] pt-[22px] px-[16px]'>
        <h4 className='text-h4 font-600 text-N-800 text-center'>{name}</h4>
        <h5 className='text-h5 font-500 text-N-500 text-center'>{role}</h5>
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
