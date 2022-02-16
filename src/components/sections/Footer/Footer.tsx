import React, { FC } from 'react'
import CN from 'classnames'
import { Logo, FieldGroup } from '@/components/atoms'
import { LinkList } from '@/components/molecules'
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from '@/icons'

export interface FooterProps {
  [x: string]: any
}

export const Footer: FC<FooterProps> = ({ className, ...restProps }: FooterProps) => {
  const FooterClasses = CN(`footer w-full`, className, {})

  const copyrightDate = new Date().getFullYear()

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
      label: 'Privacy Policy',
      url: '/privacy-policy',
    },
  ]

  return (
    <div className={FooterClasses} {...restProps}>
      <div className='border-t border-N-100'>
        <div className='container'>
          <div className='footer__top flex justify-between pt-[40px] pb-[44px]'>
            <div className='footer__about max-w-[400px]'>
              <Logo className='mb-[32px]' />
              <p className='text-sm font-500 text-N-500'>
                Tesla Owners United Kingdom is the official UK Tesla Owners Club, and is operated by
                Tesla Owners UK Limited, a company limited by guarantee (registration number
                12049084) with registered office at Oaklands, St Clere Hill Road, Sevenoaks, TN15
                6AH
              </p>
            </div>

            <div className='footer__social flex-shrink-0'>
              <div className='flex flex-shrink-0 flex-col gap-[24px] text-md text-N-600'>
                <div className='flex flex-col gap-[16px]'>
                  <a href='mailto:hello@Tesla Owners UK.com'>hello@teslaowners.org.uk</a>
                  <span>+1 312 219 8691</span>
                  <span>
                    United Kingdom <br /> The Terrace <br />
                    Grantham St, Lincoln LN2 1lW
                  </span>
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

            <div className='footer__link-list flex flex-col gap-[16px]'>
              <p className='text-md font-500 text-N-500'>About the club</p>
              <LinkList
                direction='vertical'
                list={[
                  { id: 0, label: 'About Us', url: '/about' },
                  { id: 1, label: 'Club Rules', url: '/club-rules' },
                  { id: 2, label: 'Articles of Association', url: '/articles-of-association' },
                  { id: 3, label: 'Meeting Minutes' },
                ]}
              />
            </div>

            <div className='footer__link-list flex flex-col gap-[16px]'>
              <p className='text-md font-500 text-N-500'>Solutions</p>
              <LinkList
                direction='vertical'
                list={[
                  { id: 0, label: 'Marketing' },
                  { id: 1, label: 'Analytics' },
                  { id: 2, label: 'Commerce' },
                  { id: 3, label: 'Insights' },
                ]}
              />
            </div>

            <div className='footer__link-list flex flex-col gap-[16px]'>
              <p className='text-md font-500 text-N-500'>Solutions</p>
              <LinkList
                direction='vertical'
                list={[
                  { id: 0, label: 'Marketing' },
                  { id: 1, label: 'Analytics' },
                  { id: 2, label: 'Commerce' },
                  { id: 3, label: 'Insights' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-N-100'>
        <div className='container flex items-center justify-between'>
          <div className='flex flex-col gap-[8px] py-[32px]'>
            <p className='text-md font-600 text-N-600'>Subscribe to newsletter</p>
            <p className='text-sm text-N-600'>
              Our weekly newsletter will keep you updated on all you need to know as a tesla owner.
            </p>
          </div>

          <FieldGroup
            placeholder='Enter email address'
            btnProps={{
              label: 'Subscribe',
              onClick: (e: any) => {
                console.log('Clicked', e)
              },
              appearance: 'primary',
            }}
            inputProps={{
              onChange: (e: any) => {
                console.log(e.target.value)
              },
            }}
          />
        </div>
      </div>

      <div className='footer__bottom flex border-t border-N-100 bg-N-50 py-[16px] text-md'>
        <div className='container flex items-center justify-between'>
          <span className='footer__bottom__copyrights text-md text-N-600'>
            Copyright © {copyrightDate} · Tesla Owners UK Limited
          </span>

          <ul className='flex gap-[50px]'>
            {(footerBottomLinks || []).map(({ id, link, label, ...restProps }, index) => (
              <li key={id || index}>
                <a
                  href={link}
                  {...restProps}
                  className='text-sm font-500 text-N-600 hover:text-B-500'>
                  {label}
                </a>
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