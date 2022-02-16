import React, { FC } from 'react'
import CN from 'classnames'
import { Accordion } from '@/components/atoms'

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

        <div className='flex pt-[80px]'>
          <Accordion heading='Full access to our extensive guides'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt qui voluptatem nihil distinctio ex tempore, aliquam impedit velit rerum atque optio, culpa dicta dolores adipisci! Aliquam voluptate quia autem esse.
          </Accordion>
        </div>
      </div>
    </div>
  )
}

Faq.defaultProps = {}

export default Faq
