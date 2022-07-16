import React, { FC } from 'react'
import CN from 'classnames'
import { Grid, Tag, User, Settings, MapPin, Download, Bell } from 'react-feather'
import Link from 'next/link'

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

  const dashboardMenuList = [
    {
      id: '0',
      icon: <Grid size={20} />,
      label: 'Dashboard',
      url: '#',
      isActive: true,
    },
    {
      id: '1',
      icon: <Tag size={20} />,
      label: 'Purchases',
      url: '#',
      isActive: false,
    },
    {
      id: '2',
      icon: <User size={20} />,
      label: 'Membership',
      url: '#',
      isActive: false,
    },
    {
      id: '3',
      icon: <Settings size={20} />,
      label: 'Account',
      url: '#',
      isActive: false,
    },
    {
      id: '4',
      icon: <MapPin size={20} />,
      label: 'Addresses',
      url: '#',
      isActive: false,
    },
    {
      id: '5',
      icon: <Download size={20} />,
      label: 'Downloads',
      url: '#',
      isActive: false,
    },
    {
      id: '6',
      icon: <Bell size={20} />,
      label: 'Alerts',
      url: '#',
      isActive: false,
    },
    {
      id: '6',
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
          <li
            key={id || index}
            className='flex justify-between py-[8px] pl-[12px] hover:rounded-[4px] hover:bg-N-50'>
            <Link href={url}>
              <a
                className={CN(`flex items-center gap-[8px]  hover:font-600 hover:text-N-800`, {
                  'text-N-600': !isActive,
                  'text-B-500': isActive,
                })}>
                <span>{icon}</span>
                <p className='text-base font-600  hover:text-N-800'>{label}</p>
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
