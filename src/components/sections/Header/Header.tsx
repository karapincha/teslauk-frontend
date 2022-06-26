import React, { FC, useRef } from 'react'
import CN from 'classnames'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { Hamburger } from '@/components/atoms/Hamburger'
import Link from 'next/link'
import { useViewport } from '@/utils'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({
  className,
  showSideMenu,
  setShowSideMenu,
  hamburgerRef,
  ...restProps
}: HeaderProps) => {
  const HeaderClasses = CN(`header flex w-full lg:h-[148px] flex items-center`, className)
  const { isTablet, isMobile, isDesktop } = useViewport()

  return (
    <div className={HeaderClasses} {...restProps}>
      <div className='container relative flex items-center justify-between'>
        <div className='header__left relative z-10 flex items-center'>
          <Hamburger
            showSideMenu={showSideMenu}
            setShowSideMenu={setShowSideMenu}
            className='mr-[32px]'
            hamburgerRef={hamburgerRef}
          />

          <div className='hidden items-center gap-[32px] lg:flex'>
            <Link href='/suppliers' passHref>
              <Button appearance='link' view='outline'>
                Suppliers
              </Button>
            </Link>

            <Link href='/guides' passHref>
              <Button appearance='link' view='outline'>
                Guides
              </Button>
            </Link>

            <Link href='/initiatives' passHref>
              <Button appearance='link' view='outline'>
                Initiatives
              </Button>
            </Link>
          </div>
        </div>

        <div className='header__center absolute left-0 z-0 flex w-full items-center justify-center'>
          <Link href='/' passHref>
            <Logo className='cursor-pointer' size={isMobile ? 52 : isTablet ? 68 : 100} />
          </Link>
        </div>

        <div className='header__right relative z-10 hidden items-center gap-[28px] md:flex'>
          <Link href='/team' passHref>
            <Button appearance='link' view='outline'>
              Team
            </Button>
          </Link>

          <Link href='/discussion' passHref>
            <Button appearance='link' view='outline'>
              Discussion
            </Button>
          </Link>

          <Link href='/shop' passHref>
            <Button appearance='link' view='outline'>
              Shop
            </Button>
          </Link>

          <Button icon={<i className='ri-search-2-line text-lg' />} appearance='link' />

          <Link href='/login'>
            <Button view='outline' className='hidden lg:inline'>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {}

export default Header
