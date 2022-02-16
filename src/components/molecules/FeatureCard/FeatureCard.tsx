import React, { FC } from 'react'
import CN from 'classnames'

export interface FeatureCardProps {
  [x: string]: any
}

export const FeatureCard: FC<FeatureCardProps> = ({
  className,
  ...restProps
}: FeatureCardProps) => {
  const FeatureCardClasses = CN(`feature-card`, className, {})

  return (
    <div className={FeatureCardClasses} {...restProps}>
      feature-card is working...
    </div>
  )
}

FeatureCard.defaultProps = {}

export default FeatureCard
