import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'

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
  type,
  heading,
  onEditClick,
  ...restProps
}: AddressCardProps) => {
  const AddressCardClasses = CN(`address-card flex flex-col relative`, className)

  return (
    <div className={AddressCardClasses} {...restProps}>
      {heading && <h5 className='mb-[12px] mt-0 w-full text-base font-500'>{heading}</h5>}

      <div className='flex w-full flex-col'>
        <h5 className='text-md font-500 text-N-800'>{name}</h5>
        <p
          className='text-md font-400 text-N-800'
          dangerouslySetInnerHTML={{ __html: address || '' }}
        />

        <p className='text-md font-400 text-N-800'>{phoneNumber}</p>
        <p className='text-md font-400 text-N-800'>{email}</p>
      </div>

      {onEditClick && (
        <div className='absolute right-0 top-0'>
          <Button appearance='ghost' size='sm' onClick={onEditClick}>
            <i className='ri-pencil-line text-lg' />
          </Button>
        </div>
      )}
    </div>
  )
}

AddressCard.defaultProps = {}

export default AddressCard
