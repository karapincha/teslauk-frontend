import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'

export interface SectionHeadingProps {
  [x: string]: any
  align?: 'left' | 'center' | 'right'
  description?: string
  heading?: string
  overline?: string
  link?: any
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  align,
  className,
  description,
  heading,
  overline,
  link,
  ...restProps
}: SectionHeadingProps) => {
  const SectionHeadingClasses = CN(
    `section-heading flex items-center justify-between w-full`,
    { 'flex-col items-center text-center gap-[16px]': align === 'center' },
    className
  )

  return (
    <div className={SectionHeadingClasses} {...restProps}>
      <div className='flex flex-col'>
        {overline && (
          <span
            className='mb-[8px] text-overline font-600 uppercase text-B-500'
            dangerouslySetInnerHTML={{ __html: overline || '' }}
          />
        )}

        {heading && (
          <h2
            className='mb-[16px] text-N-800'
            dangerouslySetInnerHTML={{ __html: heading || '' }}
          />
        )}

        {description && (
          <p
            className='text-base font-400 text-N-600'
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        )}

        {link && (
          <div
            className={CN('flex pt-[24px]', {
              'justify-center': align === 'center',
            })}>
            <Button iconAfter={<i className='ri-arrow-right-line text-lg' />} appearance='link'>
              {link?.text}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'Heading',
  subHeading: 'Sub heading',
  description: 'Description',
}

export default SectionHeading
