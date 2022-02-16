import React from 'react'

export const Beaker = ({ size = 28, color = 'currentColor', ...restProps }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}>
      <g clip-path='url(#clip0_3297_13201)'>
        <path
          d='M21.2198 7.28014L19.5328 9.06176V26.8799H6.65296V7.28014H21.2128H21.2198ZM21.2128 6.16016H6.65296C6.03445 6.16016 5.53297 6.66163 5.53297 7.28014V26.8799C5.53297 27.4984 6.03445 27.9999 6.65296 27.9999H19.5185C20.137 27.9999 20.6528 27.4984 20.6528 26.8799V9.50948L22.0315 8.05209C22.3403 7.72758 22.4224 7.25018 22.2457 6.83859C22.069 6.42699 21.6622 6.16016 21.2145 6.16016H21.2128Z'
          fill={color}
        />
        <path
          d='M13.672 17.0801L9.95142 24.3356C9.85202 24.5291 9.65603 24.64 9.45275 24.64C9.36679 24.64 9.27943 24.6204 9.19767 24.5781C8.92244 24.437 8.8138 24.0996 8.95492 23.8244L12.4134 17.0801H7.77305V25.76H18.4129V17.0801H13.672ZM14.2135 22.0119C13.702 22.0119 13.287 21.5973 13.287 21.086C13.287 20.5744 13.7017 20.1592 14.2135 20.1592C14.7242 20.1592 15.1395 20.5742 15.1395 21.086C15.1395 21.5973 14.7242 22.0119 14.2135 22.0119ZM16.3132 24.2519C16.0338 24.2519 15.807 24.0251 15.807 23.746C15.807 23.4662 16.0338 23.2392 16.3132 23.2392C16.5924 23.2392 16.8195 23.4662 16.8195 23.746C16.8195 24.0254 16.5924 24.2519 16.3132 24.2519Z'
          fill={color}
        />
        <path
          d='M7.77305 15.3997H10.013'
          stroke={color}
          stroke-width='1.11999'
          stroke-miterlimit='10'
        />
        <path
          d='M7.77305 13.1599H10.013'
          stroke={color}
          stroke-width='1.11999'
          stroke-miterlimit='10'
        />
        <path
          d='M7.77305 10.9199H10.013'
          stroke={color}
          stroke-width='1.11999'
          stroke-miterlimit='10'
        />
        <path
          d='M22.0284 0.0620245C21.7523 -0.0796539 21.4155 0.0298248 21.2746 0.304502L12.4133 17.08H13.6722L22.2709 0.815776C22.412 0.540539 22.3036 0.203143 22.0284 0.0620245Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_3297_13201'>
          <rect
            width='28'
            height='28'
            fill='white'
            transform='translate(0.333313)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Beaker
