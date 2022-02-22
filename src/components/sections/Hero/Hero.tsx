import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import Link from 'next/link'
import { render } from 'react-dom'

export interface HeroProps {
  [x: string]: any
}

export const Hero: FC<HeroProps> = ({ className, ...restProps }: HeroProps) => {
  const HeroClasses = CN(`hero`, className, {})

  const renderGraphic = () => {
    return (
      <div className='hero__graphic drag-none select-none lg:absolute lg:bottom-[-0px] lg:right-[-0px] lg:z-[-1] lg:w-[832px]'>
        <img
          src='/images/hero-car-full-tesla-model-s.png'
          className='w-full lg:w-[960px]'
          alt='Hero Illustration'
        />
      </div>
    )
  }

  return (
    <div className={HeroClasses} {...restProps}>
      <div className='container'>
        <div className="hero__inner relative z-[0] rounded-[12px] bg-N-50 bg-[url('/images/hero-pattern.svg')] bg-cover bg-no-repeat py-[24px] px-[16px] lg:py-[118px] lg:px-[80px]">
          <div className='hero__content flex max-w-full flex-col items-center lg:max-w-[496px] lg:items-start'>
            <h4 className='mb-[16px] text-center lg:text-left'>Tesla Owners Club UK</h4>
            <h1 className='mb-[16px] text-center text-h3 lg:text-left lg:text-display'>
              Expand your experiences
            </h1>
            <p className='max-w-[288px] text-center text-md lg:text-left'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>

            <div className='hero__actions w-full pt-[32px] md:w-auto lg:w-auto'>
              <div className='inline-flex w-full flex-col items-center gap-[16px] lg:items-start'>
                <Link href='/membership' passHref>
                  <Button
                    className='w-full'
                    iconAfter={<i className='text-lg ri-arrow-right-up-line' />}>
                    Become a free member
                  </Button>
                </Link>

                <div className='flex'>
                  <Link href='/login' passHref>
                    <Button
                      appearance='link'
                      iconAfter={<i className='text-lg ri-arrow-right-up-line' />}>
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {renderGraphic()}
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {}

export default Hero
