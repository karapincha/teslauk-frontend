import React, { FC } from 'react'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, Button } from '@/components/atoms'

export interface NewPasswordProps {
  [x: string]: any
}

export const NewPassword: FC<NewPasswordProps> = ({
  className,
  ...restProps
}: NewPasswordProps) => {
  const NewPasswordClasses = CN(
    `new-password shadow-card bg-white rounded-[8px] px-[16px] md:px-[40px] py-[24px] lg:py-[48px] w-full`,
    className
  )

  return (
    <div className={NewPasswordClasses} {...restProps}>
      <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>Password reset</h4>

      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-md font-500 text-N-600'>Enter new password</p>
          <TextField placeholder='New password' />
          <p className='pt-[4px] text-sm font-500 text-N-500'>
            Minimum of 6 characters, with upper and lowercase and a number, or a symbol
          </p>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-md font-400 text-N-600'>Confirm password</p>
          <TextField placeholder='Re-type password' />
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='pt-[24px]'>
          <Link href='#'>
            <Button className='w-full text-base !font-600' appearance='primary'>
              Save
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

NewPassword.defaultProps = {}

export default NewPassword
