import React, { FC } from 'react'
import CN from 'classnames'
import { Bookmark, Compass, Globe, Mail, MapPin, Phone } from 'react-feather'
import { Button, TextField } from '@/components/atoms'

export interface SupplierAboutSideBarProps {
  [x: string]: any
}

export const SupplierAboutSideBar: FC<SupplierAboutSideBarProps> = ({
  className,
  ...restProps
}: SupplierAboutSideBarProps) => {
  const SupplierAboutSideBarClasses = CN(
    `supplier-about-side-bar flex flex-col md:flex-row-reverse md:gap-[24px] lg:w-[368px] lg:flex-col lg:gap-0`,
    className
  )

  return (
    <div className={SupplierAboutSideBarClasses} {...restProps}>
      {/* Contact details */}
      <div className='flex flex-col gap-[24px] lg:gap-[40px]'>
        <div className='flex flex-col gap-[16px]'>
          {/* Address */}
          <div className='flex items-center gap-[8px]'>
            <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
              <MapPin size={16} />
            </div>
            <p className='text-md font-500 text-N-600'>
              11 Phoenix Park Parkwood Industrial Estate Maidstone Kent ME15 9XN
            </p>
          </div>

          {/* Phone number */}
          <div className='flex items-center gap-[8px]'>
            <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
              <Phone size={16} />
            </div>
            <p className='text-md font-500 text-N-600'>0300 3033136</p>
          </div>

          {/* Email */}
          <div className='flex items-center gap-[8px]'>
            <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
              <Mail size={16} />
            </div>
            <p className='text-md font-500 text-N-600'>enquiries@jpsgroup.uk</p>
          </div>

          {/* Website*/}
          <div className='flex items-center gap-[8px]'>
            <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
              <Globe size={16} />
            </div>
            <p className='text-md font-500 text-N-600'>https://jpsrenewableenergy.co.uk</p>
          </div>
        </div>

        <div className='flex'>
          <Button
            iconAfter={<Bookmark size={20} />}
            appearance='primary'
            className='w-full lg:w-[unset]'>
            Bookmark
          </Button>
        </div>
      </div>

      {/* Map */}
      <div className='flex flex-col gap-[24px] pt-[24px] md:pt-0 lg:gap-[40px] lg:pt-[40px]'>
        <img
          src='https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          className='h-[343px] w-full rounded-[12px] object-cover object-center md:h-[368px] md:w-[368px]  '
        />
        <div className='flex flex-col gap-[16px]'>
          <TextField placeHolder='Your location' />
          <div className='flex'>
            <Button
              iconAfter={<Compass size={20} />}
              appearance='primary'
              className='w-full lg:w-[unset]'>
              Get directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

SupplierAboutSideBar.defaultProps = {}

export default SupplierAboutSideBar
