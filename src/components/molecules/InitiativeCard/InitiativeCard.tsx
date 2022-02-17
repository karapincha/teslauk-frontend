import React, { FC, ReactNode } from 'react'
import CN from 'classnames'
import { ArrowRight } from 'react-feather'
import { Button } from '@/components/atoms/Button'

export interface InitiativeCardProps {
  [x: string]: any
  icon?: string | ReactNode
  heading?: string
  description?: string
  link?: string
  list?: InitiativeCardItemProps[]
  btnProps?: any
}

export interface InitiativeCardItemProps {
  id: number | string
  label?: string
  link?: string
  onClick?: any
}

export const InitiativeCard: FC<InitiativeCardProps> = ({
  className,
  icon,
  heading,
  description,
  list,
  link,
  btnProps,
  ...restProps
}: InitiativeCardProps) => {
  const InitiativeCardClasses = CN(
    `initiative-card bg-white lg:px-[32px] lg:pt-[32px] pb-[64px] rounded-[12px] lg:w-[368px] h-full shadow-[0px_25px_50px_-12px_rgba(95,111,140,0.1)]`,
    className,
    {}
  )
  const { children, ...restBtnProps } = btnProps || {}

  return (
    <div className={InitiativeCardClasses} {...restProps}>
      {icon && <span className='text-N-400 lg:pb-[16px] inline-flex'>{icon}</span>}
      {heading && <h4 className='text-h4 text-N-800 font-500 pb-[16px]'>{heading}</h4>}
      {description && <p className='text-md text-N-600 font-500'>{description}</p>}

      {list && (
        <div className='pt-[24px]'>
          <ul className='flex flex-col border-t text-md text-N-800 group border-N-200 '>
            {(list || []).map(({ id, label, onClick }, index) => {
              return (
                <li
                  className='flex items-center py-[8px] border-N-200 border-b justify-between hover:text-B-500'
                  key={id || index}>
                  <a
                    className='text-base text-N-800 font-600 hover:text-B-500'
                    onClick={onClick}
                    href={link}>
                    {label}
                  </a>
                  <span className='pl-[16px]'>
                    <ArrowRight size={20} />
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {btnProps && (
        <div className='pt-[16px]'>
          <Button {...restBtnProps}>{children || 'Read more'}</Button>
        </div>
      )}
    </div>
  )
}

InitiativeCard.defaultProps = {}

export default InitiativeCard
