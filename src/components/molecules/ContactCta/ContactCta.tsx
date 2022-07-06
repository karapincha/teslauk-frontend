import React, { FC, ReactNode } from 'react'
import CN from 'classnames'

export interface ContactCtaProps {
  [x: string]: any
  email?: string
  heading?: string
  icon?: ReactNode | string | undefined
}

export const ContactCta: FC<ContactCtaProps> = ({
  className,
  email,
  heading,
  icon,
  ...restProps
}: ContactCtaProps) => {
  const ContactCtaClasses = CN(`contact-cta bg-N-50 py-[64px]`, className)

  return (
    <div className={ContactCtaClasses} {...restProps}>
      <div className='container flex flex-col items-center gap-[32px] lg:flex-row lg:gap-[172px]'>
        <h2
          className='flex-shrink-0 text-left text-h4 font-600 text-N-800 md:text-h2 lg:w-[452px] lg:text-h3'
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />

        <div className='flex flex-col items-center gap-[24px] lg:flex-row'>
          <div className='flex h-[64px] w-[64px] items-center justify-center rounded-[8px] bg-B-400'>
            <span className='text-N-10'>{icon}</span>
          </div>
          <a href={`mailto:${email}`} className='text-h5 text-B-500 md:text-h4 lg:text-h4'>
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}

ContactCta.defaultProps = {}

export default ContactCta
