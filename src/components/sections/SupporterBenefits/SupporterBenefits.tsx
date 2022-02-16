import React, { FC } from 'react'
import CN from 'classnames'
import { ListCard } from '@/components/molecules'
import { benefits } from '@/dummy-data/benifits-list'

export interface SupporterBenefitsProps {
  [x: string]: any
}

export const SupporterBenefits: FC<SupporterBenefitsProps> = ({
  className,
  ...restProps
}: SupporterBenefitsProps) => {
  const SupporterBenefitsClasses = CN(
    `supporter-benefits flex flex-col py-[80px] bg-N-50`,
    className
  )

  return (
    <div className={SupporterBenefitsClasses} {...restProps}>
      <div className='container flex flex-col gap-[40px]'>
        <h3>All supporter benefits</h3>

        <div className='flex gap-[40px]'>
          <ListCard list={benefits} />
          <ListCard list={benefits} />
        </div>

        <div className='flex flex-col text-md'>
          <p>
            ¹ All discount codes and other Tesla related offers are subject to change without notice
          </p>
          <p>
            ² Terms and conditions apply further information on Pirelli.com ³ Cost of £6 per rental
          </p>
          <p>
            ³ Cost of £6 per rental & £1 per day. Collection from several UK sites or delivery
            available at cost.
          </p>
          <p>
            ⁴ FREE 10 minute consultation with a London Law Firm on any legal matter (related to
            your Tesla ownership or otherwise).
          </p>
        </div>
      </div>
    </div>
  )
}

SupporterBenefits.defaultProps = {}

export default SupporterBenefits
