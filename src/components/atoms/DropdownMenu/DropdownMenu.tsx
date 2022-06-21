import React, { FC, useEffect, useState } from 'react'
import CN from 'classnames'

export interface DropdownMenuProps {
  [x: string]: any
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  className,
  list,
  disabled,
  isError,
  ...restProps
}: DropdownMenuProps) => {
  const DropdownMenuClasses = CN(
    `dropdown-menu bg-white border rounded-[4px] border-N-300 outline-none focus-within:border-B-400 focus-within:shadow-[inset_0px_0px_0px_1px_#E31937] h-[38px] flex items-center relative z-[1]`,
    className
  )
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    setMenuItems(list)
  }, [list])

  return (
    <div className={DropdownMenuClasses} {...restProps}>
      <select
        {...restProps}
        className='relative z-[1] h-full w-full appearance-none rounded-[4px] bg-transparent px-[16px] text-md outline-none'>
        <option value=''>Filter by type</option>
        {menuItems.map(({ slug, name }: any, index: number) => (
          <option key={index} value={slug}>
            {name}
          </option>
        ))}
      </select>

      <i className='ri-arrow-down-s-line absolute right-[0] z-[0] px-[16px]' />
    </div>
  )
}

DropdownMenu.defaultProps = {}

export default DropdownMenu
