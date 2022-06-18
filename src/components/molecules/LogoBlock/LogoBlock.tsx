import React, { FC, useState } from 'react'
import CN from 'classnames'
import Link from 'next/link'

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
      {data.map(({ id, pageSupplier, slug, title, ...restProps }: any, index: number) => {
        const { isFeatured, logoInverted } = pageSupplier || {}

        if (isFeatured && isFeatured === true && logoInverted) {
          return (
            <Link href={`/suppliers/${slug}`} key={id || index}>
              <a
                className='logo-block__logo inline-flex justify-center'
                key={id || index}
                {...restProps}>
                <LogoImage
                  image={logoInverted?.mediaItemUrl}
                  imageGrey={logoInverted?.mediaItemUrl}
                />
              </a>
            </Link>
          )
        }
      })}
    </div>
  )
}

LogoBlock.defaultProps = {}

export default LogoBlock
