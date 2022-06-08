import React, { FC, useState } from 'react'
import CN from 'classnames'

export interface LogoItemProps {
  [x: string]: any
  id?: string | number
  image: string
  imageGrey?: string
  link?: string
}

export interface LogoBlockProps {
  [x: string]: any
}

const LogoImage = ({ image, imageGrey }: any) => {
  const [logo, setLogo] = useState(imageGrey)
  return (
    <img
      className='max-h-[48px] max-w-[120px] md:max-h-[60px] md:max-w-[120px]'
      src={logo}
      /* onMouseOver={() => setLogo(image)}  */
      /* onMouseOut={() => setLogo(imageGrey)} */
    />
  )
}

export const LogoBlock: FC<LogoBlockProps> = ({
  className,
  data,
  ...restProps
}: LogoBlockProps) => {
  const LogoBlockClasses = CN(
    `logo-block flex flex-wrap md:grid md:grid-cols-3 lg:flex items-center w-full lg:justify-between gap-[20px] lg:gap-0 justify-center md:gap-x-[120px] md:gap-y-[28px]`,
    className
  )

  return (
    <div className={LogoBlockClasses} {...restProps}>
      {data.map(({ id, link, name, image, imageGrey, ...restProps }: any, index: number) => (
        <a
          className='logo-block__logo inline-flex justify-center'
          href={link}
          key={id || index}
          {...restProps}>
          <LogoImage image={image?.mediaItemUrl} imageGrey={image?.mediaItemUrl} />
        </a>
      ))}
    </div>
  )
}

LogoBlock.defaultProps = {}

export default LogoBlock
