import React, { FC } from 'react'
import CN from 'classnames'

export interface TeamTagProps {
  [x: string]: any
  name?: string
}

export const TeamTag: FC<TeamTagProps> = ({ className, name, ...restProps }: TeamTagProps) => {
  const TeamTagClasses = CN(
    `team-tag flex bg-white gap-[12px] rounded-[4px] py-[8px] px-[8px]`,
    className
  )

  return (
    <div className={TeamTagClasses} {...restProps}>
      <i className='ri-user-3-line text-[24px] text-N-400'></i>
      <h5 className='text-h5 font-500 text-N-800'>{name}</h5>
    </div>
  )
}

TeamTag.defaultProps = {}

export default TeamTag
