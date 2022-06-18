import React, { FC } from 'react'
import CN from 'classnames'
import { Check } from 'react-feather'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { useViewport } from '@/utils'
// import { PointerLink } from '@/components/atoms/PointerLink'

export interface MembershipCardProps {
  [x: string]: any
  type?: 'primary' | 'secondary'
  heading?: string
  description?: string
  price?: string
  list?: any[]
  ctaBtnText?: string
  onClickCtaBtn?: any
  secondaryCTABtnText?: string
  onClickSecondaryCtaBtn?: any
}

export const MembershipCard: FC<MembershipCardProps> = ({
  className,
  type,
  heading,
  description,
  price,
  list,
  ctaBtnText,
  onClickCtaBtn,
  secondaryCTABtnText,
  onClickSecondaryCtaBtn,
  ...restProps
}: MembershipCardProps) => {
  const MembershipCardClasses = CN(
    `membership-card shadow pb-[48px] pt-[32px] px-[28px] rounded-[12px] w-full flex flex-col shadow-[0px_25px_50px_-12px_rgba(95,111,140,0.1)] relative`,
    className,
    {
      'bg-N-600 text-white': type === 'primary',
      'bg-white text-N-700': type === 'secondary',
    }
  )

  const { isDesktop, isMobile, isTablet } = useViewport()

  return (
    <div className={MembershipCardClasses} {...restProps}>
      <div className='flex h-full w-full'>
        <div className='flex h-full w-full flex-col'>
          <h3
            className={CN('mb-[12px] text-h4 lg:mb-[0] lg:text-h3', {
              'text-white': type === 'primary',
              'text-N-700': type === 'secondary',
            })}>
            {heading}
          </h3>

          <div className='mb-[48px] flex flex-col items-start lg:flex lg:flex-row lg:items-center lg:gap-[8px]'>
            <p
              className={CN('text-h5 font-500 lg:text-h4', {
                'text-white': type === 'primary',
                'text-N-500': type === 'secondary',
              })}>
              {price}
            </p>
            {description && <p className='text-md lg:text-base'>({description})</p>}
          </div>

          <ul className='group mt-auto md:mt-[unset]'>
            {list?.map(({ feature }, index) => (
              <li
                key={index}
                className='flex items-center gap-[8px] border-b py-[12px] text-md font-500 last:border-b-0 max-w-[320px]'>
                <Check size={16} className='flex-shrink-0' />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='absolute right-[24px] ml-auto flex md:h-[unset] lg:static'>
          {type === 'primary' && (
            <Logo size={(!isDesktop && 120) || 160} className='mt-[-8px] mr-[-8px]' />
          )}
        </div>
      </div>

      {(ctaBtnText || secondaryCTABtnText) && (
        <div className='membership-card__actions flex flex-col items-center gap-[24px] pt-[24px] lg:flex lg:flex-row'>
          {ctaBtnText && (
            <Button appearance='secondary' onClick={onClickCtaBtn} className='w-full lg:w-auto'>
              {ctaBtnText}
            </Button>
          )}

          {secondaryCTABtnText && (
            <Button
              className='w-full lg:w-auto'
              appearance='link-invert'
              iconAfter={<i className='ri-arrow-right-line text-lg' />}
              onClick={onClickCtaBtn}>
              {secondaryCTABtnText}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

MembershipCard.defaultProps = {}

export default MembershipCard
