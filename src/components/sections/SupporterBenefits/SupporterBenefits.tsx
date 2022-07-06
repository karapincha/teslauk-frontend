import React, { FC } from 'react'
import CN from 'classnames'
import { ListCard } from '@/components/molecules'

export interface SupporterBenefitsProps {
  [x: string]: any
}

export const SupporterBenefits: FC<SupporterBenefitsProps> = ({
  className,
  data,
  ...restProps
}: SupporterBenefitsProps) => {
  const SupporterBenefitsClasses = CN(`supporter-benefits flex flex-col bg-N-50`, className)

  const list = data?.features.filter((item: any, index: number) => {
    if (index > 7) {
      return item
    }
  })

  

  return (
    <div className={SupporterBenefitsClasses} {...restProps}>
      <div className='container flex flex-col'>
        <h3 className='pb-[40px] text-center text-h4 md:text-left md:text-h3 lg:text-left lg:text-h3'>
          Other supporter benefits
        </h3>

        <div className='flex flex-col lg:flex-row'>
          <ListCard list={list} commonClassName='grid w-full grid-cols-2 gap-x-[40px]' />
        </div>

        <div className='flex flex-col pt-[24px] text-md md:pt-[32px] lg:pt-[32px]'>
          <p className='pb-[24px] text-base font-600 md:pb-[32px] lg:pb-[32px]'>And many more...</p>

          {data?.footNotes?.map(({ note }: any, index: number) => {
            return (
              <p className='text-md' key={index}>
                {note}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

SupporterBenefits.defaultProps = {}

export default SupporterBenefits
