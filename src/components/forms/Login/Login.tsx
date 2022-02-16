import React, { FC } from 'react'
import CN from 'classnames'

export interface LoginProps {
  [x: string]: any
}

export const Login: FC<LoginProps> = ({
  className,
  ...restProps
}: LoginProps) => {
  const LoginClasses = CN(`login`, className)

  return (
    <div className={LoginClasses} {...restProps}>
      login is working...
    </div>
  )
}

Login.defaultProps = {}

export default Login
