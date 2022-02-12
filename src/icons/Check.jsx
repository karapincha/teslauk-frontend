import React from 'react'

export const Check = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 13 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path d='M10.5 3L5 8.5L2.5 6' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export default Check
