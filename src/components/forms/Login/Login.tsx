import React, { FC } from 'react'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, CheckBox, Button } from '@/components/atoms'

export interface LoginProps {
  [x: string]: any
}

export const Login: FC<LoginProps> = ({ className, ...restProps }: LoginProps) => {
  const LoginClasses = CN(
    `login bg-white rounded-[8px] px-[16px] md:px-[40px] lg:px-[40px] py-[24px] md:py-[32px] lg:py-[32px] w-full`,
    className
  )

  return (
    <div className={LoginClasses} {...restProps}>
      <h4 className='pb-[24px] text-center text-h4 font-600 text-N-800'>Login</h4>
      <div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[4px]'>
            <p className='text-md font-500 text-N-600'>Username or email address</p>
            <TextField placeholder='Enter username or email' />
          </div>
          <div className='flex flex-col gap-[4px]'>
            <p className='text-md font-500 text-N-600'>Password</p>
            <TextField type='password' placeholder='Enter password here' />
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
            <a href='#' target='_blank'>
              Forgot your password?
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-[24px] pt-[24px]'>
          <div className=''>
            <Link href='#'>
              <Button className='w-full text-base !font-600' appearance='primary'>
                Log in
              </Button>
            </Link>
          </div>

          <div className='relative flex'>
            <span className='h-[1px] w-full bg-N-300'>
              {' '}
              <span className='relative top-[-15px] left-[30%] bg-white px-[8px]'>
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
