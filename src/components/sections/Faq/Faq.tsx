import React, { FC } from 'react'
import CN from 'classnames'
import { Accordion } from '@/components/atoms'
import { faqList1, faqList2 } from '@/dummy-data/faq'

export interface FaqProps {
  [x: string]: any
}

export const Faq: FC<FaqProps> = ({ className, ...restProps }: FaqProps) => {
  const FaqClasses = CN(`faq`, className)

  return (
    <div className={FaqClasses} {...restProps}>
      <div className='container'>
        <div className='flex'>
          <h3 className='text-h4 w-[260px] md:w-[unset] lg:w-[unset] font-600 lg:text-h3 lg:font-700'>Frequently asked questions</h3>
        </div>

        <div className='lg:grid w-full flex flex-col lg:grid-cols-2 lg:gap-[48px] pt-[40px]'>
          <div className='column-1'>
            {(faqList1 || []).map(({ id, heading, body }: any, index: number) => (
              <Accordion
                key={id || index}
                heading={heading}
                className='break-inside border-b border-N-100 py-[16px] lg:last:border-b-0'>
                {body}
              </Accordion>
            ))}
          </div>

          <div className='column-1 gap-[16px]'>
            {(faqList2 || []).map(({ id, heading, body }: any, index: number) => (
              <Accordion
                key={id || index}
                heading={heading}
                className='break-inside border-b border-N-100 py-[16px] lg:last:border-b-0'>
                {body}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Faq.defaultProps = {}

export default Faq
