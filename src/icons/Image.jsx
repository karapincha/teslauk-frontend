import React from 'react'

export const Image = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 106 106'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path
        d='M83.9167 13.25H22.0833C17.2048 13.25 13.25 17.2048 13.25 22.0833V83.9167C13.25 88.7952 17.2048 92.75 22.0833 92.75H83.9167C88.7952 92.75 92.75 88.7952 92.75 83.9167V22.0833C92.75 17.2048 88.7952 13.25 83.9167 13.25Z'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M37.5415 44.1665C41.2004 44.1665 44.1665 41.2004 44.1665 37.5415C44.1665 33.8826 41.2004 30.9165 37.5415 30.9165C33.8826 30.9165 30.9165 33.8826 30.9165 37.5415C30.9165 41.2004 33.8826 44.1665 37.5415 44.1665Z'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M92.7502 66.2498L70.6668 44.1665L22.0835 92.7498'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Image
