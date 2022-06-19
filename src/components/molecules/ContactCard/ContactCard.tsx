import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms/Button'

export interface ContactCardProps {
  [x: string]: any
  description: string
  btnProps?: any
}

export const ContactCard: FC<ContactCardProps> = ({
  className,
  description,
  btnProps,
  ...restProps
}: ContactCardProps) => {
  const ContactCardClasses = CN(
    `contact-card bg-N-50 px-[24px] lg:px-[32px] py-[32px] lg:pb-[48px] lg:w-[367px] rounded-[8px]`,
    className
  )
  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={ContactCardClasses} {...restProps}>
      <p
        className='contact-card__description font-400 text-md text-N-700 pb-[24px]'
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button
        className={CN('rounded-[4px] w-full md:w-[unset] lg:w-[unset]')}
        {...restBtnProps}>
        {children || 'Contact Us'}
      </Button>
    </div>
  )
}

ContactCard.defaultProps = {}

export default ContactCard
