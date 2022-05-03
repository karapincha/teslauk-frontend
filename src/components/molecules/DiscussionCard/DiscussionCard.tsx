import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms/Button'
import { Pill } from '@/components/atoms/Pill'
import { Check } from 'react-feather'

export interface DiscussionCardProps {
  [x: string]: any
  list?: any[]
  btnProps?: any
  heading?: string
  subHeading?: string
  pillText?: string
  isWide?: boolean
  cover?: any
}

export const DiscussionCard: FC<DiscussionCardProps> = ({
  className,
  list,
  heading,
  subHeading,
  pillText,
  btnProps,
  isActive,
  isWide,
  category,
  cover,
  ...restProps
}: DiscussionCardProps) => {
  const DiscussionCardClasses = CN(
    `discussion-card lg:h-[292px] w-full flex flex-col lg:flex-row`,
    {
      'md:flex-row': isWide,
      'md:flex-col': !isWide,
    },
    className,
    {}
  )
  const { children, ...restBtnProps } = btnProps || {}
  return (
    <div className={DiscussionCardClasses} {...restProps}>
      {/* Background with image */}
      <div
        className={CN(
          `flex h-[292px] flex-shrink-0 rounded-t-[12px]  bg-cover bg-no-repeat lg:h-[unset] `,
          {
            'w-full md:w-[50%] md:rounded-l-[12px] md:rounded-tr-none': isWide,
            'w-full lg:w-[258px]': !isWide,
          }
        )}
        style={{ backgroundImage: `url('${cover || ''}')` }}>
        <div className='flex w-full bg-gradient-to-t from-[#000000DE] to-[#00000000] md:rounded-bl-[12px]'>
          <div className='flex flex-col justify-between px-[24px] pb-[24px]'>
            <div className='flex pt-[24px]'>
              {category && (
                <Pill size='md' className={CN('bg-B-100 !text-B-500')}>
                  {category}
                </Pill>
              )}
            </div>

            <div className='flex flex-col'>
              {heading && <h5 className='text-h5 font-500 text-white'>{heading}</h5>}

              {subHeading && <p className='text-sm font-500 text-N-400'>{subHeading}</p>}

              <div className='w-fit pt-[16px]'>
                <Pill size='sm' className={CN('bg-[#4B566966]')}>
                  {pillText}
                </Pill>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White background area */}
      <div className='flex w-full  flex-col justify-between gap-[24px] rounded-r-[12px] bg-white px-[16px] py-[24px] lg:gap-0 lg:px-[24px] lg:py-[32px]'>
        <ul className='text-N-800] flex flex-col text-md'>
          {(list || []).map(({ id, label }, index) => {
            return (
              <li className='flex items-center py-[6px]' key={id || index}>
                <span className='pr-[12px] lg:pr-[12px]'>
                  <Check size={16} />
                </span>
                <span className='text-sm text-N-800'>{label}</span>
              </li>
            )
          })}
        </ul>

        <div className='flex'>
          <Button
            className={CN('!gap-[8px]', {
              'w-full lg:w-[unset]': isWide,
              'w-full': !isWide,
            })}
            {...restBtnProps}>
            {children || 'Join Group'}
          </Button>
        </div>
      </div>
    </div>
  )
}

DiscussionCard.defaultProps = {}

export default DiscussionCard
