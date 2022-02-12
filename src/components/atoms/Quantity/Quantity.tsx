import ReactDOMServer from 'react-dom/server'
import React, { FC, useState } from 'react'
import { Info } from 'react-feather'
import CN from 'classnames'

import { Minus, Plus } from '@/icons'

import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/TextField'
import { ToolTip } from '@/components/atoms/ToolTip'

export interface QuantityProps {
  [x: string]: any
  defaultValue?: number
  hint?: string
  id: string
  tooltip?: string
  isHorizontal?: boolean
}

export const Quantity: FC<QuantityProps> = ({
  className,
  defaultValue,
  hint,
  id,
  tooltip,
  isHorizontal,
  ...restProps
}: QuantityProps) => {
  const QuantityClasses = CN(`quantity-field flex items-center gap-[8px]`, className, {
    'flex-row': isHorizontal,
    'flex-col': !isHorizontal,
  })
  const [value, setValue] = useState(defaultValue || 1)

  return (
    <div className={QuantityClasses} {...restProps}>
      <div className='flex items-center w-full'>
        <Button
          appearance='ghost'
          icon={<Minus size={24} className='text-N-700 group-hover:text-B-500' />}
          className='h-[48px] !bg-[transparent] group !px-[4px] md:!px-[8px] lg:!px-[12px]'
          onClick={() => (value > 0 || value !== 0) && setValue(prev => prev - 1)}
        />
        <TextField
          value={value}
          onChange={(e: any) => {
            const re = /^[0-9\b]+$/
            if (e.target.value === '' || re.test(e.target.value)) {
              setValue(e.target.value)
            }
          }}
          className='text-center w-[58px] px-[4px] !font-600'
          wrapperClassName='!h-[40px]'
        />
        <Button
          appearance='ghost'
          icon={<Plus size={24} className='text-N-700 group-hover:text-B-500' />}
          className='h-[48px] !bg-[transparent] group !px-[4px] md:!px-[8px] lg:!px-[12px]'
          onClick={() => setValue(prev => prev + 1)}
        />
      </div>

      {hint && (
        <div className='flex items-center gap-[8px] text-N-600 flex-shrink-0'>
          <span className='text-sm'>{hint}</span>
          <Info
            size={20}
            className='inline-flex outline-none hover:text-N-800'
            data-tip
            data-for={tooltip && id}
          />
        </div>
      )}

      <ToolTip id={id} size='lg' place='bottom'>
        {ReactDOMServer.renderToString(
          <p
            className='w-[230px] text-center'
            dangerouslySetInnerHTML={{ __html: tooltip || '' }}
          />
        )}
      </ToolTip>
    </div>
  )
}

Quantity.defaultProps = {}

export default Quantity
