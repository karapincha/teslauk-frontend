import React, { FC } from 'react'
import CN from 'classnames'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { Hamburger } from '@/components/atoms/Hamburger'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({ className, ...restProps }: HeaderProps) => {
  const HeaderClasses = CN(`header w-full h-[40px] flex items-center pt-[80px]`, className, {})

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
            <Button appearance='link' view='outline'>
              Guides
            </Button>
          </div>
        </div>

        <div className='header__center absolute left-0 z-0 flex w-full items-center justify-center'>
          <Logo />
        </div>

        <div className='header__right relative z-10 flex items-center gap-[28px]'>
          <Button icon={<i className='ri-search-2-line text-lg' />} appearance='link' />
          <Button view='outline'>Login</Button>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {}

export default Header
