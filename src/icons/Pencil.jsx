import React from 'react'

export const Pencil = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path
        d='M16.5 3L21.5 8L8.5 21H3.5V16L16.5 3Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Pencil
