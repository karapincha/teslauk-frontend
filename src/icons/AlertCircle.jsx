import React from 'react'

export const AlertCircle = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <g clip-path='url(#clip0_3702_83239)'>
        <path
          d='M10.1673 18.3333C14.7697 18.3333 18.5007 14.6024 18.5007 10C18.5007 5.39762 14.7697 1.66666 10.1673 1.66666C5.56494 1.66666 1.83398 5.39762 1.83398 10C1.83398 14.6024 5.56494 18.3333 10.1673 18.3333Z'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.167 6.66666V10'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.167 13.3333H10.1753'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_3702_83239'>
          <rect width='20' height='20' fill='white' transform='translate(0.166992)' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AlertCircle
