import React, { FC } from 'react'
import CN from 'classnames'

export interface FormSampleProps {
  [x: string]: any
}

export const FormSample: FC<FormSampleProps> = ({
  className,
  ...restProps
}: FormSampleProps) => {
  const FormSampleClasses = CN(`form-sample`, className, {})

  return (
    <div className={FormSampleClasses} {...restProps}>
      form-sample is working...
    </div>
  )
}

FormSample.defaultProps = {}

export default FormSample
