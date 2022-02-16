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
    `supporter-benefits flex flex-col bg-N-50`,
    className
  )

  return (
    <div className={SupporterBenefitsClasses} {...restProps}>
      <div className='container flex flex-col gap-[40px]'>
        <h3>All supporter benefits</h3>

        <div className='flex gap-[40px]'>
          <ListCard
            list={[
              {
                id: 0,
                label: 'Optional Owners Welcome Pack',
              },
              {
                id: 1,
                label: 'Your vote at the AGM',
              },
              {
                id: 2,
                label: 'Ability to buy Tesla Owners UK Merch (e.g. our Polo shirt)',
              },
              {
                id: 3,
                label: 'Over 50 Exclusive Discounts¹',
              },
              {
                id: 4,
                label: 'Access to Club Only Events',
              },
              {
                id: 5,
                label: 'Priority Access to Tesla Owners UK events',
              },
              {
                id: 6,
                label: 'Up to £240 in cashback on Pirelli tyres each year²',
              },
            ]}
          />
          <ListCard
            list={[
              {
                id: 0,
                label: 'EU Cable & CHAdeMO Rentals³',
              },
              {
                id: 1,
                label: 'Exclusive Factory Tours',
              },
              {
                id: 2,
                label: 'Track Day Events',
              },
              {
                id: 3,
                label: 'Free Legal Advice⁴',
              },
              {
                id: 4,
                label: 'Educational programme full access',
              },
              {
                id: 5,
                label: 'Leave reviews for your favourite suppliers',
              },
              {
                id: 6,
                label: 'Access to our Advocacy Team',
              },
            ]}
          />
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
