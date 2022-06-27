import React, { FC } from 'react'
import CN from 'classnames'

export interface SpinnerProps {
  [x: string]: any
}

export const Spinner: FC<SpinnerProps> = ({
  className,
  size,
  color,
  ...restProps
}: SpinnerProps) => {
  const SpinnerClasses = CN(`loader`, className)

  return (
    <div className={SpinnerClasses} {...restProps}>
      <svg
        focusable='false'
        height={size || 40}
        width={size || 40}
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'
        className='loader__svg'
        color='#E6304B'
        {...restProps}>
        <circle cx='8' cy='8' r='7' className='loader__svg__circle' />
      </svg>
    </div>
  )
}

Spinner.defaultProps = {}

export default Spinner
