import React, { FC } from 'react'
import CN from 'classnames'
import { Check } from 'react-feather'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
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
    `membership-card shadow pb-[48px] pt-[32px] px-[28px] rounded-[12px] w-full flex flex-col shadow-[0px_25px_50px_-12px_rgba(95,111,140,0.1)]`,
    className,
    {
      'bg-N-600 text-white min-w-[500px]': type === 'primary',
      'bg-white text-N-700': type === 'secondary',
    }
  )

  return (
    <div className={MembershipCardClasses} {...restProps}>
      <div className='flex h-full'>
        <div className='flex h-full flex-col'>
          <h3
            className={CN('mb-[12px]', {
              'text-white': type === 'primary',
              'text-N-700': type === 'secondary',
            })}>
            {heading}
          </h3>

          <div className='mb-[24px] flex items-center gap-[8px]'>
            <p
              className={CN('text-h4 font-500', {
                'text-white': type === 'primary',
                'text-N-500': type === 'secondary',
              })}>
              {price}
            </p>
            {description && <p className='text-base'>({description})</p>}
          </div>

          <ul className='group mt-auto'>
            {list?.map((item, index) => (
              <li
                key={index}
                className='flex items-center gap-[8px] border-b py-[12px] text-md font-500 last:border-b-0'>
                <Check size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='ml-auto flex'>
          {type === 'primary' && <Logo size={160} className='mt-[-8px] mr-[-8px]' />}
        </div>
      </div>

      {(ctaBtnText || secondaryCTABtnText) && (
        <div className='membership-card__actions flex items-center gap-[24px] pt-[24px]'>
          {ctaBtnText && (
            <Button appearance='secondary' onClick={onClickCtaBtn}>
              {ctaBtnText}
            </Button>
          )}

          {secondaryCTABtnText && (
            <Button
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
