import React from 'react'

export const Monitor = ({
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
      <path d="M19.5417 24.5C20.0249 24.5 20.4167 24.1082 20.4167 23.625C20.4167 23.1418 20.0249 22.75 19.5417 22.75C19.0584 22.75 18.6667 23.1418 18.6667 23.625C18.6667 24.1082 19.0584 24.5 19.5417 24.5Z" fill={color}/>
      <path d="M8.45834 24.5C8.94158 24.5 9.33334 24.1082 9.33334 23.625C9.33334 23.1418 8.94158 22.75 8.45834 22.75C7.97511 22.75 7.58334 23.1418 7.58334 23.625C7.58334 24.1082 7.97511 24.5 8.45834 24.5Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.5 15.1667C10.5 14.4047 10.987 13.7565 11.6667 13.5162V11.6667H8.75V3.5H19.25V11.6667H16.3333V13.5162C17.013 13.7565 17.5 14.4047 17.5 15.1667V15.2366C17.6862 15.2519 17.8889 15.2848 18.0899 15.3515C18.4124 15.4584 18.7408 15.6565 18.9814 16.0082C19.2189 16.3554 19.3333 16.7973 19.3333 17.3262C19.3333 17.5368 19.4297 17.7026 19.6447 17.8408C19.8765 17.9898 20.2233 18.0833 20.6041 18.0833C20.985 18.0833 21.3318 17.9898 21.5636 17.8408C21.7786 17.7026 21.875 17.5367 21.875 17.3262V10.9988C21.0317 10.7478 20.4167 9.96654 20.4167 9.04167V6.70833C20.4167 5.58075 21.3307 4.66667 22.4583 4.66667C23.5859 4.66667 24.5 5.58075 24.5 6.70833V9.04167C24.5 9.96654 23.885 10.7478 23.0417 10.9988V17.3263C23.0417 18.0093 22.6745 18.5137 22.1943 18.8223C21.7307 19.1202 21.1504 19.25 20.6041 19.25C20.0579 19.25 19.4776 19.1202 19.014 18.8223C18.5338 18.5137 18.1666 18.0093 18.1666 17.3262C18.1666 16.9616 18.0883 16.769 18.0185 16.667C17.9518 16.5696 17.8583 16.5038 17.7225 16.4588C17.6546 16.4363 17.5796 16.4202 17.4984 16.4094C17.4585 17.3406 16.691 18.0833 15.75 18.0833H12.25C11.2835 18.0833 10.5 17.2999 10.5 16.3333H10.2083C9.64927 16.3333 9.21462 16.4087 8.92774 16.5999C8.69067 16.758 8.45833 17.0609 8.45833 17.7917C8.45833 18.365 8.26367 18.8477 7.92289 19.1885C7.58759 19.5238 7.14432 19.6875 6.70833 19.6875C6.27241 19.6875 5.82909 19.5238 5.49379 19.1885C5.153 18.8477 4.95834 18.365 4.95833 17.7917V13.3321C4.11498 13.0811 3.5 12.2999 3.5 11.375V9.04167C3.5 7.91408 4.41408 7 5.54167 7C6.66925 7 7.58333 7.91408 7.58333 9.04167V11.375C7.58333 12.2999 6.96832 13.0811 6.125 13.3321V17.7917C6.125 18.0933 6.22201 18.2668 6.31872 18.3636C6.42092 18.4658 6.56098 18.5208 6.70833 18.5208C6.85574 18.5208 6.99574 18.4658 7.09794 18.3636C7.19466 18.2668 7.29167 18.0933 7.29167 17.7917C7.29167 16.7724 7.64272 16.0545 8.28059 15.6292C8.86871 15.2371 9.60073 15.1667 10.2083 15.1667H10.5ZM14.3987 5.37077L15.7121 7.7259L16.5994 6.66662H18.0833V7.83329H17.1441L15.5185 9.77398L14.2294 7.46247L13.5391 8.33327H9.5893V7.1666H12.9751L14.3987 5.37077ZM15.1667 16.3333C15.4888 16.3333 15.75 16.0722 15.75 15.75C15.75 15.4278 15.4888 15.1667 15.1667 15.1667C14.8445 15.1667 14.5833 15.4278 14.5833 15.75C14.5833 16.0722 14.8445 16.3333 15.1667 16.3333ZM13.4167 15.75C13.4167 16.0722 13.1555 16.3333 12.8333 16.3333C12.5112 16.3333 12.25 16.0722 12.25 15.75C12.25 15.4278 12.5112 15.1667 12.8333 15.1667C13.1555 15.1667 13.4167 15.4278 13.4167 15.75ZM12.8333 13.4167H15.1667V11.6667H12.8333V13.4167ZM4.66667 11.8611V10.6944H6.41667V11.8611H4.66667Z" fill={color}/>
      <path d="M15.75 18.6667C15.9545 18.6667 16.1509 18.6316 16.3333 18.5671V21H22.1667V22.1667H5.83334V21H11.6667V18.5671C11.8491 18.6316 12.0455 18.6667 12.25 18.6667H12.8333V21H15.1667V18.6667H15.75Z" fill={color}/>
    </svg>
  )
}

export default Monitor
