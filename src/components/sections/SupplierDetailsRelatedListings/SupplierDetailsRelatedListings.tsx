import React, { FC } from 'react'
import CN from 'classnames'

export interface SupplierDetailsRelatedListingsProps {
  [x: string]: any
}

export const SupplierDetailsRelatedListings: FC<SupplierDetailsRelatedListingsProps> = ({
  className,
  ...restProps
}: SupplierDetailsRelatedListingsProps) => {
  const SupplierDetailsRelatedListingsClasses = CN(`supplier-details-related-listings py-[24px] md:py-[40px]`, className)

  return (
    <div className={SupplierDetailsRelatedListingsClasses} {...restProps}>
      supplier-details-related-listings is working...
    </div>
  )
}

SupplierDetailsRelatedListings.defaultProps = {}

export default SupplierDetailsRelatedListings
