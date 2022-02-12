import { Grid, FileText, Settings, Package, LogOut } from 'react-feather'

export const dashboardMenu = [
  {
    id: 0,
    label: 'Dashboard',
    icon: Grid,
    onClick: () => {},
  },
  {
    id: 1,
    label: 'My orders',
    icon: FileText,
    onClick: () => {},
  },
  {
    id: 2,
    label: 'Account settings',
    icon: Settings,
    onClick: () => {},
    subMenu: [
      {
        id: 0,
        label: 'Profile information',
        onClick: () => {},
      },
      {
        id: 1,
        label: 'Manage addresses',
        onClick: () => {},
      },
      {
        id: 2,
        label: 'Password settings',
        onClick: () => {},
      },
    ],
  },
  {
    id: 3,
    label: 'Extras',
    icon: Package,
    onClick: () => {},
    subMenu: [
      {
        id: 0,
        label: 'Quotations',
        onClick: () => {},
      },
      {
        id: 1,
        label: 'Return requests',
        onClick: () => {},
      },
    ],
  },
  {
    id: 4,
    label: 'Logout',
    icon: LogOut,
    onClick: () => {},
  },
]
