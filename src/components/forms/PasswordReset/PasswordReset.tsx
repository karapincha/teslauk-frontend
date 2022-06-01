import React, { FC } from 'react'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, CheckBox, Button } from '@/components/atoms'

export interface PasswordResetProps {
  [x: string]: any
}

export const PasswordReset: FC<PasswordResetProps> = ({
  className,
  ...restProps
}: PasswordResetProps) => {
  const PasswordResetClasses = CN(
    `password-reset bg-white rounded-[8px] px-[16px] md:px-[40px] lg:px-[40px] py-[24px] md:py-[32px] lg:py-[32px] w-full`,
    className
  )

  return (
    <div className={PasswordResetClasses} {...restProps}>
      <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>Password reset</h4>

      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-md font-500 text-N-600'>
            Enter you email address. We will send you the password reset link
          </p>
          <TextField placeholder='Enter username or email' />
        </div>
      </div>

      <div className='flex flex-col gap-[24px] pt-[24px]'>
        <div className=''>
          <Link href='#'>
            <Button className='w-full text-base !font-600' appearance='primary'>
              Send
            </Button>
          </Link>
        </div>

        <div className='relative flex'>
          <span className='h-[1px] w-full bg-N-300'>
            <span className='relative top-[-15px] left-[18%] bg-white px-[8px] md:left-[24%]'>
              Already have an account?
            </span>
          </span>
        </div>

        <Link href='#'>
          <Button className='w-full text-base !font-600 !text-N-800' appearance='secondary'>
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  )
}

PasswordReset.defaultProps = {}

export default PasswordReset
