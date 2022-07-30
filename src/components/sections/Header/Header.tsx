import React, { FC, useRef, useEffect } from 'react'
import CN from 'classnames'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { Hamburger } from '@/components/atoms/Hamburger'
import Link from 'next/link'
import { useViewport, useLoggedInUser } from '@/utils'
import { useAppContext } from '@/context'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({
  className,
  showSideMenu,
  setShowSideMenu,
  hamburgerRef,
  menuItems,
  ...restProps
}: HeaderProps) => {
  const HeaderClasses = CN(
    `header flex w-full lg:h-[148px] flex items-center pt-[24px] lg:pt-0`,
    className
  )
  const { isTablet, isMobile, isDesktop } = useViewport()
  const { sidemenu, header, footer, suppliers, user, isLoading, cart }: any = useAppContext()

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
            {menuItems?.leftMenu?.map(({ name, url }: any, index: number) => {
              return (
                <Link href={url || ''} passHref key={index}>
                  <Button appearance='link' view='outline'>
                    {name}
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>

        <div className='header__center absolute flex w-full items-center justify-center'>
          <Link href='/' passHref>
            <Logo className='cursor-pointer' size={isMobile ? 52 : isTablet ? 68 : 100} />
          </Link>
        </div>

        <div className='header__right relative hidden items-center gap-[28px] md:flex'>
          {menuItems?.rightMenu?.map(({ name, url }: any, index: number) => {
            return (
              <Link href={url || ''} passHref key={index}>
                <Button appearance='link' view='outline'>
                  {name}
                </Button>
              </Link>
            )
          })}

          <div className='flex items-center gap-[20px]'>
            <Link href='/shop/checkout'>
              <Button
                icon={<i className='ri-shopping-cart-line text-lg' />}
                appearance='link'
                sup={cart?.contents?.itemCount === 0 ? null : cart?.contents?.itemCount}
              />
            </Link>

            <Button icon={<i className='ri-search-2-line text-lg' />} appearance='link' />

            {!user && !user?.id ? (
              <Link href='/auth/login'>
                <Button view='outline' className='hidden lg:flex' size='sm'>
                  Login
                </Button>
              </Link>
            ) : (
              <Link href='/account'>
                <Button
                  view='outline'
                  className='hidden lg:flex'
                  size='sm'
                  iconBefore={<i className='ri-user-3-line text-lg' />}>
                  Account
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {}

export default Header
