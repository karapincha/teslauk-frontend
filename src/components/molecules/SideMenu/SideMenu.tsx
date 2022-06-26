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
  ...restProps
}: SideMenuProps) => {
  const SideMenuClasses = CN(`side-menu`, className)
  const { sideMenu }: any = useAppContext()

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
    <div className={SideMenuClasses} {...restProps} ref={sideMenu.wrapperRef}>
      <div
        className={CN(
          'left-0 top-0 bottom-0 z-[100] h-full w-full max-w-[300px] bg-white px-[20px] py-[60px] shadow-card-shadow',
          {
            fixed: sideMenu.showSideMenu,
            hidden: !sideMenu.showSideMenu,
          }
        )}>
        <h5 className='px-[20px] pb-[24px] text-h5 text-N-800'>Menu</h5>
        <ul className='flex flex-col'>
          {dummyList.map((item, index) => (
            <li key={index} className='flex w-full'>
              <Link href={item.link} passHref>
                <a className='flex w-full rounded-[4px] py-[8px] px-[20px] text-base text-N-600 hover:bg-R-10 hover:text-B-500'>
                  {item.label}
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
