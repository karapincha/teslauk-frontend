import React, { FC } from 'react'
import CN from 'classnames'

export interface ShopDescriptionProps {
  [x: string]: any
}

export const ShopDescription: FC<ShopDescriptionProps> = ({
  className,
  ...restProps
}: ShopDescriptionProps) => {
  const ShopDescriptionClasses = CN(
    `shop-description max-w-[782px] pt-[40px] flex flex-col gap-[24px]`,
    className
  )

  return (
    <div className={ShopDescriptionClasses} {...restProps}>
      <h4 className='text-h4 font-600 text-N-800'>
        Meet the ultimate drinking vessel for filling up and hitting the road or stopping off at a
        supercharger and filling up
      </h4>
      <article className='prose'>
        <ul className='text-md text-N-600'>
          <li>
            360-drinking, 100% leakproof HotShot Cap that lives up to its name by letting you sip
            from any side while also ensuring you can carry it with confidence knowing it won’t
            leak.
          </li>
          <li>
            Double-Wall Vacuum Insulation keeps cold drinks cold and hot drinks hot until the last
            sip.
          </li>
          <li>
            Measuring 7.6cm x 18.1cm this kitchen-grade stainless steel bottle is puncture and
            rust-resistant.
          </li>
          <li>Of course, it’s dishwasher safe because no one needs more work to do!</li>
          <li>It fits perfectly in S,3,X&Y cupholders</li>
          <li>
            The black DURACOAT™ is undeniably rugged and able to withstand nearly everything you
            throw it in or at it, the colour and our logo won’t peel, rub off, crack or fade. The
            personalisation method is called ‘ablation’ which ultimately means we remove the
            Duracoat from the outside to reveal the stainless steel underneath, much like engraving.
          </li>
          <li>
            While this 12 oz (355ml). Bottle is conveniently light, it holds more than enough joe to
            jump-start your day, whether you’re gearing up for an early morning trip or need an
            energy boost before a day outdoors.
          </li>
          <li>This is perfect size for a Costa Medium, Starbucks Tall or Caffe Nero Regular</li>
          <li>
            *Standard 5 year warranty on this product, terms and conditions apply, just reach out to
            us if any problems.
          </li>
          <li>
            Compatible with other Yeti lids (e.g. Straw or Magdock) if you wanted to switch it up
          </li>
        </ul>
      </article>
      <p className='text-md font-600 text-N-600'>
        This is technically a pre-order, once they arrive we will ship them en-masse to you all
        (estimated 4-6 weeks). Please be patient as we’re all volunteers doing this in our spare
        time.
      </p>
    </div>
  )
}

ShopDescription.defaultProps = {}

export default ShopDescription
