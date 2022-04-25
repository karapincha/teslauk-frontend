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
      <div className='relative flex h-[48px] w-[48px] lg:h-[56px] lg:w-[56px]'>
        <img src={icon} width={(isDesktop && 56) || 48} height={(isDesktop && 56) || 48} />
        <span className='absolute top-0 bottom-0 right-0 left-0 bg-N-400 mix-blend-hue group-hover:opacity-0' />
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
