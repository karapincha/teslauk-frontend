import React, { FC } from 'react'
import CN from 'classnames'
import { useViewport } from '@/utils'

export interface FeatureCardProps {
  [x: string]: any
  icon?: string
  heading?: string
  description?: string
}

export const FeatureCard: FC<FeatureCardProps> = ({
  className,
  icon,
  heading,
  description,
  ...restProps
}: FeatureCardProps) => {
  const FeatureCardClasses = CN(`feature-card flex gap-[16px] group`, className)

  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={FeatureCardClasses} {...restProps}>
      <div className='relative flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-icon-bg drop-shadow-icon-bg-shadow lg:h-[48px] lg:w-[48px] flex-shrink-0'>
        <img src={icon} width={(isDesktop && 24) || 24} height={(isDesktop && 24) || 24} />
      </div>

      <div className='flex w-[192px] flex-col'>
        <h5
          className='mb-[8px] text-h6 group-hover:text-B-400'
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />
        <span
          className='text-md text-N-600'
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {}

export default FeatureCard
