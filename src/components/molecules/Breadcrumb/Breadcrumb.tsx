import React, { FC } from 'react'
import CN from 'classnames'

export interface BreadcrumbItemProps {
  [x: string]: any
  id?: number | string
  linkText: string
  link: string
  isActive?: boolean
}

export interface BreadcrumbProps {
  [x: string]: any
  links: BreadcrumbItemProps[]
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  className,
  links,
  ...restProps
}: BreadcrumbProps) => {
  const BreadcrumbClasses = CN(`breadcrumb`, className, {})

  const linksList = [
    {
      id: 0,
      linkText: 'Home',
      link: '/',
      isActive: false,
    },
    {
      id: 1,
      linkText: 'Sample',
      link: '/sample',
      isActive: false,
    },
    {
      id: 2,
      linkText: 'Facility',
      link: '/facility',
      isActive: false,
    },
    {
      id: 3,
      linkText: 'Wardrobes',
      link: '/wardrobes',
      isActive: true,
    },
  ]

  return (
    <div className={BreadcrumbClasses} {...restProps}>
      <ul className='flex text-base font-600'>
        {(links || linksList).map(({ id, linkText, link, isActive }, index) => {
          return (
            <li className='group flex items-center' key={id || index}>
              <a
                className={CN(`breadcrumb__item`, {
                  'text-N-500 hover:text-B-500': !isActive,
                  'text-B-500': isActive,
                })}
                href={link}>
                {linkText}
              </a>
              <span className='px-[4px] text-N-500 group-last:hidden'>/</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Breadcrumb.defaultProps = {}

export default Breadcrumb
