import _ from 'lodash'
import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import CN from 'classnames'
import { TextField, CheckBox, Button } from '@/components/atoms'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { toast } from '@/components/molecules'

import { useAppContext } from '@/context'

import { UPDATE_SHIPPING, UPDATE_ORDERS_SHIPPING_ADDRESS } from '../../../../lib/graphql'

export interface UpdateOrderAddressesProps {
  [x: string]: any
}

export const UpdateOrderAddresses: FC<UpdateOrderAddressesProps> = ({
  className,
  setShowAddressModal,
  ...restProps
}: UpdateOrderAddressesProps) => {
  const UpdateOrderAddressesClasses = CN(
    `password-reset bg-white rounded-[8px] px-[16px] md:px-[40px] lg:px-[40px] py-[24px] md:py-[32px] lg:py-[32px] w-full`,
    className
  )

  const { fullUser, user, userOrders }: any = useAppContext()

  const router = useRouter()
  const [formData, setFormData] = useState<any>()

  const [updateShipping, { loading: loadingUpdateShipping }] = useMutation(UPDATE_SHIPPING)
  const [updateOrdersShippingAddress, { loading: loadingUpdateOrdersShippingAddress }] =
    useMutation(UPDATE_ORDERS_SHIPPING_ADDRESS)

  useEffect(() => {
    if (fullUser?.customer) {
      setFormData({
        ...fullUser?.customer?.shipping,
        firstName: fullUser?.customer?.firstName,
        lastName: fullUser?.customer?.lastName,
        customerId: fullUser?.customer?.databaseId,
        email: fullUser?.customer?.email,
      })
    }
  }, [fullUser])

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

    if (!formData?.state) {
      return toast({ message: 'Please enter state', type: 'error' })
    }

    return handleUpdateOrderAddresses(e)
  }

  const handleUpdateOrderAddresses = (e: any) => {
    updateShipping({
      variables: {
        ...formData,
        id: formData?.customerId,
      },
    })
      .then((res: any) => {
        updateOrdersShippingAddress({
          variables: {
            ...formData,
            customerId: formData?.customerId + '',
          },
        })
          .then((res: any) => {
            setShowAddressModal(false)
            toast({
              message: "Shipping address saved. We'll send your welcome pack soon.",
              type: 'success',
            })
          })
          .catch()
      })
      .catch()
  }

  return (
    <div className={UpdateOrderAddressesClasses} {...restProps}>
      <div className='mb-[20px] flex flex-col items-center gap-[4px]'>
        <h4 className='text-center text-h4 font-600 text-N-800'>Save Shipping Address</h4>
        <p className='flex items-center gap-[4px] text-md'>
          Please provide your shipping address to send your Welcome pack{' '}
          <i className='ri-gift-2-fill' />
        </p>
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
            required
          />
        </div>
      </div>

      <div className='flex flex-col gap-[32px] pt-[24px]'>
        <div className=''>
          <Button
            className='w-full text-base !font-600'
            appearance='primary'
            onClick={handleValidation}>
            Save Shipping Address
          </Button>
        </div>
      </div>
    </div>
  )
}

UpdateOrderAddresses.defaultProps = {}

export default UpdateOrderAddresses
