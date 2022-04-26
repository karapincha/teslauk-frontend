import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'

export interface SectionHeadingProps {
  [x: string]: any
  align?: 'left' | 'center' | 'right'
  description?: string
  heading?: string
  overline?: string
  headingClassName?: string
  descriptionClassName?: string
  cta?: any
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  align,
  className,
  description,
  heading,
  overline,
  cta,
  headingClassName,
  descriptionClassName,
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
            className={CN(
              'mb-[24px] text-h4 font-500 text-N-800 md:text-h3 md:font-700 lg:mb-[16px] lg:text-h2 lg:font-700',
              headingClassName
            )}
            dangerouslySetInnerHTML={{ __html: heading || '' }}
          />
        )}

        {description && (
          <p
            className={CN('text-sm font-400 text-N-600 lg:text-md', descriptionClassName)}
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        )}

        {cta && (
          <div
            className={CN('flex pt-[24px]', {
              'justify-center': align === 'center',
            })}>
            {cta}
          </div>
        )}
      </div>
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'Heading',
}

export default SectionHeading
