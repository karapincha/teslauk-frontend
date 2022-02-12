import React, { forwardRef, ReactNode } from 'react'
import CN from 'classnames'

export interface ButtonProps {
  appearance?: 'primary' | 'secondary' | 'ghost' | 'link' | 'light'
  children?: ReactNode | string | number | undefined
  className?: string | undefined
  disabled?: boolean
  icon?: ReactNode | string | number | undefined
  iconAfter?: ReactNode | string | number | undefined
  iconBefore?: ReactNode | string | number | undefined
  isRounded?: boolean
  isNarrow?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size?: 'default' | 'sm' | 'lg' | 'md' | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
  view?: 'default' | 'outline' | 'subtle'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      appearance,
      children,
      className,
      disabled,
      icon,
      iconAfter,
      iconBefore,
      isRounded,
      onClick,
      size,
      type,
      view,
      isNarrow,
      ...restProps
    }: ButtonProps,
    ref: any
  ) => {
    /* Text and Icon Color */
    const BtnTextClasses =
      (appearance === 'link' && !disabled && '!text-B-500 group-hover:!text-B-500') ||
      (view === 'outline' && !disabled && 'text-N-700 group-hover:!text-white') ||
      (size === 'md' && 'text-md') ||
      // (view !== 'outline' && !disabled && 'text-N-700 group-hover:text-N-800') ||
      (disabled && 'text-N-500')

    /* Background Color */
    const BtnBGClasses =
      (appearance === 'primary' &&
        view !== 'outline' &&
        !disabled &&
        'bg-A-300 hover:bg-A-400 active:bg-A-300') ||
      (appearance === 'secondary' &&
        view !== 'outline' &&
        !disabled &&
        'bg-N-200 hover:bg-N-300 active:bg-N-200') ||
      (appearance === 'light' &&
        view !== 'outline' &&
        !disabled &&
        'bg-N-50 hover:bg-N-100 active:bg-N-50') ||
      (appearance === 'ghost' &&
        view !== 'outline' &&
        !disabled &&
        'bg-[transparent] hover:bg-N-50 active:bg-N-100') ||
      (appearance === 'link' &&
        view !== 'outline' &&
        !disabled &&
        'bg-[transparent] hover:bg-B-50 active:bg-B-100') ||
      (appearance === 'link' &&
        view === 'outline' &&
        !disabled &&
        'bg-[transparent] hover:bg-B-50 active:bg-B-100') ||
      (view === 'outline' && !disabled && 'bg-[transparent] hover:bg-N-700 active:bg-N-800') ||
      (disabled && 'bg-N-200')

    /* Border Color */
    const BtnBorderClasses =
      (appearance === 'primary' && view !== 'outline' && !disabled && 'border-A-400') ||
      (appearance === 'secondary' &&
        view !== 'outline' &&
        !disabled &&
        'border-N-200 hover:border-N-200') ||
      (appearance === 'light' &&
        view !== 'outline' &&
        !disabled &&
        'border-N-50 hover:border-N-50') ||
      (appearance === 'ghost' && view !== 'outline' && !disabled && 'border-[transparent]') ||
      (appearance === 'link' && view !== 'outline' && !disabled && 'border-[transparent]') ||
      (appearance === 'link' && view === 'outline' && !disabled && 'border-B-500') ||
      (view === 'outline' && !disabled && 'border-N-700') ||
      (disabled && 'border-N-50')

    /* Text Size */
    const BtnTextSizeClasses =
      (size === 'lg' && 'text-base') || (size == 'sm' && 'text-md') || 'text-base'

    /* General */
    const ButtonClasses = CN('btn', className, {
      /* Common */
      'rounded-[4px] text-base font-600 flex items-center justify-center border group ease-in-out duration-100':
        true,

      /* Disabled */
      'pointer-events-none select-none cursor-not-allowed': disabled,

      /* Sizing */
      'h-[56px] px-[40px]': size === 'default',
      'h-[64px] px-[40px]': size === 'lg',
      'h-[46px] px-[24px]': size === 'md',
      'h-[32px] px-[16px] text-[8px]': size === 'sm' && !isNarrow,
      'h-[32px] px-[8px] text-[8px]': size === 'sm' && isNarrow,

      'h-[56px] px-[14px]': !children && icon && size === 'default',

      /* isRounded */
      'rounded-full': isRounded,
    })

    return (
      <button
        className={CN(ButtonClasses, BtnTextClasses, BtnBGClasses, BtnBorderClasses)}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        type={type}
        {...restProps}>
        {iconBefore && (
          <div
            className={CN('btn__icon', BtnTextClasses, BtnTextSizeClasses, {
              'mr-[12px]': size !== 'sm',
              'mr-[8px]': size === 'sm',
            })}>
            {iconBefore}
          </div>
        )}

        {!children && icon && (
          <div className={CN('btn__content', BtnTextClasses, BtnTextSizeClasses)}>{icon}</div>
        )}

        {children && (
          <div className={CN('btn__content', BtnTextClasses, BtnTextSizeClasses)}>{children}</div>
        )}

        {iconAfter && (
          <div
            className={CN('btn__icon', BtnTextClasses, BtnTextSizeClasses, {
              'ml-[12px]': size !== 'sm',
              'ml-[8px]': size === 'sm',
            })}>
            {iconAfter}
          </div>
        )}
      </button>
    )
  }
)

Button.defaultProps = {
  appearance: 'primary',
  className: undefined,
  disabled: false,
  iconAfter: undefined,
  iconBefore: undefined,
  size: 'default',
  type: 'button',
  view: 'default',
}

export default Button
