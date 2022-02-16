import React, { FC } from 'react'
import CN from 'classnames'

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

  return (
    <div className={FeatureCardClasses} {...restProps}>
      <div className='relative flex h-[56px] w-[56px]'>
        <img src={icon} width={56} height={56} />
        <span className='absolute top-0 bottom-0 right-0 left-0 bg-N-400 mix-blend-hue group-hover:opacity-0' />
      </div>

      <div className='flex flex-col'>
        <h5 className='text-h6 mb-[8px] group-hover:text-B-400' dangerouslySetInnerHTML={{ __html: heading || '' }} />
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
