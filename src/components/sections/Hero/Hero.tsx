import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import Link from 'next/link'

export interface HeroProps {
  [x: string]: any
}

export const Hero: FC<HeroProps> = ({ className, ...restProps }: HeroProps) => {
  const HeroClasses = CN(`hero`, className, {})

  return (
    <div className={HeroClasses} {...restProps}>
      <div className='container'>
        <div className="hero__inner relative z-[0] rounded-[12px] bg-N-50 bg-[url('/images/hero-pattern.svg')] bg-cover bg-no-repeat py-[118px] px-[80px]">
          <div className='hero__content max-w-[496px]'>
            <h4 className='mb-[16px]'>Tesla Owners Club UK</h4>
            <h1 className='mb-[16px] text-display'>Expand your experiences</h1>
            <p className='max-w-[288px] text-md'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>

            <div className='hero__actions pt-[32px]'>
              <div className='inline-flex flex-col gap-[16px]'>
                <Link href='/membership' passHref>
                  <Button iconAfter={<i className='ri-arrow-right-up-line text-lg' />}>
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

          <div className='hero__graphic drag-none absolute bottom-[-0px] right-[-0px] z-[-1] w-[832px] select-none'>
            <img
              src='/images/hero-car-full-tesla-model-s.png'
              className='w-[960px]'
              alt='Hero Illustration'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {}

export default Hero
