import { Button } from '@/components/atoms'
import CN from 'classnames'
import React from 'react'
import { toast as toastSrc, ToastContainer as ToastContainerSrc } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export interface ToastProps {
  [x: string]: any
  message?: string
  title?: string
  appearance?: 'success' | 'warning' | 'danger' | 'info'
  onClose?: any
}

const Msg = (props: any) => {
  const { message, title, closeToast, onClose, appearance, type, toastProps } = props || {}

  return (
    <div
      className={CN('flex w-full p-[20px] text-md', {
        'border-l-[4px] border-R-400 bg-R-10 text-N-800': type === 'error',
        'border-l-[4px] border-G-400 bg-G-10 text-N-800': type === 'success',
      })}>
      <Button
        onClick={() => onClose && onClose(toastProps)}
        className='absolute top-[4px] right-0 text-N-800'
        size='xs'
        appearance='ghost'>
        <i className='ri-close-line' />
      </Button>

      <span>{message}</span>
    </div>
  )
}

export const toast = ({
  className,
  message,
  title,
  onClose,
  appearance,
  toastProps,
  style,
  type,
  ...restProps
}: ToastProps) => {
  return toastSrc(
    <Msg
      message={message}
      title={title}
      onClose={onClose}
      appearance={appearance}
      toastProps={toastProps}
      type={type}
    />,
    {
      style: { padding: 0, ...style },
      ...restProps,
    }
  )
}

export const ToastContainer = () => {
  return (
    <ToastContainerSrc
      position='top-right'
      autoClose={3000}
      hideProgressBar
      newestOnTop={true}
      closeOnClick
      closeButton={false}
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      bodyClassName='p-0'
      className='shadow-none'
      toastClassName='shadow-none'
      theme='dark'
    />
  )
}

export default toast
