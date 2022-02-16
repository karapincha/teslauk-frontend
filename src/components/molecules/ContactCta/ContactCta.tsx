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
      <div className='container flex gap-[172px]'>
        <h2
          className='w-[452px] flex-shrink-0 text-h3 font-600 text-N-800'
          dangerouslySetInnerHTML={{ __html: heading || '' }}
        />

        <div className='flex items-center gap-[24px]'>
          <div className='flex h-[64px] w-[64px] items-center justify-center rounded-[8px] bg-B-400'>
            <span className='text-N-10'>{icon}</span>
          </div>
          <a href={`mailto:${email}`} className='text-h4 text-B-500'>
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}

ContactCta.defaultProps = {}

export default ContactCta
