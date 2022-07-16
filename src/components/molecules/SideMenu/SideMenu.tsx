import React, { FC, useRef } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { useAppContext } from '@/context'

export interface SideMenuProps {
  [x: string]: any
}

export const SideMenu: FC<SideMenuProps> = ({
  className,
  showSideMenu,
  setShowSideMenu,
  menuRef,
  menuItems,
  ...restProps
}: SideMenuProps) => {
  const SideMenuClasses = CN(`side-menu`, className)
  const { sidemenu }: any = useAppContext()

  const dummyList = [
    {
      label: 'Menu item',
      link: '/',
    },
    {
      label: 'Menu item',
      link: '/',
    },
    {
      label: 'Menu item',
      link: '/',
    },
    {
      label: 'Menu item',
      link: '/',
    },
    {
      label: 'Menu item',
      link: '/',
    },
  ]

  return (
    <div className={SideMenuClasses} {...restProps} ref={sidemenu.wrapperRef}>
      <div
        className={CN(
          'left-0 top-0 bottom-0 z-[100] h-full w-full max-w-[300px] bg-white px-[20px] py-[60px] shadow-card-shadow',
          {
            fixed: sidemenu.showSideMenu,
            hidden: !sidemenu.showSideMenu,
          }
        )}>
        <h5 className='px-[20px] pb-[24px] text-h5 text-N-800'>Menu</h5>
        <ul className='flex flex-col'>
          {menuItems?.map((item: any, index: number) => (
            <li key={index} className='flex w-full'>
              <Link href={item.url} passHref>
                <a className='flex w-full rounded-[4px] py-[8px] px-[20px] text-base text-N-600 hover:bg-R-10 hover:text-B-500'>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
