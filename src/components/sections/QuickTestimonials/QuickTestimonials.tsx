import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { QuoteCard, SectionHeading } from '@/components/molecules'

export interface QuickTestimonialsProps {
  [x: string]: any
}

export const QuickTestimonials: FC<QuickTestimonialsProps> = ({
  className,
  ...restProps
}: QuickTestimonialsProps) => {
  const QuickTestimonialsClasses = CN(`quick-testimonials`, className, {})

  return (
    <div className={QuickTestimonialsClasses} {...restProps}>
      <div className='container max-w-[992px] flex justify-between gap-[56px]'>
        <div className='flex w-full max-w-[464px]'>
          <SectionHeading
            overline='Testimonials'
            heading='What members say about the club'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            cta={<Button>See all testimonials</Button>}
          />
        </div>

        <div className='flex pt-[48px]'>
          <QuoteCard
            quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.'
            avatar='https://source.boringavatars.com/bauhaus/120/?colors=A1AFC1,040D1F,E31937'
            name='Maria Mitchell'
            title='Director, Some Co Ltd.'
            className='w-[472px]'
          />
        </div>
      </div>
    </div>
  )
}

QuickTestimonials.defaultProps = {}

export default QuickTestimonials
