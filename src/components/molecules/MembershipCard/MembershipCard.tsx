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
  headingClassName,
  description,
  price,
  priceClassName,
  list,
  listClassName,
  listItemClassName,
  ctaBtnText,
  onClickCtaBtn,
  secondaryCTABtnText,
  onClickSecondaryCtaBtn,
  ctaBtnAppearance,
  ...restProps
}: MembershipCardProps) => {
  const MembershipCardClasses = CN(
    `membership-card pb-[48px] pt-[32px] px-[28px] rounded-[8px] md:h-full lg:h-[unset] w-full flex flex-col shadow-card-shadow relative`,
    className,
    {
      'bg-N-600 text-white': type === 'primary',
      'bg-white text-N-700': type === 'secondary',
    }
  )

  const { isDesktop, isMobile, isTablet } = useViewport()

  return (
    <div className={MembershipCardClasses} {...restProps}>
      <div className='flex w-full'>
        <div className='flex h-full w-full flex-col'>
          <h3
            className={CN(
              'mb-[12px] text-h4 lg:mb-[0] lg:text-h3',
              {
                'text-white': type === 'primary',
                'text-N-700': type === 'secondary',
              },
              headingClassName
            )}>
            {heading}
          </h3>

          <div className='flex flex-col items-start lg:flex lg:flex-row lg:items-center lg:gap-[8px]'>
            <p
              className={CN(
                'text-h5 font-500 lg:text-h4',
                {
                  'text-white': type === 'primary',
                  'text-N-500': type === 'secondary',
                },
                priceClassName
              )}
              dangerouslySetInnerHTML={{ __html: price || '' }}
            />
            {description && <p className='text-md lg:text-base'>({description})</p>}
          </div>

          <ul className={CN('group mt-auto pt-[32px] md:mt-[unset]', listClassName)}>
            {list?.map(({ feature, label, name }, index) => (
              <li
                key={index}
                className={CN(
                  'flex items-center gap-[8px] border-b py-[12px] text-md font-500 last:border-b-0',
                  listItemClassName
                )}>
                <Check size={16} className='flex-shrink-0' />
                <span>{label || feature || name}</span>
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
            <Button
              appearance={ctaBtnAppearance || 'secondary'}
              onClick={onClickCtaBtn}
              className='w-full lg:w-auto'>
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
