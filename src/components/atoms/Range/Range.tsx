// https://slider-react-component.vercel.app/
import React, { FC } from 'react'
import CN from 'classnames'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const RangeSource = createSliderWithTooltip(Slider.Range)

export interface RangeProps {
  [x: string]: any
  className?: string
  defaultValue?: number[]
  max?: number
  min?: number
  onChange?: any
  step?: number
}

export const Range: FC<RangeProps> = ({
  className,
  defaultValue,
  max,
  min,
  onChange,
  step,
}: RangeProps) => {
  const RangeClasses = CN(`range-slider px-[8px]`, className, {})

  return (
    <div className={RangeClasses}>
      <RangeSource
        allowCross={false}
        min={min || 0}
        max={max || 5000}
        defaultValue={defaultValue || [0, 1000]}
        onChange={onChange}
        step={step || 100}
        trackStyle={[{ backgroundColor: '#2492F6', height: 8 }]}
        railStyle={{ backgroundColor: '#E7F3FF', height: 8 }}
        handleStyle={[
          { backgroundColor: '#016FD4', height: 14, width: 14, border: 0, marginTop: '-3px' },
        ]}
        tipProps={{ visible: true }}
        tipFormatter={value => `$${value}`}
      />
    </div>
  )
}

Range.defaultProps = {}

export default Range
