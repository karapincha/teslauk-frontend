import React, { FC } from 'react'
import CN from 'classnames'

import styles from './Hamburger.module.scss'

interface HamburgerProps {
  [x: string]: any
  width?: number
  height?: number
}

export const Hamburger: FC<HamburgerProps> = ({
  className,
  width,
  height,
  ...restProps
}: HamburgerProps) => {
  const HamburgerClasses = CN(styles['hamburger'], 'relative cursor-pointer', className, {})

  return (
    <>
      <div className={HamburgerClasses} style={{ width: width, height: height }} {...restProps}>
        <input
          className={CN(
            'block h-full opacity-0 cursor-pointer absolute w-full z-[2]',
            styles.hamburger__checkbox
          )}
          type='checkbox'
        />

        <div className='bottom-0 h-[8px] left-0 m-auto absolute right-0 top-0 w-[32px]'>
          <span className='rounded-[20px] block h-[2px] absolute w-full bg-N-800'></span>
          <span className='rounded-[20px] block h-[2px] absolute w-full bg-N-800'></span>
        </div>
      </div>

      <span className='ml-2 font-500 text-N-800 lg:hidden'>Menu</span>
    </>
  )
}

Hamburger.defaultProps = {
  width: 32,
  height: 18,
}

export default Hamburger
