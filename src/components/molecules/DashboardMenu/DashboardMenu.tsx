import React, { FC } from 'react'
import CN from 'classnames'
import { Grid, Tag, User, Settings, MapPin, Download, Bell } from 'react-feather'
import Link from 'next/link'

import { useRouter } from 'next/router'

export interface DashboardMenuProps {
  [x: string]: any
  isActive?: boolean
}

export const DashboardMenu: FC<DashboardMenuProps> = ({
  className,
  isActive,
  ...restProps
}: DashboardMenuProps) => {
  const DashboardMenuClasses = CN(`dashboard-menu w-full`, className)
  const router = useRouter()

  const dashboardMenuList = [
    {
      id: '0',
      icon: <Grid size={20} />,
      label: 'Dashboard',
      url: '/account',
      isActive: router.pathname === '/account',
    },
    {
      id: '1',
      icon: <Tag size={20} />,
      label: 'Purchases',
      url: '/account/purchases',
      isActive: router.pathname === '/account/purchases',
    },
    // {
    //   id: '2',
    //   icon: <User size={20} />,
    //   label: 'Membership',
    //   url: '/account/membership',
    //   isActive: router.pathname === '/account/membership',
    // },
    {
      id: '3',
      icon: <Settings size={20} />,
      label: 'Account',
      url: '/account/manage',
      isActive: router.pathname === '/account/manage',
    },
    {
      id: '4',
      icon: <MapPin size={20} />,
      label: 'Addresses',
      url: '/account/addresses',
      isActive: router.pathname === '/account/addresses',
    },
    {
      id: '5',
      icon: <Download size={20} />,
      label: 'Downloads',
      url: '/account/downloads',
      isActive: router.pathname === '/account/downloads',
    },
    {
      id: '6',
      icon: <Bell size={20} />,
      label: 'Alerts',
      url: '/account/alerts',
      isActive: router.pathname === '/account/alerts',
    },
    {
      id: '7',
      icon: <i className='ri-logout-circle-line text-lg' />,
      label: 'Logout',
      url: '/auth/logout',
      isActive: false,
    },
  ]

  return (
    <div className={DashboardMenuClasses} {...restProps}>
      <ul className='flex flex-col gap-[8px]'>
        {dashboardMenuList.map(({ id, url, label, icon, isActive }, index) => (
          <li key={id || index} className='flex justify-between'>
            <Link href={url}>
              <a
                className={CN(
                  `flex h-full w-full items-center gap-[8px] rounded-[4px] py-[8px] pl-[12px] hover:bg-N-50 hover:text-N-800`,
                  {
                    'text-N-600': !isActive,
                    'text-B-500': isActive,
                  }
                )}>
                <span>{icon}</span>
                <p className='text-md group-hover:text-N-800'>{label}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

DashboardMenu.defaultProps = {}

export default DashboardMenu
