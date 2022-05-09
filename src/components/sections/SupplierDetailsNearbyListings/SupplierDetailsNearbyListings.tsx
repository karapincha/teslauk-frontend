import React, { FC } from 'react'
import CN from 'classnames'

export interface SupplierDetailsNearbyListingsProps {
  [x: string]: any
}

export const SupplierDetailsNearbyListings: FC<SupplierDetailsNearbyListingsProps> = ({
  className,
  ...restProps
}: SupplierDetailsNearbyListingsProps) => {
  const SupplierDetailsNearbyListingsClasses = CN(`supplier-details-nearby-listings py-[40px]`, className)

  return (
    <div className={SupplierDetailsNearbyListingsClasses} {...restProps}>
      supplier-details-nearby-listings is working...
    </div>
  )
}

SupplierDetailsNearbyListings.defaultProps = {}

export default SupplierDetailsNearbyListings
