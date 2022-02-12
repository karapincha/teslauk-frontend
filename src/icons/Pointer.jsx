import React from 'react'

export const Pointer = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      width='14'
      height='18'
      viewBox='0 0 14 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path
        d='M11.7731 3.37288C10.6303 1.8588 8.88236 1 7 1C5.11764 1 3.36973 1.8588 2.22686 3.37288C0.591045 5.54237 0.591045 8.54802 2.22686 10.7175L7 17L11.7731 10.7175C13.409 8.54802 13.409 5.54237 11.7731 3.37288ZM7 3.73442C8.72554 3.73442 10.1373 5.15815 10.1373 6.89826C10.1373 8.63837 8.7255 10.0621 7 10.0621C5.2745 10.0621 3.86273 8.63837 3.86273 6.89826C3.86273 5.15815 5.2745 3.73442 7 3.73442Z'
        fill={color}
        stroke='#273040'
        stroke-width='0.171398'
        stroke-miterlimit='10'
      />
    </svg>
  )
}

export default Pointer
