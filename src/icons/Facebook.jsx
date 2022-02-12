import React from 'react'

export const Facebook = ({
  size = 28,
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path
        d='M14 2.3335C7.55651 2.3335 2.33334 7.55666 2.33334 14.0002C2.33334 19.823 6.59984 24.6495 12.1777 25.5257V17.3718H9.21434V14.0002H12.1777V11.43C12.1777 8.50633 13.9183 6.89166 16.5842 6.89166C17.8605 6.89166 19.1952 7.11916 19.1952 7.11916V9.98916H17.7252C16.275 9.98916 15.8235 10.8887 15.8235 11.8115V14.0002H19.0587L18.5418 17.3718H15.8235V25.5257C21.4002 24.6507 25.6667 19.8218 25.6667 14.0002C25.6667 7.55666 20.4435 2.3335 14 2.3335Z'
        fill={color}
      />
    </svg>
  )
}

export default Facebook
