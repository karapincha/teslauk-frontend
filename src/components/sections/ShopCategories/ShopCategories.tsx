import React, { FC } from 'react'
import CN from 'classnames'
import { useState } from 'react'
import { Button } from '@/components/atoms'

export interface ShopCategoriesProps {
  [x: string]: any
  onChange?: any
}

export const ShopCategories: FC<ShopCategoriesProps> = ({
  className,
  onChange,
  ...restProps
}: ShopCategoriesProps) => {
  const ShopCategoriesClasses = CN(`shop-categories flex flex-col w-[368px] gap-[24px]`, className)

  const [activeTab, setActiveTab] = useState('accessories')
  const handleChange = (tab: any) => {
    onChange && onChange(tab)
    setActiveTab(tab)
  }

  return (
    <div className={ShopCategoriesClasses} {...restProps}>
      <div className='flex items-center justify-between'>
        <Button
          appearance={activeTab === 'accessories' ? 'ghost' : 'link'}
          className={CN('h-[unset] px-0', {
            '!text-h5': activeTab !== 'accessories',
            'text-h5 !text-B-500': activeTab === 'accessories',
          })}
          onClick={() => handleChange('accessories')}>
          Accessories
        </Button>

        <div className='flex rounded-[4px] bg-N-300 px-[12px]'>99</div>
      </div>

      <div className='flex items-center justify-between'>
        <Button
          appearance={activeTab === 'charging-cables' ? 'ghost' : 'link'}
          className={CN('h-[unset] px-0', {
            '!text-h5': activeTab !== 'charging-cables',
            'text-h5 !text-B-500': activeTab === 'charging-cables',
          })}
          onClick={() => handleChange('charging-cables')}>
          Charging cables
        </Button>

        <div className='flex rounded-[4px] bg-N-300 px-[12px]'>7</div>
      </div>

      <div className='flex items-center justify-between'>
        <Button
          appearance={activeTab === 'packs-and-lanyards' ? 'ghost' : 'link'}
          className={CN('h-[unset] px-0', {
            '!text-h5': activeTab !== 'packs-and-lanyards',
            'text-h5 !text-B-500': activeTab === 'packs-and-lanyards',
          })}
          onClick={() => handleChange('packs-and-lanyards')}>
          Packs & Lanyards
        </Button>

        <div className='flex rounded-[4px] bg-N-300 px-[12px]'>4</div>
      </div>

      <div className='flex items-center justify-between'>
        <Button
          appearance={activeTab === 'renewals' ? 'ghost' : 'link'}
          className={CN('h-[unset] px-0', {
            '!text-h5': activeTab !== 'renewals',
            'text-h5 !text-B-500': activeTab === 'renewals',
          })}
          onClick={() => handleChange('renewals')}>
          Renewals
        </Button>

        <div className='flex rounded-[4px] bg-N-300 px-[12px]'>1</div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          appearance={activeTab === 'stickers' ? 'ghost' : 'link'}
          className={CN('h-[unset] px-0', {
            '!text-h5': activeTab !== 'stickers',
            'text-h5 !text-B-500': activeTab === 'stickers',
          })}
          onClick={() => handleChange('stickers')}>
          Stickers
        </Button>

        <div className='flex rounded-[4px] bg-N-300 px-[12px]'>6</div>
      </div>
    </div>
  )
}

ShopCategories.defaultProps = {}

export default ShopCategories
