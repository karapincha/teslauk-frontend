import React, { FC } from 'react'
import CN from 'classnames'
import { Accordion } from '@/components/atoms'
import { faq } from '@/dummy-data/faq'

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

        <div className='block w-full pt-[80px]'>
          <div className='grid w-full grid-cols-2 gap-[48px]'>
            {(faq || []).map(({ id, heading, body }: any, index: number) => (
              <Accordion key={id || index} heading={heading} className='border-b border-N-100 pb-[16px] break-inside'>
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
