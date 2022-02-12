import React, { FC } from 'react'
import CN from 'classnames'

export interface SectionSampleProps {
  [x: string]: any
}

export const SectionSample: FC<SectionSampleProps> = ({
  className,
  ...restProps
}: SectionSampleProps) => {
  const SectionSampleClasses = CN(`section-sample`, className, {})

  return (
    <div className={SectionSampleClasses} {...restProps}>
      section-sample is working...
    </div>
  )
}

SectionSample.defaultProps = {}

export default SectionSample
