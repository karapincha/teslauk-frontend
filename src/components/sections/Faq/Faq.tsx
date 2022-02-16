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
          <h3>Frequently asked questions</h3>
        </div>

        <div className='grid w-full grid-cols-2 gap-[48px] pt-[64px]'>
          <div className='column-1'>
            {(faqList1 || []).map(({ id, heading, body }: any, index: number) => (
              <Accordion
                key={id || index}
                heading={heading}
                className='break-inside border-b border-N-100 py-[16px] last:border-b-0'>
                {body}
              </Accordion>
            ))}
          </div>

          <div className='column-1 gap-[16px]'>
            {(faqList2 || []).map(({ id, heading, body }: any, index: number) => (
              <Accordion
                key={id || index}
                heading={heading}
                className='break-inside border-b border-N-100 py-[16px] last:border-b-0'>
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
