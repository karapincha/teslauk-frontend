import React, { forwardRef, ReactNode } from 'react'
import CN from 'classnames'

export interface ButtonProps {
  [x: string]: any
  appearance?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'ghost'
    | 'ghost-invert'
    | 'link'
    | 'link-invert'
  children?: any
  className?: string
  disabled?: boolean
  icon?: ReactNode | string | number
  iconAfter?: ReactNode | string | number
  iconBefore?: ReactNode | string | number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  view?: 'outline' | 'solid'
  isSquare?: boolean
  isActive?: boolean
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
      size,
      view,
      isSquare,
      isActive,
      ...restProps
    }: ButtonProps,
    ref: any
  ) => {
    /* General */
    const ButtonClasses = CN(
      'btn rounded-[4px] text-base font-500 flex items-center justify-center group transition-colors gap-[6px] children:inline-flex border-2 border-transparent',
      className,
      {
        /* Disabled */
        'pointer-events-none select-none cursor-not-allowed': disabled,

        /* isActive */
        // 'text-N-800': isActive,
        // 'text-N-500': !isActive,

        /* Sizing */
        'h-[24px] px-[8px] text-[12px] font-500': size === 'xs',
        'h-[38px] px-[16px] text-[14px]': size === 'sm',
        'h-[48px] px-[20px]': size === 'md',
        'h-[52px] px-[32px]': size === 'lg',
        'h-[62px] px-[32px]': size === 'xl',

        '!px-[0]': appearance === 'link' || appearance === 'link-invert',
        '!px-[0] w-[38px]': isSquare && size === 'sm',
        '!px-[0] w-[48px]': isSquare && size === 'md',
        '!px-[0] w-[52px]': isSquare && size === 'lg',
        '!px-[0] w-[62px]': isSquare && size === 'xl',

        /* Appearance */
        'bg-B-500 text-white hover:bg-B-600': appearance === 'primary' && view === 'solid',
        'bg-N-200 text-N-800 hover:bg-N-300': appearance === 'secondary' && view === 'solid',
        'bg-N-800 text-white': appearance === 'neutral' && view === 'solid',
        'bg-transparent text-N-800 hover:text-B-500': appearance === 'link',
        'bg-transparent text-white hover:text-N-200': appearance === 'link-invert',
        'bg-transparent text-N-800': appearance === 'ghost' && view === 'solid',
        'bg-transparent text-white': appearance === 'ghost-invert' && view === 'solid',

        /* View */
        'bg-transparent text-N-800 border-N-800': appearance === 'primary' && view === 'outline',
        'bg-transparent text-N-700 !border-N-400': appearance === 'secondary' && view === 'outline',
        'bg-transparent text-N-800 !border-N-800': appearance === 'neutral' && view === 'outline',
        'bg-transparent text-N-800 hover:border-N-800':
          appearance === 'ghost' && view === 'outline',
        'bg-transparent text-white hover:border-white':
          appearance === 'ghost-invert' && view === 'outline',
      }
    )

    return (
      <button className={CN(ButtonClasses)} disabled={disabled} ref={ref} {...restProps}>
        {iconBefore && <div className={CN('btn__icon children:inline-flex')}>{iconBefore}</div>}
        {!children && icon && <div className={CN('btn__content')}>{icon}</div>}
        {children && <div className={CN('btn__content')}>{children}</div>}
        {iconAfter && <div className={CN('btn__icon children:inline-flex')}>{iconAfter}</div>}
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
  size: 'md',
  view: 'solid',
}

export default Button
