import React, { FC } from 'react'
import CN from 'classnames'

export interface MoleculeSampleProps {
  [x: string]: any
}

export const MoleculeSample: FC<MoleculeSampleProps> = ({
  className,
  ...restProps
}: MoleculeSampleProps) => {
  const MoleculeSampleClasses = CN(`molecule-sample`, className, {})

  return (
    <div className={MoleculeSampleClasses} {...restProps}>
      molecule-sample is working...
    </div>
  )
}

MoleculeSample.defaultProps = {}

export default MoleculeSample
