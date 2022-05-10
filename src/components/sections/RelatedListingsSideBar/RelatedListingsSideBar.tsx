import React, { FC } from 'react'
import CN from 'classnames'
import { CheckBox, Radio } from '@/components/atoms'

export interface RelatedListingsSideBarProps {
  [x: string]: any
}

export const RelatedListingsSideBar: FC<RelatedListingsSideBarProps> = ({
  className,
  ...restProps
}: RelatedListingsSideBarProps) => {
  const RelatedListingsSideBarClasses = CN(`related-listings-side-bar`, className)

  return (
    <div className={RelatedListingsSideBarClasses} {...restProps}>
      {/* Map */}
      <div className='flex flex-col gap-[24px]  lg:gap-[40px]'>
        <img
          src='https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          className='h-[343px] w-full rounded-[12px] object-cover object-center md:h-[368px] md:w-[368px]  '
        />
      </div>

      <div className='pt-[40px]'>
        <p className='text-base font-600 text-N-500'>Filter by rating</p>
        <div className='flex flex-col gap-[8px] pt-[16px]'>
          <Radio iconClassName='bg-N-300'>
            <div className='flex'>
              <i className='ri-star-fill text-Y-700 text-[20px]' />
              <i className='ri-star-fill text-Y-700 text-[20px]' />
              <i className='ri-star-fill text-Y-700 text-[20px]' />
              <i className='ri-star-fill text-Y-700 text-[20px]' />
              <i className='ri-star-fill text-Y-700 text-[20px]' />
            </div>
          </Radio>
          <Radio iconClassName='bg-N-300'>
            <div className='flex items-center gap-[8px]'>
              <div className='flex'>
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-line text-[20px] text-N-300' />
              </div>
              <p className='text-sm font-600 text-N-800'>& Up</p>
            </div>
          </Radio>
          <Radio iconClassName='bg-N-300'>
            <div className='flex items-center gap-[8px]'>
              <div className='flex'>
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-line text-[20px] text-N-300' />
                <i className='ri-star-line text-[20px] text-N-300' />
              </div>
              <p className='text-sm font-600 text-N-800'>& Up</p>
            </div>
          </Radio>
          <Radio iconClassName='bg-N-300'>
            <div className='flex items-center gap-[8px]'>
              <div className='flex'>
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-line text-[20px] text-N-300' />
                <i className='ri-star-line text-[20px] text-N-300' />
                <i className='ri-star-line text-[20px] text-N-300' />
              </div>
              <p className='text-sm font-600 text-N-800'>& Up</p>
            </div>
          </Radio>
          <Radio iconClassName='bg-N-300'>
            <div className='flex items-center gap-[8px]'>
              <div className='flex'>
                <i className='ri-star-fill text-Y-700 text-[20px]' />
                <i className='ri-star-line text-[20px] text-N-300' />
                <i className='ri-star-line text-[20px] text-N-300' />
                <i className='ri-star-line text-[20px] text-N-300' />
                <i className='ri-star-line text-[20px] text-N-300' />
              </div>
              <p className='text-sm font-600 text-N-800'>& Up</p>
            </div>
          </Radio>
          <Radio iconClassName='bg-N-300'>Any</Radio>
          <CheckBox>Show featured only</CheckBox>
          <CheckBox>Show claimed only</CheckBox>
        </div>
      </div>
    </div>
  )
}

RelatedListingsSideBar.defaultProps = {}

export default RelatedListingsSideBar
