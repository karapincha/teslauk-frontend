import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, Button } from '@/components/atoms'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { toast } from '@/components/molecules'
import { NEW_PASSWORD } from '../../../../lib/graphql'

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

  const router = useRouter()
  const [password, setPassword] = useState<any>()
  const [confirmPassword, setConfirmPassword] = useState<any>()

  const [newPassword, { data, loading, error }] = useMutation(NEW_PASSWORD, {
    variables: {
      key: router.query.key,
      login: router.query.login,
      password,
    },
  })

  const handleNewPassword = () => {
    if (!router.query.key || router.query.key === '') {
      toast({ message: 'Invalid key', type: 'error' })
      return
    }
    if (!router.query.login || router.query.login === '') {
      toast({ message: 'Invalid login', type: 'error' })
      return
    }
    if (!password || password === '') {
      toast({ message: 'Please enter password', type: 'error' })
      return
    }
    if (password.length < 6) {
      toast({ message: 'Password should contain at least 6 characters', type: 'error' })
      return
    }
    if (!confirmPassword || confirmPassword === '') {
      toast({ message: 'Please enter confirm password', type: 'error' })
      return
    }
    if (confirmPassword !== password) {
      toast({ message: 'Passwords don`t match', type: 'error' })
      return
    }

    newPassword()
      .then(() => {
        return router.push('/auth/login?passwordChanged=true&login=' + router.query.login)
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  return (
    <div className={NewPasswordClasses} {...restProps}>
      <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>Password reset</h4>

      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-md font-500 text-N-600'>Enter new password</p>
          <TextField
            type='password'
            placeholder='New password'
            onChange={(e: any) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
          <p className='pt-[4px] text-sm font-500 text-N-500'>
            Minimum of 6 characters, with upper and lowercase and a number, or a symbol
          </p>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-md font-400 text-N-600'>Confirm password</p>
          <TextField
            type='password'
            placeholder='Re-type password'
            onChange={(e: any) => {
              setConfirmPassword(e.target.value)
            }}
            value={confirmPassword}
          />
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='pt-[24px]'>
          <Button
            className='w-full text-base !font-600'
            appearance='primary'
            onClick={handleNewPassword}>
            Save password
          </Button>
        </div>
      </div>
    </div>
  )
}

NewPassword.defaultProps = {}

export default NewPassword
