import React from 'react'

export const Facebook = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 21 20'
      width={size}
      height={size}
      {...restProps}>
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        d='M20.5 10C20.5 4.47715 16.0229 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 14.9912 4.15684 19.1283 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79688C8.9375 5.29063 10.4305 3.90625 12.7146 3.90625C13.8084 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6922C12.45 6.5625 12.0625 7.3334 12.0625 8.125V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8432 19.1283 20.5 14.9912 20.5 10Z'
        fill={color}
      />
    </svg>
  )
}

export default Facebook
