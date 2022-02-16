import React from 'react'

export const Quote = ({ size = 28, ...restProps }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path
        d='M23.38 10C11.14 18.64 2.5 32.8 2.5 48.4C2.5 61.12 10.18 68.56 19.06 68.56C27.46 68.56 33.7 61.84 33.7 53.92C33.7 46 28.18 40.24 20.98 40.24C19.54 40.24 17.62 40.48 17.14 40.72C18.34 32.56 26.02 22.96 33.7 18.16L23.38 10ZM64.66 10C52.66 18.64 44.02 32.8 44.02 48.4C44.02 61.12 51.7 68.56 60.58 68.56C68.74 68.56 75.22 61.84 75.22 53.92C75.22 46 69.46 40.24 62.26 40.24C60.82 40.24 59.14 40.48 58.66 40.72C59.86 32.56 67.3 22.96 74.98 18.16L64.66 10Z'
        fill='#E31937'
      />
    </svg>
  )
}

export default Quote
