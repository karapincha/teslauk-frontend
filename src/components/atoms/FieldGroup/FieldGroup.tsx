import React, { FC } from 'react'
import CN from 'classnames'

import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/TextField'

export interface FieldGroupProps {
  [x: string]: any
  btnProps?: any
  inputProps?: any
}

export const FieldGroup: FC<FieldGroupProps> = ({
  btnProps,
  className,
  inputProps,
  ...restProps
}: FieldGroupProps) => {
  const FieldGroupClasses = CN(`field-group flex`, className)
  const { label: btnLabel, className: btnClassName, ...restBtnProps } = btnProps

  return (
    <div className={FieldGroupClasses} {...restProps}>
      <TextField
        wrapperClassName={CN(
          'rounded-tr-none rounded-br-none border-r-0',
          inputProps?.wrapperClassName
        )}
        {...inputProps}
      />
      <Button className={CN('rounded-tl-none rounded-bl-none', btnClassName)} {...restBtnProps}>
        {btnLabel || 'Submit'}
      </Button>
    </div>
  )
}

FieldGroup.defaultProps = {}

export default FieldGroup
