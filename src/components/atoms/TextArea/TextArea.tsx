import React, { forwardRef, useEffect, useState } from 'react'
import CN from 'classnames'

export interface TextAreaProps {
  [x: string]: any
  appearance?: 'default' | 'success' | 'warning' | 'danger'
  className?: string | undefined
  disabled?: boolean
  hint?: string | undefined
  hintClassName?: string | undefined
  isError?: boolean
  isSuccess?: boolean
  label?: string
  readOnly?: boolean
  required?: boolean
  size?: 'default' | 'lg'
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
  wrapperClassName?: string | undefined
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      appearance,
      className,
      disabled,
      hint,
      hintClassName,
      isError,
      isSuccess,
      label,
      readOnly,
      required,
      size,
      type,
      wrapperClassName,
      ...restProps
    }: TextAreaProps,
    ref: any
  ) => {
    /* Background Color */
    const wrapperBGColor = (!disabled && 'bg-white') || (disabled && 'bg-N-50')

    /* Border Color */
    const wrapperBorderColor =
      (!disabled &&
        !isError &&
        'border-N-300 outline-none focus-within:border-B-400 focus-within:shadow-[inset_0px_0px_0px_1px_#E31937]') ||
      (disabled && 'border-N-200') ||
      (!disabled &&
        isError &&
        '!border-R-100 focus-within:!border-B-400 focus-within:!shadow-[0px_0px_0px_1px_#E31937]')

    /* Text Color */
    const inputTextColor = (!disabled && 'text-N-800') || (disabled && 'text-N-400')

    /* Inner Input Field */
    const TextAreaClasses = CN('text-field', className, inputTextColor, {
      /* Input Field Common */
      'appearance-none h-full w-full outline-none text-md font-400 flex items-center bg-[transparent] placeholder:text-N-400 min-h-[80px] pt-[12px] px-[16px]':
        true,

      /* Disabled */
      'cursor-not-allowed': disabled,
    })

    /* Wrapper */
    const TextAreaWrapperClasses = CN(wrapperClassName, wrapperBGColor, wrapperBorderColor, {
      /* Input Field Wrapper Common */
      'border flex items-start rounded-[4px] w-full group ease-in-out duration-[50] relative': true,
      'mt-[28px]': label,
    })

    return (
      <div className='text-field__container flex w-full flex-col'>
        <div className={TextAreaWrapperClasses}>
          {label && (
            <label
              className={CN(
                'text-field__label absolute top-[-28px] left-[-2px] !text-md font-500 text-N-600 after:absolute after:left-0 after:right-0 after:bottom-[2px] after:z-[0] after:h-[9px] after:content-[""]',
                {
                  'after:bg-white': !disabled,
                  'after:bg-N-50': disabled,
                }
              )}>
              <span className='relative z-[1]'>
                {label} {required && <span className='text-R-400'>*</span>}
              </span>
            </label>
          )}

          <textarea
            className={TextAreaClasses}
            disabled={disabled}
            readOnly={readOnly}
            ref={ref}
            {...restProps}
          />
        </div>

        {hint && (
          <span
            className={CN('pt-[2px] text-sm', hintClassName, {
              'text-R-400': isError,
              'text-G-500': isSuccess,
            })}>
            {hint}
          </span>
        )}
      </div>
    )
  }
)

TextArea.defaultProps = {
  appearance: 'default',
  className: undefined,
  disabled: false,
  label: undefined,
  readOnly: false,
  size: 'default',
  type: 'text',
  wrapperClassName: undefined,
}

export default TextArea
