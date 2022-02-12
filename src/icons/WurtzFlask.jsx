import React from 'react'

export const WurtzFlask = ({
  size = 28,
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path
        d='M14.2634 9.34799L24.0094 13.8289C24.3391 13.9828 24.7348 13.8436 24.8887 13.5138L25.7974 11.594C25.9476 11.2642 25.801 10.8722 25.4713 10.7219L14.2634 5.57052V3.54439H14.6665C16.9417 3.54439 16.9417 0.111328 14.6665 0.111328H8.32795C6.8111 0.111328 6.00138 1.9506 7.10787 3.04244C7.62448 3.55172 8.10445 3.54439 8.73098 3.54439V11.8651C5.43348 13.0082 3.14355 16.0932 3.14355 19.6435C3.14355 26.942 12.1384 30.6535 17.3997 25.4728C21.7781 21.1567 20.0231 13.8619 14.2634 11.8651V9.34799ZM12.9371 12.3524C12.9371 13.4735 14.9669 12.6858 17.1103 15.4813C20.5763 20.0026 17.3118 26.5573 11.4972 26.5573C5.68262 26.5573 2.4181 20.0026 5.88047 15.4813C8.02385 12.6858 10.0573 13.4772 10.0573 12.3524V2.88123C10.0573 2.0422 9.03874 2.21806 8.32795 2.21806C7.79302 2.21806 7.79302 1.43766 8.32795 1.43766H14.6665C15.2014 1.43766 15.2014 2.21806 14.6665 2.21806C12.5781 2.21806 12.9371 1.91396 12.9371 5.99187C12.9371 6.28132 13.1203 6.5268 13.3768 6.61839L24.3135 11.6416L23.9728 12.356L13.8751 7.71756C13.4317 7.51605 12.9371 7.8458 12.9371 8.31844V12.3524Z'
        fill={color}
      />
      <path
        d='M16.4215 17.9252C16.4215 17.9252 12.0104 23.4247 6.83329 23.5C5.82573 23.5147 7.8333 25.9876 11.6328 26.0773C15.9782 26.1799 19.1841 21.7209 17.6672 17.4782C17.3741 16.6575 16.4215 17.9252 16.4215 17.9252Z'
        fill={color}
      />
    </svg>
  )
}

export default WurtzFlask
