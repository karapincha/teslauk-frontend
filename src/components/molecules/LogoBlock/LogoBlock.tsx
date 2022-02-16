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
  logoList: LogoItemProps[]
}

const LogoImage = ({ image, imageGrey }: any) => {
  const [logo, setLogo] = useState(imageGrey)
  return (
    <img
      src={logo}
      /* onMouseOver={() => setLogo(image)}  */
      /* onMouseOut={() => setLogo(imageGrey)} */
    />
  )
}

export const LogoBlock: FC<LogoBlockProps> = ({
  className,
  logoList,
  ...restProps
}: LogoBlockProps) => {
  const LogoBlockClasses = CN(`logo-block flex items-center w-full justify-between`, className)

  return (
    <div className={LogoBlockClasses} {...restProps}>
      {logoList.map(({ id, link, image, imageGrey, ...restProps }: any, index: number) => (
        <a className='logo-block__logo inline-flex' href={link} key={id || index} {...restProps}>
          <LogoImage image={image} imageGrey={imageGrey} />
        </a>
      ))}
    </div>
  )
}

LogoBlock.defaultProps = {}

export default LogoBlock
