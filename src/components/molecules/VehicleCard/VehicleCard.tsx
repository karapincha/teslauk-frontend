import React, { FC } from 'react'
import CN from 'classnames'

export interface VehicleCardProps {
  [x: string]: any
  image?: string
  list?: VehicleCardItemProps[]
  model?: string
}

export interface VehicleCardItemProps {
  id: number | string
  label?: string
  link?: string
  onClick?: any
}

export const VehicleCard: FC<VehicleCardProps> = ({
  className,
  image,
  link,
  list,
  model,
  ...restProps
}: VehicleCardProps) => {
  const VehicleCardClasses = CN(`vehicle-card flex flex-col items-center`, className, {})

  return (
    <div className={VehicleCardClasses} {...restProps}>
      <h5 className='vehicle-card__model pb-[8px] text-h5 font-500 text-N-800'>{model}</h5>

      <div className='vehicle-card__image h-[148px] w-full cursor-pointer rounded-[8px] bg-N-50'>
        <img src={image} className='h-full w-full object-contain object-center' />
      </div>

      <div className='vehicle-card__list pt-[8px]'>
        <ul className='flex cursor-pointer flex-col items-center gap-[4px]'>
          {(list || []).map(({ id, label, onClick }, index) => {
            return (
              <li className='flex hover:text-B-500' key={id || index}>
                <a className='text-base text-N-600 hover:text-B-500' onClick={onClick} href={link}>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

VehicleCard.defaultProps = {}

export default VehicleCard
