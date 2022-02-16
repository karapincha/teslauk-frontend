import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'

export interface CardProps {
  [x: string]: any
  subHeading?: string
  heading?: string
  description?: string
  image?: string
  imageAlt?: string
  link?: string
  onClickLink?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Card: FC<CardProps> = ({
  className,
  subHeading,
  heading,
  description,
  image,
  imageAlt,
  link,
  linkText,
  onClickLink,
  ...restProps
}: CardProps) => {
  const CardClasses = CN(`card w-full flex items-center`, className, {})

  return (
    <div className={CardClasses} {...restProps}>
      <div className='card__image h-[424px] w-[680px] flex-shrink-0 overflow-hidden rounded-[12px]'>
        <img src={image} alt={imageAlt} className='h-full w-full object-cover' />
      </div>

      <div className='card__content flex flex-col pl-[48px]'>
        <span
          className='text-overline mb-[16px] uppercase text-B-500'
          dangerouslySetInnerHTML={{ __html: subHeading || '' }}
        />
        <h2 className='mb-[24px]' dangerouslySetInnerHTML={{ __html: heading || '' }} />
        <p className='mb-[24px]' dangerouslySetInnerHTML={{ __html: description || '' }} />

        <div className='flex'>
          {link && (
            <Button
              appearance='link'
              view='outline'
              iconAfter={<i className='ri-arrow-right-line text-lg' />}
              onClick={onClickLink}>
              {linkText}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {}

export default Card
