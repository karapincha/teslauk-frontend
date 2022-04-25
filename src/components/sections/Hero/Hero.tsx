import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Button } from '@/components/atoms'
import { useViewport } from '@/utils'

export interface HeroProps {
  [x: string]: any
}

export const Hero: FC<HeroProps> = ({ className, ...restProps }: HeroProps) => {
  const HeroClasses = CN(`hero`, className, {})
  const { isDesktop, isMobile, isTablet } = useViewport()

  const renderGraphic = () => {
    return (
      <div className='hero__graphic drag-none select-none md:absolute md:bottom-[-0px] md:right-[-0px] md:z-[-1] md:w-[360px] lg:absolute lg:bottom-[-0px] lg:right-[-0px] lg:z-[-1] lg:w-[832px]'>
        <img
          src='/images/hero-car-full-tesla-model-s.png'
          className='w-full py-[40px] md:w-[464px] lg:w-[960px]'
          alt='Hero Illustration'
        />
      </div>
    )
  }

  return (
    <div className={HeroClasses} {...restProps}>
      <div className='container'>
        <div className="hero__inner relative z-[0] rounded-[12px] bg-N-50 bg-[url('/images/hero-pattern.svg')] bg-cover bg-no-repeat py-[24px] px-[16px] md:py-[56px] md:px-[32px] lg:py-[118px] lg:px-[80px]">
          <div className='hero__content flex max-w-full flex-col items-center md:items-start lg:max-w-[496px] lg:items-start'>
            <h4 className='mb-[16px] text-center text-h5 md:text-left md:text-h4 lg:text-left lg:text-h4'>
              Tesla Owners Club UK
            </h4>
            <h1 className='mb-[16px] text-center text-h3 md:w-1/2 md:text-left md:text-h2 lg:w-full lg:text-left lg:text-display'>
              Expand your experiences
            </h1>
            <p className='max-w-[288px] text-center text-md text-N-600 md:text-left lg:text-left'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>

            {isMobile && renderGraphic()}

            <div className='hero__actions w-full md:w-auto md:pt-[32px] lg:w-auto lg:pt-[32px]'>
              <div className='inline-flex w-full flex-col items-center gap-[16px] md:items-start lg:items-start'>
                <Link href='/membership' passHref>
                  <Button
                    className='w-full'
                    iconAfter={<i className='ri-arrow-right-up-line text-lg' />}>
                    Become a free member
                  </Button>
                </Link>

                <div className='flex'>
                  <Link href='/login' passHref>
                    <Button
                      appearance='link'
                      iconAfter={<i className='ri-arrow-right-up-line text-lg' />}>
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {!isMobile && renderGraphic()}
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {}

export default Hero
