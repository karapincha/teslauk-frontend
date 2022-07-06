import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, CheckBox, Button } from '@/components/atoms'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { toast } from '@/components/molecules'
import { RESET_PASSWORD } from '../../../../lib/graphql'

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

  const router = useRouter()
  const [username, setUsername] = useState<any>()

  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD, {
    variables: {
      username,
    },
  })

  const handlePasswordReset = () => {
    if (!username || username === '') {
      toast({ message: 'Please enter username', type: 'error' })
      return
    }

    resetPassword()
      .then(() => {
        return router.push('/auth/login?newPasswordRequested=true')
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  return (
    <div className={PasswordResetClasses} {...restProps}>
      <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>Password reset</h4>

      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='mb-[12px] text-md font-500 text-N-600'>
            We will send you the password reset link.
          </p>

          <TextField
            placeholder='Enter username or email'
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                handlePasswordReset()
              }
            }}
            value={username}
            onChange={(e: any) => {
              setUsername(e.target.value)
            }}
          />
        </div>
      </div>

      <div className='flex flex-col gap-[32px] pt-[24px]'>
        <div className=''>
          <Button
            className='w-full text-base !font-600'
            appearance='primary'
            onClick={handlePasswordReset}>
            Reset password
          </Button>
        </div>

        <div className='relative flex'>
          <span className='h-[1px] w-full bg-N-300'>
            <span className='relative top-[-15px] left-[80px] bg-white px-[8px] text-md'>
              Already have an account?
            </span>
          </span>
        </div>

        <Link href='/auth/login'>
          <Button className='w-full text-base !font-600 !text-N-800' appearance='secondary'>
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}

PasswordReset.defaultProps = {}

export default PasswordReset
