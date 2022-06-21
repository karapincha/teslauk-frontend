import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from '@/components/atoms'
import { Users } from 'react-feather'
import { Facebook, Instagram, Twitter } from '@/icons'

export interface RegionDetailsHeaderProps {
  [x: string]: any
}

export const RegionDetailsHeader: FC<RegionDetailsHeaderProps> = ({
  className,
  ...restProps
}: RegionDetailsHeaderProps) => {
  const RegionDetailsHeaderClasses = CN(
    `region-details-header flex flex-col-reverse lg:flex-row gap-[40px] md:gap-[48px] rounded-t-[12px] bg-N-10 px-[16px] lg:px-[56px] pt-[60px]`,
    className
  )

  return (
    <div className={RegionDetailsHeaderClasses} {...restProps}>
      <div className='w-full lg:w-[416px]'>
        <h3 className='text-h3 font-700 text-N-800'>Scotland</h3>
        <p className='pt-[28px] text-base font-400 text-N-600'>
          A major part of being a member of Tesla Owners UK is the ability to attend events – both
          National and Regional. From Track Days to Regional Meetups and visits to the Tesla
          facilities both in Europe and in the US we have you covered!{' '}
        </p>

        <div className='flex items-center gap-[8px] pt-[28px]'>
          <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
            <Users size={16} />
          </div>
          <p className='text-md font-500 text-N-600'>Organisers - Graime King, John Doe</p>
        </div>

        <div className='pt-[20px]'>
          <Button appearance='secondary' className='w-full lg:w-[unset]'>
            Contact Organiser
          </Button>
        </div>

        <div className='flex flex-col gap-[20px] pt-[20px]'>
          <p className='text-md font-600 text-N-600'>Join the discussions on social media</p>
          <div className='flex gap-[20px] text-N-500'>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>

      <div className='h-[203px] w-full lg:h-[409px] lg:w-[624px]'>
        <img
          src='https://images.unsplash.com/photo-1617704548623-340376564e68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
          className='h-full w-full rounded-[8px] object-cover object-center'
        />
      </div>
    </div>
  )
}

RegionDetailsHeader.defaultProps = {}

export default RegionDetailsHeader
