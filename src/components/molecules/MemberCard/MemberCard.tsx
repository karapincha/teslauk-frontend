import React, { FC } from 'react'
import CN from 'classnames'

import { useAppContext } from '@/context'

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
  const { isSupporter, user, subscription }: any = useAppContext()

  const membershipType = () => {
    if (isSupporter === null || isSupporter === undefined) {
      return 'N/A'
    }

    if (isSupporter) {
      return 'Supporter Membership'
    } else {
      return 'Free Membership'
    }
  }

  return (
    <div
      className={CN(
        `member-card h-[236px] w-full rounded-[8px] bg-cover bg-no-repeat px-[24px] py-[24px] md:w-full lg:w-[368px]`,
        className,
        {
          'bg-[url(/images/supporter-card-bg.png)]': isSupporter,
          'bg-[url(/images/non-supporter-card-bg.png)]': !isSupporter,
        }
      )}
      {...restProps}>
      <div className='logos flex items-center justify-between'>
        <img src='/images/logo-circle.png' width={40} height={40} />

        <a href='#'>
          <img src='/images/wallet.png' width={110} height={34} />
        </a>
      </div>

      <div className='pt-[12px]'>
        <h4 className='text-h5 font-600 text-N-10'>{`${user?.firstName} ${user?.lastName}`}</h4>
        <p className='text-md text-N-10'>{user?.email}</p>

        <div className='grid grid-cols-[1fr_0.5fr] pt-[16px]'>
          <div className='w-fixed text-N-10'>
            <p className='text-md font-600'>Type</p>
            <p className='text-md font-400'>{membershipType()}</p>
          </div>
          <div className='text-N-10'>
            <p className='text-md font-600'>Expiration</p>
            <p className='text-md font-400'>{isSupporter ? subscription?.nextPayment : 'Never'}</p>
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
