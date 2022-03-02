import React, { FC } from 'react'
import CN from 'classnames'

export interface MemberCardProps {
  [x: string]: any
  name?: string
  email?: string
  type?: string
  expireDate?: string
}

export const MemberCard: FC<MemberCardProps> = ({
  className,
  name,
  email,
  type,
  expireDate,
  ...restProps
}: MemberCardProps) => {
  const MemberCardClasses = CN(
    `member-card bg-[url(/images/005.svg)] px-[24px] py-[24px] h-[236px] w-full md:w-full lg:w-[368px] bg-cover bg-no-repeat rounded-[12px]`,
    className
  )

  return (
    <div className={MemberCardClasses} {...restProps}>
      <div className='logos flex items-center justify-between'>
        <img src='/images/logo-circle.png' width={40} height={40} />
        <a href='#'>
          <img src='/images/wallet.png' width={110} height={34} />
        </a>
      </div>
      <div className='pt-[8px]'>
        <h4 className='text-h4 font-600 text-N-10'>{name}</h4>
        <p className='text-base text-N-10'>{email}</p>

        <div className='grid grid-cols-[1fr_0.5fr] pt-[16px]'>
          <div className='w-fixed text-N-10'>
            <p className='text-md font-600'>Type</p>
            <p className='text-base font-400'>{type}</p>
          </div>
          <div className='text-N-10'>
            <p className='text-md font-600'>Expires on</p>
            <p className='text-base font-400'>{expireDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

MemberCard.defaultProps = {
  type: 'Not defined',
}

export default MemberCard
