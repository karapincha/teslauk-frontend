import React, { FC, useState, useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, CheckBox, Button } from '@/components/atoms'
import { LOGIN } from '../../../../lib/graphql'
import { toast } from '@/components/molecules'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context'

export interface LoginProps {
  [x: string]: any
}

export const Login: FC<LoginProps> = ({ className, ...restProps }: LoginProps) => {
  const LoginClasses = CN(
    `login bg-white shadow-card rounded-[8px] px-[16px] md:px-[40px] lg:px-[40px] py-[24px] md:py-[32px] lg:py-[32px] w-full`,
    className
  )

  const router = useRouter()
  const { setToken }: any = useAppContext()

  const [username, setUsername] = useState<any>(router.query.login)
  const [password, setPassword] = useState<any>()

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    variables: {
      username,
      password,
    },
  })

  useEffect(() => {
    if (router.query.passwordChanged === 'true') {
      toast({ message: 'Password changed successfully', type: 'success' })
    }
    if (router.query.newPasswordRequested === 'true') {
      toast({ message: 'Password reset link sent to your inbox.', type: 'success' })
    }
    if (router.query.newAccountCreated === 'true') {
      toast({
        message: 'Your account has been created. Please login using your email and password ',
        type: 'success',
      })
    }
  }, [router])

  const handleLogin = () => {
    if (!username || username === '') {
      toast({ message: 'Please enter username', type: 'error' })
      return
    }

    if (!password || password === '') {
      toast({ message: 'Please enter password', type: 'error' })
      return
    }

    login()
      .then(({ data }: any) => {
        localStorage.setItem('token', data?.login?.authToken)
        setToken(data?.login?.authToken)
        router.push('/dashboard')
      })
      .catch((e: any) => {
        return toast({ message: e.message, type: 'error' })
      })
  }

  const handleQueryParams = () => {
    if (router.query.passwordChanged) {
      router.push({ query: {} })
    }
    if (router.query.newPasswordRequested) {
      router.push({ query: {} })
    }
  }

  return (
    <div className={LoginClasses} {...restProps}>
      <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>Login</h4>
      <div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[4px]'>
            <p className='text-md font-500 text-N-600'>Email address or Username</p>

            <TextField
              placeholder='Enter email or username'
              onChange={(e: any) => {
                setUsername(e.target.value)
                handleQueryParams()
              }}
              onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  handleLogin()
                }
              }}
              value={username}
            />
          </div>

          <div className='flex flex-col gap-[4px]'>
            <p className='text-md font-500 text-N-600'>Password</p>

            <TextField
              type='password'
              placeholder='Enter password'
              onChange={(e: any) => {
                setPassword(e.target.value)
                handleQueryParams()
              }}
              onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  handleLogin()
                }
              }}
              value={password}
              autoFocus={router.query.login}
            />
          </div>
        </div>

        <div className='flex flex-col justify-between pt-[16px] md:flex-row md:pt-[24px] lg:flex-row lg:pt-[24px]'>
          <div className='flex items-center gap-[12px]'>
            <div>
              <CheckBox />
            </div>
            <p className='text-md font-500 text-N-600'>Remember me</p>
          </div>

          <div className='pt-[24px] text-center text-md font-500 text-N-800 md:pt-0 md:text-left lg:pt-0 lg:text-left'>
            <Link href='/auth/forgot-password'>
              <a href='#'>Forgot your password?</a>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-[32px] pt-[24px]'>
          <div className=''>
            <Link href='#'>
              <Button
                className='w-full text-base !font-600'
                appearance='primary'
                onClick={handleLogin}
                isLoading={loading}>
                Log in
              </Button>
            </Link>
          </div>

          <div className='relative flex'>
            <span className='h-[1px] w-full bg-N-300'>
              <span className='relative top-[-15px] left-[30%] bg-white px-[8px] text-md'>
                Not a member yet?
              </span>
            </span>
          </div>

          <div className=''>
            <Link href='#'>
              <Button className='w-full text-base !font-600 !text-N-800' appearance='secondary'>
                Get membership
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.defaultProps = {}

export default Login
