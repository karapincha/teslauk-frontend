import React, { FC } from 'react'
import CN from 'classnames'
import { useViewport } from '@/utils'

export interface FeatureCardProps {
  [x: string]: any
  icon?: any
  heading?: string
  description?: string
}

export const FeatureCard: FC<FeatureCardProps> = ({
  className,
  icon,
  heading,
  headingClassName,
  description,
  descriptionClassName,
  isLarge,
  ...restProps
}: FeatureCardProps) => {
  const FeatureCardClasses = CN(`feature-card flex gap-[16px] group`, className)

  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={FeatureCardClasses} {...restProps}>
      <div
        className={CN(
          'relative flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[8px] border border-N-200 bg-icon-bg text-xl font-400 text-N-600 group-hover:border-R-50 group-hover:bg-icon-bg-hover group-hover:text-R-400 lg:h-[48px] lg:w-[48px]',
          {
            '!h-[60px] !w-[60px]': isLarge,
          }
        )}>
        {typeof icon === 'string' ? (
          <img src={icon} width={(isDesktop && 24) || 24} height={(isDesktop && 24) || 24} />
        ) : (
          icon
        )}
      </div>

      <div className='mt-[-4px] flex flex-col gap-[4px] md:gap-[8px]'>
        <h5
          className={CN('text-h6', headingClassName)}
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />
        <span
          className={CN('text-md text-N-600', descriptionClassName)}
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {}

export default FeatureCard
