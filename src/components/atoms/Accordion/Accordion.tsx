import React, { FC, useState } from 'react'
import CN from 'classnames'
import { ChevronDown, ChevronUp } from 'react-feather'

export interface AccordionProps {
  [x: string]: any
}

export const Accordion: FC<AccordionProps> = ({
  children,
  className,
  heading,
  headingClassName,
  open,
  ...restProps
}: AccordionProps) => {
  const AccordionClasses = CN(`accordion flex flex-col w-full`, className, {})
  const [isOpen, setIsOpen] = useState(open || false)

  return (
    <div className={AccordionClasses} {...restProps}>
      <div
        className='accordion__header flex cursor-pointer items-center justify-between'
        onClick={() => setIsOpen(!isOpen)}>
        <span className={CN('flex items-center', headingClassName)}>{heading}</span>
        <span className='flex items-center'>
          {isOpen ? (
            <ChevronUp size={24} className='text-N-500' />
          ) : (
            <ChevronDown size={24} className='text-N-500' />
          )}
        </span>
      </div>

      {isOpen && <div className='accordion__body py-[8px]'>{children}</div>}
    </div>
  )
}

Accordion.defaultProps = {}

export default Accordion
