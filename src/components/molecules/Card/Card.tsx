import React, { FC } from 'react'
import CN from 'classnames'
import { SectionHeading } from '@/components/molecules'

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
  const CardClasses = CN(`card w-full flex items-center`, className, {})

  return (
    <div className={CardClasses} {...restProps}>
      <div className='card__image h-[424px] w-[680px] flex-shrink-0 overflow-hidden rounded-[12px]'>
        <img src={image} alt={imageAlt} className='object-cover w-full h-full' />
      </div>

      <div className='card__content flex flex-col pl-[48px]'>
        <SectionHeading
          heading={heading}
          overline={subHeading}
          description={description}
          cta={cta}
        />
      </div>
    </div>
  )
}

Card.defaultProps = {}

export default Card
