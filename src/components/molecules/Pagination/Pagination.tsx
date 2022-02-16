import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'

export interface PaginationProps {
  [x: string]: any
}

export const Pagination: FC<PaginationProps> = ({ className, ...restProps }: PaginationProps) => {
  const PaginationClasses = CN(`pagination flex item-center gap-[4px]`, className)

  return (
    <div className={PaginationClasses} {...restProps}>
      <Button appearance='ghost' isSquare>
        <i className='ri-arrow-left-s-line text-lg' />
      </Button>
      <Button appearance='neutral' isSquare>
        1
      </Button>
      <Button appearance='ghost' isSquare>
        2
      </Button>
      <Button appearance='ghost' isSquare>
        3
      </Button>
      <span className='flex items-center'>...</span>
      <Button appearance='ghost' isSquare>
        20
      </Button>
      <Button appearance='ghost' isSquare>
        <i className='ri-arrow-right-s-line text-lg' />
      </Button>
    </div>
  )
}

Pagination.defaultProps = {}

export default Pagination
