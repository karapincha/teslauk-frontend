import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

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
  const BreadcrumbClasses = CN(`breadcrumb w-full`, className, {})

  return (
    <div className={BreadcrumbClasses} {...restProps}>
      <ul className='flex text-base font-500'>
        {(links || []).map(({ id, name, slug, isActive }, index) => {
          return (
            <li className='group flex items-center' key={id || index}>
              <Link href={`/suppliers/tag/${slug}`}>
                <a
                  className={CN(`breadcrumb__item flex text-md`, {
                    'text-N-500 hover:text-B-500': !isActive,
                    'text-B-500': isActive,
                  })}>
                  {name}
                </a>
              </Link>
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
