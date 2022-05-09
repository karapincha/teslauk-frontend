import React, { FC } from 'react'
import CN from 'classnames'

export interface SupplierDetailsAboutProps {
  [x: string]: any
}

export const SupplierDetailsAbout: FC<SupplierDetailsAboutProps> = ({
  className,
  ...restProps
}: SupplierDetailsAboutProps) => {
  const SupplierDetailsAboutClasses = CN(`supplier-details-about py-[40px]`, className)

  return (
    <div className={SupplierDetailsAboutClasses} {...restProps}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum nunc. Quam nulla porttitor
      massa id neque. Feugiat in ante metus dictum. Dignissim diam quis enim lobortis. Sagittis orci
      a scelerisque purus semper. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
      Neque convallis a cras semper auctor neque vitae tempus. Amet volutpat consequat mauris nunc
      congue nisi vitae suscipit. Nunc sed augue lacus viverra vitae congue eu consequat ac. Sit
      amet consectetur adipiscing elit.
    </div>
  )
}

SupplierDetailsAbout.defaultProps = {}

export default SupplierDetailsAbout
