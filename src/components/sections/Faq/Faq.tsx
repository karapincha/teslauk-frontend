import React, { FC } from 'react'
import CN from 'classnames'
import { Accordion } from '@/components/atoms'
import { SectionHeading } from '@/components/molecules'
import { faqList1, faqList2 } from '@/dummy-data/faq'
import parseHTML from 'html-react-parser'

export interface FaqProps {
  [x: string]: any
}

export const Faq: FC<FaqProps> = ({ className, list, ...restProps }: FaqProps) => {
  const FaqClasses = CN(`faq`, className)

  return (
    <div className={FaqClasses} {...restProps}>
      <div className='container'>
        <SectionHeading
          overline='Got questions?'
          heading='Frequently asked questions'
          headingClassName='!mb-0'
          align={'center'}
        />

        <div className='flex w-full flex-col pt-[24px] md:pt-[40px] lg:grid lg:grid-cols-2 lg:gap-x-[48px]'>
          {(list || []).map(({ id, question, answer }: any, index: number) => (
            <Accordion
              key={id || index}
              heading={question}
              className='break-inside border-b border-N-100 py-[16px] lg:last:border-b-0'>
              {parseHTML(answer || '')}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

Faq.defaultProps = {}

export default Faq
