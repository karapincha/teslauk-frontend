import React, { FC } from 'react'
import CN from 'classnames'
import parser from 'html-react-parser'

export interface SupplierDetailsAboutProps {
  [x: string]: any
}

export const SupplierDetailsAbout: FC<SupplierDetailsAboutProps> = ({
  className,
  data,
  ...restProps
}: SupplierDetailsAboutProps) => {
  const SupplierDetailsAboutClasses = CN(`supplier-details-about`, className)

  return (
    <div className={SupplierDetailsAboutClasses} {...restProps}>
      <div className='border-b border-b-N-200 py-[24px] md:py-[40px]'>
        <p className=' text-base  font-500 text-N-600'>
          {parser(data?.pageSupplier?.description || '')}
        </p>
      </div>
    </div>
  )
}

SupplierDetailsAbout.defaultProps = {}

export default SupplierDetailsAbout
