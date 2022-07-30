import React, { FC, useState, useEffect } from 'react'
import CN from 'classnames'
import { Badge, Button, TextField } from '@/components/atoms'

export interface QtySelectorProps {
  [x: string]: any
}

export const QtySelector: FC<QtySelectorProps> = ({
  className,
  stockQty,
  onChange,
  ...restProps
}: QtySelectorProps) => {
  const QtySelectorClasses = CN(`qty-selector flex items-center w-full`, className)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    onChange && onChange(qty)
  }, [qty])

  return (
    <div className={QtySelectorClasses} {...restProps}>
      <Button
        appearance='ghost'
        className='group w-[40px] flex-shrink-0'
        disabled={!stockQty}
        onClick={() => {
          if (qty > 1) {
            setQty(Number(qty) - 1)
          }
        }}>
        <i className='ri-indeterminate-circle-fill text-[24px] group-hover:text-B-500' />
      </Button>

      <TextField
        className='w-full appearance-none px-0 text-center text-lg font-600'
        value={qty}
        disabled={!stockQty}
        onChange={(e: any) => {
          e.preventDefault()
          const re = /^[0-9\b]+$/

          if (e.target.value === '' || re.test(e.target.value)) {
            setQty(Number(e.target.value))
          }
        }}
      />

      <Button
        appearance='ghost'
        className='group w-[40px] flex-shrink-0'
        disabled={!stockQty}
        onClick={() => {
          if (qty < stockQty) {
            setQty(Number(qty) + 1)
          }
        }}>
        <i className='ri-add-circle-fill text-[24px] group-hover:text-B-500' />
      </Button>
    </div>
  )
}

QtySelector.defaultProps = {}

export default QtySelector
