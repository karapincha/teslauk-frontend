import React, { FC } from 'react'
import CN from 'classnames'
import { Logo, FieldGroup } from '@/components/atoms'
import { LinkList } from '@/components/molecules'
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from '@/icons'
import parse from 'html-react-parser'
import Link from 'next/link'

export interface FooterProps {
  [x: string]: any
}

export const Footer: FC<FooterProps> = ({ className, data, ...restProps }: FooterProps) => {
  const FooterClasses = CN(`footer w-full`, className, {})
  const copyrightDate = new Date().getFullYear()

  const {
    address,
    bottomLinks,
    description,
    email,
    linkBlock1Heading,
    linkBlock1Links,
    linkBlock2Heading,
    linkBlock2Links,
    linkBlock3Heading,
    linkBlock3Links,
    phone,
  } = data || {}

  const socialLinks = [
    {
      id: '0',
      icon: <Facebook size={28} />,
      url: 'https://facebook.com',
    },
    {
      id: '2',
      icon: <Twitter size={28} />,
      url: 'https://twitter.com',
    },
    {
      id: '1',
      icon: <Instagram size={28} />,
      url: 'https://instagram.com',
    },
    {
      id: '3',
      icon: <LinkedIn size={28} />,
      url: 'https://www.linkedin.com',
    },
    {
      id: '4',
      icon: <YouTube size={28} />,
      url: 'https://www.youtube.com',
    },
  ]

  const footerBottomLinks = [
    {
      id: '0',
      label: 'Press',
      url: '/return-policy',
    },
    {
      id: '1',
      label: 'Terms',
      url: '/terms-of-condition',
    },
    {
      id: '2',
      label: 'Cookies',
      url: '/delivery',
    },
    {
      id: '3',
      label: 'Privacy',
      url: '/privacy-policy',
    },
  ]

  return (
    <div className={FooterClasses} {...restProps}>
      <div className='container border-t border-N-100'>
        <div className='footer__top flex flex-col justify-between pt-[24px] pb-[44px] lg:flex-row lg:pt-[40px]'>
          <div className='footer__about max-w-[400px]'>
            <Logo className='mb-[32px]' />
            <p className='text-sm font-500 text-N-500'>{description}</p>
          </div>

          <div className='footer__social flex-shrink-0 pt-[24px] lg:pt-0'>
            <div className='flex flex-shrink-0 flex-col gap-[24px] text-md text-N-600'>
              <div className='flex flex-col gap-[16px]'>
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`tel:${phone}`}>{phone}</a>
                <span>{parse(address || '')}</span>
              </div>

              <ul className='flex gap-[16px]'>
                {socialLinks.map(({ id, url, icon }, index) => (
                  <li key={id || index}>
                    <a target='_blank' href={url} className='text-N-500 hover:text-B-500'>
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='footer__link-list flex flex-col gap-[16px] pt-[32px] lg:pt-0'>
            <p className='text-md font-500 text-N-500'>{linkBlock1Heading}</p>
            <LinkList direction='vertical' list={linkBlock1Links} />
          </div>

          <div className='footer__link-list flex flex-col gap-[16px]'>
            <p className='text-md font-500 text-N-500'>{linkBlock2Heading}</p>
            <LinkList direction='vertical' list={linkBlock2Links} />
          </div>

          <div className='footer__link-list flex flex-col gap-[16px]'>
            <p className='text-md font-500 text-N-500'>{linkBlock3Heading}</p>
            <LinkList direction='vertical' list={linkBlock3Links} />
          </div>
        </div>
      </div>

      <div className='container flex flex-col items-center justify-between border-t border-N-100 pb-[24px] md:flex-row md:gap-[76px] md:pb-0 lg:flex-row lg:pb-0'>
        <div className='flex flex-col gap-[8px] pt-[32px] md:py-[48px] lg:py-[32px]'>
          <p className='text-md font-600 text-N-600'>Subscribe to newsletter</p>
          <p className='pb-[24px] text-sm text-N-600 md:pb-0 lg:pb-0'>
            Our weekly newsletter will keep you updated on all you need to know as a tesla owner.
          </p>
        </div>

        <FieldGroup
          className='w-full lg:w-[unset]'
          placeholder='Enter email address'
          btnProps={{
            children: 'Subscribe',
            onClick: (e: any) => {
              // console.log('Clicked', e)
            },
            appearance: 'primary',
            size: 'sm',
          }}
          inputProps={{
            onChange: (e: any) => {
              // console.log(e.target.value)
            },
            placeholder: 'joe@example.com',
          }}
        />
      </div>

      <div className='footer__bottom flex border-t border-N-100 bg-N-50 py-[16px] text-md'>
        <div className='container flex flex-col-reverse justify-between gap-[16px] md:flex-row md:items-center md:gap-0 lg:flex-row lg:items-center lg:gap-0'>
          <span className='footer__bottom__copyrights text-md font-400 text-N-600'>
            Copyright © {copyrightDate} · Tesla Owners UK Limited
          </span>

          <ul className='flex gap-[24px] lg:gap-[50px]'>
            {(bottomLinks || []).map(({ id, link, name, ...restProps }: any, index: number) => (
              <li key={id || index}>
                <Link href={link}>
                  <a {...restProps} className='text-sm font-500 text-N-600 hover:text-B-500'>
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {}

export default Footer
