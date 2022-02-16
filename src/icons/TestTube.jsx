import React from 'react'

export const TestTube = ({
  size = 28,
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19 4C18.4477 4 18 4.44772 18 5V8C18 8.55228 18.4477 9 19 9H20V11.2729C19.4174 11.4788 19 12.0344 19 12.6875V39C19 41.7614 21.2386 44 24 44C26.7614 44 29 41.7614 29 39V12.6875C29 12.0344 28.5826 11.4788 28 11.2729V9H29C29.5523 9 30 8.55228 30 8V5C30 4.44772 29.5523 4 29 4H19ZM22 11.6875V9H26V11.6875C26 12.3406 26.4174 12.8962 27 13.1021V18H21V13.1021C21.5826 12.8962 22 12.3406 22 11.6875Z" fill={color}/>
    </svg>
  )
}

export default TestTube
