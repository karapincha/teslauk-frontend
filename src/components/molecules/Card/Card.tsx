import React, { FC } from 'react'
import CN from 'classnames'
import { SectionHeading } from '@/components/molecules'
import { useViewport } from '@/utils'

export interface CardProps {
  [x: string]: any
  subHeading?: string
  heading?: string
  description?: string
  image?: string
  imageAlt?: string
  onClickLink?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Card: FC<CardProps> = ({
  className,
  subHeading,
  heading,
  description,
  image,
  imageAlt,
  cta,
  onClickLink,
  ...restProps
}: CardProps) => {
  const CardClasses = CN(
    `card w-full flex lg:flex lg:flex-row items-center flex-col flex-col-reverse`,
    className,
    {}
  )
  const { isDesktop, isMobile, isTablet } = useViewport()

  const renderGraphic = () => {
    return (
      <div className='pt-[24px]'>
        <SectionHeading
          heading=''
          description={(!isDesktop && description) || ''}
          cta={!isDesktop && cta}
        />
      </div>
    )
  }

  return (
    <div className={CardClasses} {...restProps}>
      {!isDesktop && renderGraphic()}

      <div className='card__image h-[214px] w-full flex-shrink-0 overflow-hidden rounded-[8px] md:h-[424px] lg:h-[424px] lg:w-[680px]'>
        <img src={image} alt={imageAlt} className='h-full w-full object-cover' />
      </div>

      <div className='card__content flex flex-col lg:pl-[48px] text-center lg:text-left'>
        <SectionHeading
          heading={heading}
          overline={subHeading}
          description={(isDesktop && description) || ''}
          cta={isDesktop && cta}
        />
      </div>
    </div>
  )
}

Card.defaultProps = {}

export default Card
