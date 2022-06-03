import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { QuoteCard, SectionHeading } from '@/components/molecules'
import { useViewport } from '@/utils'

export interface QuickTestimonialsProps {
  [x: string]: any
}

export const QuickTestimonials: FC<QuickTestimonialsProps> = ({
  className,
  data,
  ...restProps
}: QuickTestimonialsProps) => {
  const QuickTestimonialsClasses = CN(`quick-testimonials`, className, {})
  const { isDesktop, isMobile, isTablet } = useViewport()

  const {description, heading,subHeading,featuredTestimonial, primaryButtonText } = data
  const {pageTestimonial} =featuredTestimonial

  const renderCTA = () => {
    return <Button className='w-full md:w-[unset] lg:w-[unset]'>{primaryButtonText}</Button>
  }

  return (
    <div className={QuickTestimonialsClasses} {...restProps}>
      <div className='container flex w-full flex-col justify-between gap-[40px] md:items-center lg:max-w-[992px] lg:flex-row lg:gap-[56px]'>
        <div className='flex w-full text-center md:max-w-[536px] lg:max-w-[464px] lg:text-left'>
          <SectionHeading
            overline={subHeading}
            heading={heading}
            description={description}
            cta={isDesktop && renderCTA()}
          />
        </div>

        <div className='flex pt-[48px] '>
          <QuoteCard
            quote={pageTestimonial?.testimonial}
            name={pageTestimonial?.author}
            avatar={pageTestimonial?.image?.mediaItemUrl}
            title={pageTestimonial?.role}
            className='w-full md:w-[472px] lg:w-[472px]'
          />
        </div>
        <div>{!isDesktop && renderCTA()}</div>
      </div>
    </div>
  )
}

QuickTestimonials.defaultProps = {}

export default QuickTestimonials
