import React, { FC } from 'react'
import CN from 'classnames'
import { Avatar } from '@/components/atoms'
import { LinkedIn, Mail } from '@/icons'
import { useViewport } from '@/utils'
import Link from 'next/link'

export interface TeamMemberProps {
  [x: string]: any
}

export const TeamMember: FC<TeamMemberProps> = ({
  className,
  name,
  role,
  image,
  linkedIn,
  mail,
  isDataPublic,
  ...restProps
}: TeamMemberProps) => {
  const TeamMemberClasses = CN(
    `team-member bg-white shadow-card-shadow h-full pb-[12px] md:pb-[36px]  w-[100%] flex flex-col items-center pt-[24px] md:pt-[36px] rounded-[8px]`,
    className
  )

  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={TeamMemberClasses} {...restProps}>
      <img
        src={image}
        className='h-[100px] w-[100px] rounded-full object-cover object-center md:h-[120px] md:w-[120px]'
        width={(isDesktop && 200) || (isTablet && 150) || 100}
        height={(isDesktop && 200) || (isTablet && 150) || 100}
      />

      <div className='flex flex-col items-center px-[16px] pt-[12px] lg:pt-[22px]'>
        <div className='flex flex-col pb-[16px]'>
          <h4 className='text-center text-base font-600 text-N-800'>{name}</h4>
          <h5 className='px-[40px] text-center text-md font-500 text-N-500'>{role}</h5>
        </div>

        {isDataPublic === 'Yes' && (
          <div className='flex items-center gap-[16px]'>
            {linkedIn && (
              <Link href={linkedIn || ''}>
                <a className='text-N-500'>
                  <LinkedIn size={16} />
                </a>
              </Link>
            )}

            {mail && (
              <Link href={`mailto:${mail}` || ''}>
                <a className='text-N-500'>
                  <Mail size={20} />
                </a>
              </Link>
            )}
          </div>
        )}

        {isDataPublic === 'No' && (
          <div className='flex items-center gap-[16px] font-500 text-center text-xs uppercase text-N-500'>
            Please log-in to <br />view contact details
          </div>
        )}
      </div>
    </div>
  )
}

TeamMember.defaultProps = {}

export default TeamMember
