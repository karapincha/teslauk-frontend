/* eslint-disable no-param-reassign */
// https://github.com/tannerlinsley/react-table/discussions/1989
import React, { forwardRef, MutableRefObject, useEffect, useRef } from 'react'
import CN from 'classnames'

export interface RadioProps {
  [x: string]: any
  children?: any
  className?: string | undefined
  id?: string | undefined
  indeterminate?: boolean
  labelClassName?: string | undefined
  iconClassName?: string
  onChange?: any
  type?: 'radio' | undefined
}

const useCombinedRefs = (...refs: any[]): MutableRefObject<any> => {
  const targetRef = useRef()

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      children,
      className,
      id,
      indeterminate,
      iconClassName,
      labelClassName,
      onChange,
      type,
      ...restProps
    }: RadioProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const RadioClasses = CN(
      'radio flex items-center relative pl-[16px] h-[24px] cursor-pointer',
      className,
      {
        'radio--is-indeterminate': indeterminate,
      }
    )

    const defaultRef = React.useRef(null)
    const combinedRef = useCombinedRefs(ref, defaultRef)

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate || false
      }
    }, [combinedRef, indeterminate])

    return (
      <label className={RadioClasses} htmlFor={id}>
        <input
          id={id}
          type={type}
          ref={combinedRef}
          onChange={onChange}
          className='absolute h-0 w-0 opacity-0 peer'
          {...restProps}
        />

        <span
          className={CN(
            'radio__checkmark absolute left-0 top-[50%] h-[18px] w-[18px] rounded-full bg-B-500',
            iconClassName
          )}
        />

        {children && (
          <div
            className={CN('radio__label select-none pl-[8px] text-md text-N-800', labelClassName)}>
            {children}
          </div>
        )}
      </label>
    )
  }
)

export default Radio

Radio.defaultProps = {
  children: null,
  className: undefined,
  id: undefined,
  indeterminate: false,
  onChange: undefined,
  type: 'radio',
}
