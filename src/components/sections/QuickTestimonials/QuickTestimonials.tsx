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
  ...restProps
}: QuickTestimonialsProps) => {
  const QuickTestimonialsClasses = CN(`quick-testimonials`, className, {})

  const { isDesktop, isMobile, isTablet } = useViewport()

  const renderGraphic = () => {
    return <Button className='w-full md:w-[unset] lg:w-[unset]'>See all testimonials</Button>
  }

  return (
    <div className={QuickTestimonialsClasses} {...restProps}>
      <div className='container flex w-full flex-col justify-between gap-[40px] md:items-center lg:max-w-[992px] lg:flex-row lg:gap-[56px]'>
        <div className='flex w-full text-center md:max-w-[536px] lg:max-w-[464px] lg:text-left'>
          <SectionHeading
            overline='Testimonials'
            heading='What members say <br/> about the club'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            cta={isDesktop && renderGraphic()}
          />
        </div>

        <div className='flex pt-[48px] '>
          <QuoteCard
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.'
            avatar='https://source.boringavatars.com/bauhaus/120/?colors=A1AFC1,040D1F,E31937'
            name='Maria Mitchell'
            title='Director, Some Co Ltd.'
            className='w-full md:w-[472px] lg:w-[472px]'
          />
        </div>
        <div>{!isDesktop && renderGraphic()}</div>
      </div>
    </div>
  )
}

QuickTestimonials.defaultProps = {}

export default QuickTestimonials
