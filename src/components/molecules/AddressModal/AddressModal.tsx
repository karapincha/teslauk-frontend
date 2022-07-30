import React, { FC, useState } from 'react'
import CN from 'classnames'
import { TextField, CheckBox, Button } from '@/components/atoms'
import { toast } from '@/components/molecules'

export interface AddressModalProps {
  [x: string]: any
}

export const AddressModal: FC<AddressModalProps> = ({
  className,
  onSubmit,
  onClose,
  heading,
  isLoading,
  address,
  ...restProps
}: AddressModalProps) => {
  const AddressModalClasses = CN(`address-modal`, className)
  const [formData, setFormData] = useState<any>(address)

  /* HANDLE VALIDATION */
  const handleValidation = (e: any) => {
    e.preventDefault()

    if (!formData?.firstName) {
      return toast({ message: 'Please enter first name', type: 'error' })
    }

    if (!formData?.lastName) {
      return toast({ message: 'Please enter last name', type: 'error' })
    }

    if (!formData?.address1) {
      return toast({ message: 'Please enter address', type: 'error' })
    }

    if (!formData?.phone) {
      return toast({ message: 'Please enter phone number', type: 'error' })
    }

    if (!formData?.city) {
      return toast({ message: 'Please enter city', type: 'error' })
    }

    if (!formData?.postcode) {
      return toast({ message: 'Please enter postcode', type: 'error' })
    }

    if (onSubmit) {
      return onSubmit(formData)
    }
  }

  return (
    <div className={AddressModalClasses} {...restProps}>
      <div className='fixed top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-slate-400/50'>
        <div className='flex w-full max-w-[600px]'>
          {/* Start */}
          <div className='relative w-full rounded-[8px] bg-white px-[16px] py-[24px] shadow-card-shadow md:px-[32px] md:py-[32px] lg:px-[32px] lg:py-[32px]'>
            <div className='mb-[28px] flex items-center justify-between gap-[4px]'>
              <h4 className='text-center text-h5 font-600 text-N-800'>{heading}</h4>
              <Button appearance='ghost' className='absolute top-0 right-0' onClick={onClose}>
                <i className='ri-close-fill' />
              </Button>
            </div>

            <div className='flex flex-col gap-[16px]'>
              <div className='flex flex-col gap-[12px]'>
                <div className='flex gap-[16px]'>
                  <TextField
                    autoComplete='none'
                    label='First Name'
                    onKeyPress={(e: any) => {
                      if (e.key === 'Enter') {
                        handleValidation(e)
                      }
                    }}
                    defaultValue={formData?.firstName}
                    onChange={(e: any) => {
                      setFormData({ ...formData, firstName: e.target.value })
                    }}
                    required
                  />
                  <TextField
                    autoComplete='none'
                    label='Last Name'
                    onKeyPress={(e: any) => {
                      if (e.key === 'Enter') {
                        handleValidation(e)
                      }
                    }}
                    defaultValue={formData?.lastName}
                    onChange={(e: any) => {
                      setFormData({ ...formData, lastName: e.target.value })
                    }}
                  />
                </div>
                <TextField
                  autoComplete='none'
                  label='Phone'
                  onKeyPress={(e: any) => {
                    if (e.key === 'Enter') {
                      handleValidation(e)
                    }
                  }}
                  defaultValue={formData?.phone}
                  onChange={(e: any) => {
                    setFormData({ ...formData, phone: e.target.value })
                  }}
                  required
                />
                <TextField
                  autoComplete='none'
                  label='Address'
                  onKeyPress={(e: any) => {
                    if (e.key === 'Enter') {
                      handleValidation(e)
                    }
                  }}
                  defaultValue={formData?.address1}
                  onChange={(e: any) => {
                    setFormData({ ...formData, address1: e.target.value })
                  }}
                  required
                />
                <div className='flex gap-[16px]'>
                  <TextField
                    autoComplete='none'
                    label='City / Town'
                    onKeyPress={(e: any) => {
                      if (e.key === 'Enter') {
                        handleValidation(e)
                      }
                    }}
                    defaultValue={formData?.city}
                    onChange={(e: any) => {
                      setFormData({ ...formData, city: e.target.value })
                    }}
                    required
                  />
                  <TextField
                    autoComplete='none'
                    label='Zip / Postal Code'
                    onKeyPress={(e: any) => {
                      if (e.key === 'Enter') {
                        handleValidation(e)
                      }
                    }}
                    defaultValue={formData?.postcode}
                    onChange={(e: any) => {
                      setFormData({ ...formData, postcode: e.target.value })
                    }}
                    required
                  />
                </div>
                <TextField
                  autoComplete='none'
                  label='State / Province / Region'
                  onKeyPress={(e: any) => {
                    if (e.key === 'Enter') {
                      handleValidation(e)
                    }
                  }}
                  defaultValue={formData?.state}
                  onChange={(e: any) => {
                    setFormData({ ...formData, state: e.target.value })
                  }}
                />
              </div>
            </div>

            <div className='flex flex-col gap-[32px] pt-[24px]'>
              <div className=''>
                <Button
                  className='w-full text-base !font-600'
                  appearance='primary'
                  onClick={handleValidation}
                  isLoading={isLoading}>
                  Save Address
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AddressModal.defaultProps = {}

export default AddressModal
