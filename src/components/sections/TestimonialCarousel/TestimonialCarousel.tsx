import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { BlockCarousel, QuoteCard } from '@/components/molecules'

export interface TestimonialCarouselProps {
  [x: string]: any
  list: any[]
}

export const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  className,
  list,
  ...restProps
}: TestimonialCarouselProps) => {
  const TestimonialCarouselClasses = CN(
    `testimonial-carousel flex flex-col overflow-hidden`,
    className
  )

  const slidesList = (list || []).map(({ id, className, ...restProps }: any, index: number) => ({
    id: id || index,
    Component: () => (
      <QuoteCard key={id || index} className={CN('w-[472px]', className)} {...restProps} />
    ),
  }))

  return (
    <div className={TestimonialCarouselClasses} {...restProps}>
      <div className='container'>
        <div className='flex justify-between'>
          <h3>What club members say...</h3>

          <div className='flex items-center gap-[16px]'>
            <Button view='outline' isSquare className='testimonial-controll-prev'>
              <i className='ri-arrow-left-line text-lg' />
            </Button>
            <Button view='outline' isSquare className='testimonial-controll-next'>
              <i className='ri-arrow-right-line text-lg' />
            </Button>
          </div>
        </div>

        <div className='flex w-full pt-[64px]'>
          <BlockCarousel
            id='testimonial-carousel'
            options={{
              slidesPerView: 'auto',
              autoPlay: { delay: 3000 },
              breakpoints: {
                // when window width is >= 320px
                375: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 30,
                },
                // when window width is >= 1264px
                1280: {
                  slidesPerView: 'auto',
                  spaceBetween: 40,
                },
              },
            }}
            slides={slidesList}
            prevButton={'.testimonial-controll-prev'}
            nextButton={'.testimonial-controll-next'}
            className='pt-[40px]'
          />
        </div>
      </div>
    </div>
  )
}

TestimonialCarousel.defaultProps = {}

export default TestimonialCarousel
