import React, { FC } from 'react'
import CN from 'classnames'

export interface AddressCardProps {
  [x: string]: any
  name?: string
  address?: string
  phoneNumber?: string
  email?: string
}

export const AddressCard: FC<AddressCardProps> = ({
  className,
  name,
  address,
  phoneNumber,
  email,
  ...restProps
}: AddressCardProps) => {
  const AddressCardClasses = CN(`address-card flex justify-between items-center`, className)

  return (
    <div className={AddressCardClasses} {...restProps}>
      <div className='flex flex-col'>
        <h5 className='text-h5 font-500 text-N-800'>{name}</h5>
        <p
          className='w-[295px] text-base font-400 text-N-800 md:w-full'
          dangerouslySetInnerHTML={{ __html: address || '' }}
        />

        <p className='text-base font-400 text-N-800'>{phoneNumber}</p>
        <p className='text-base font-400 text-N-800'>{email}</p>
      </div>
      {/* Edit icon */}
      <div>
        <i className='ri-pencil-line text-[24px] text-N-300' />
      </div>
    </div>
  )
}

AddressCard.defaultProps = {}

export default AddressCard
