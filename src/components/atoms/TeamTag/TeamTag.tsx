import React, { FC } from 'react'
import CN from 'classnames'

export interface TeamTagProps {
  [x: string]: any
  name?: string
}

export const TeamTag: FC<TeamTagProps> = ({ className, name, ...restProps }: TeamTagProps) => {
  const TeamTagClasses = CN(
    `team-tag flex items-center bg-N-50 gap-[8px] rounded-full py-[4px] pl-[12px] pr-[16px] cursor-default`,
    className
  )

  return (
    <div className={TeamTagClasses} {...restProps}>
      <i className='ri-user-3-line text-[16px] text-N-500' />
      <h5 className='text-md font-500 text-N-800'>{name}</h5>
    </div>
  )
}

TeamTag.defaultProps = {}

export default TeamTag
