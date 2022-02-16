import React, { FC } from 'react'
import CN from 'classnames'
import { Avatar } from '@/components/atoms'

export interface QuoteCardProps {
  [x: string]: any
  avatar?: string
  name?: string
  quote?: string
  title?: string
}

export const QuoteCard: FC<QuoteCardProps> = ({
  className,
  quote,
  avatar,
  name,
  title,
  ...restProps
}: QuoteCardProps) => {
  const QuoteCardClasses = CN(
    `quote-card flex flex-col gap-[32px] py-[32px] px-[24px] rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(95,111,140,0.1)] relative bg-white flex-shrink-0`,
    className
  )

  return (
    <div className={QuoteCardClasses} {...restProps}>
      <i className='ri-double-quotes-r absolute right-[24px] top-[-20px] text-[80px] text-B-500' />

      <p className='text-N-600 text-md' dangerouslySetInnerHTML={{ __html: quote || '' }} />

      <div className='flex items-center gap-[12px]'>
        <Avatar image={avatar} size='sm' />
        <div className='flex flex-col'>
          <span className='text-N-800'>{name}</span>
          <span className='text-sm text-N-500'>{title}</span>
        </div>
      </div>
    </div>
  )
}

QuoteCard.defaultProps = {}

export default QuoteCard
