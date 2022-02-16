import React, { FC } from 'react'
import CN from 'classnames'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { Hamburger } from '@/components/atoms/Hamburger'
import Link from 'next/link'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({ className, ...restProps }: HeaderProps) => {
  const HeaderClasses = CN(
    `header flex w-full h-[148px] flex items-center`,
    className
  )

  return (
    <div className={HeaderClasses} {...restProps}>
      <div className='container relative flex items-center justify-between'>
        <div className='header__left relative z-10 flex items-center'>
          <Hamburger className='mr-[32px]' />

          <div className='flex items-center gap-[32px]'>
            <Button appearance='link' view='outline'>
              Events
            </Button>
            <Button appearance='link' view='outline'>
              Suppliers
            </Button>

            <Link href='/guides' passHref>
              <Button appearance='link' view='outline'>
                Guides
              </Button>
            </Link>
          </div>
        </div>

        <div className='header__center absolute left-0 z-0 flex w-full items-center justify-center'>
          <Link href='/' passHref>
            <Logo className='cursor-pointer' />
          </Link>
        </div>

        <div className='header__right relative z-10 flex items-center gap-[28px]'>
          <Button icon={<i className='ri-search-2-line text-lg' />} appearance='link' />

          <Link href='/login'>
            <Button view='outline'>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {}

export default Header
