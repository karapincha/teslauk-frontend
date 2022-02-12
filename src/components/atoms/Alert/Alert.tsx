import React, { FC } from 'react'
import CN from 'classnames'

export interface AlertProps {
  [x: string]: any
  appearance?: 'error' | 'success' | 'warning' | 'info'
  children?: React.ReactNode | string | number | null
}

export const Alert: FC<AlertProps> = ({
  appearance,
  children,
  className,
  ...restProps
}: AlertProps) => {
  const AlertClasses = CN(`alert py-[12px] w-full font-500`, className, {
    'bg-R-10 text-R-600': appearance === 'error',
    'bg-G-10 text-G-600': appearance === 'success',
    'bg-A-10 text-A-700': appearance === 'warning',
    'bg-B-10 text-B-700': appearance === 'info',
  })

  return (
    <div className={AlertClasses} {...restProps}>
      <div className='container'>{children}</div>
    </div>
  )
}

Alert.defaultProps = {
  appearance: 'info',
  children: 'Alert message',
}

export default Alert
