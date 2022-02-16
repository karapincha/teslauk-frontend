import React, { FC } from 'react'
import CN from 'classnames'
import { Logo, FieldGroup } from '@/components/atoms'
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from '@/icons'
import { LinkList } from '@/components/molecules'

export interface FooterProps {
  [x: string]: any
}

export const Footer: FC<FooterProps> = ({ className, ...restProps }: FooterProps) => {
  const FooterClasses = CN(`footer w-full`, className, {})

  const copyrightDate = new Date().getFullYear()

  const menuItems = [
    {
      id: '0',
      linkText: 'About Tesla Owners UK',
      link: '/about-us',
    },
    {
      id: '1',
      linkText: 'Contact us',
      link: '/contact-us',
    },
    {
      id: '2',
      linkText: 'Careers',
      link: '/careers',
    },
    {
      id: '3',
      linkText: 'Blog',
      link: '/blog',
    },
  ]

  const socialLinks = [
    {
      id: '0',
      icon: <Facebook size={28} />,
      link: 'https://facebook.com',
    },
    {
      id: '2',
      icon: <Twitter size={28} />,
      link: 'https://twitter.com',
    },
    {
      id: '1',
      icon: <Instagram size={28} />,
      link: 'https://instagram.com',
    },
    {
      id: '3',
      icon: <LinkedIn size={28} />,
      link: 'https://www.linkedin.com',
    },
    {
      id: '4',
      icon: <YouTube size={28} />,
      link: 'https://www.youtube.com',
    },
  ]

  const footerBottomLinks = [
    {
      id: '0',
      linkText: 'Press',
      link: '/return-policy',
    },
    {
      id: '1',
      linkText: 'Terms',
      link: '/terms-of-condition',
    },
    {
      id: '2',
      linkText: 'Cookies',
      link: '/delivery',
    },
    {
      id: '3',
      linkText: 'Privacy',
      link: '/privacy-policy',
    },
  ]

  return (
    <div className={FooterClasses} {...restProps}>
      <div className='border-t border-N-100'>
        <div className='container'>
          <div className='footer__top flex justify-between pt-[40px] pb-[44px]'>
            <div className='footer__about max-w-[400px]'>
              <Logo className='mb-[32px]' isInverted />
              <p className='text-sm font-500 text-N-500'>
                Tesla Owners United Kingdom is the official UK Tesla Owners Club, and is operated by
                Tesla Owners UK Limited, a company limited by guarantee (registration number
                12049084) with registered office at Oaklands, St Clere Hill Road, Sevenoaks, TN15
                6AH
              </p>
            </div>

            <div className='footer__social flex-shrink-0'>
              <div className='flex flex-shrink-0 flex-col'>
                <a
                  className='mb-[12px] text-md text-N-600 hover:text-B-500'
                  href='mailto:hello@Tesla Owners UK.com'>
                  hello@teslaowners.org.uk
                </a>
                <span className='mb-[16px] text-md text-N-600'>+1 312 219 8691</span>
                <span className='mb-[24px] text-md text-N-600'>
                  United Kingdom <br /> The Terrace <br />
                  Grantham St, Lincoln LN2 1lW
                </span>

                <ul className='mb-[32px] flex gap-[16px]'>
                  {socialLinks.map(({ id, link, icon }, index) => (
                    <li key={id || index}>
                      <a target='_blank' href={link} className='text-N-500 hover:text-B-500'>
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='footer__link-list'>
              <p className='mb-[16px] text-sm font-500 text-N-500'>Solutions</p>
              <LinkList
                direction='vertical'
                list={[
                  { id: 0, linkText: 'Marketing' },
                  { id: 1, linkText: 'Analytics' },
                  { id: 2, linkText: 'Commerce' },
                  { id: 3, linkText: 'Insights' },
                ]}
              />
            </div>

            <div className='footer__link-list'>
              <p className='mb-[16px] text-sm font-500 text-N-500'>Solutions</p>
              <LinkList
                direction='vertical'
                list={[
                  { id: 0, linkText: 'Marketing' },
                  { id: 1, linkText: 'Analytics' },
                  { id: 2, linkText: 'Commerce' },
                  { id: 3, linkText: 'Insights' },
                ]}
              />
            </div>

            <div className='footer__link-list'>
              <p className='mb-[16px] text-sm font-500 text-N-500'>Solutions</p>
              <LinkList
                direction='vertical'
                list={[
                  { id: 0, linkText: 'Marketing' },
                  { id: 1, linkText: 'Analytics' },
                  { id: 2, linkText: 'Commerce' },
                  { id: 3, linkText: 'Insights' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-N-100'>
        <div className='container flex items-center justify-between'>
          <div className='py-[32px]'>
            <p className='mb-[8px] text-md font-600 text-N-600'>Subscribe to newsletter</p>
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

      <div className='footer__bottom flex border-t border-N-100 bg-N-50 py-[20px] text-md text-N-500'>
        <div className='container flex items-center justify-between'>
          <span className='footer__bottom__copyrights text-md text-N-600'>
            Copyright © {copyrightDate} · Tesla Owners UK Limited
          </span>

          <ul className='flex gap-[50px]'>
            {(footerBottomLinks || []).map(({ id, link, linkText, ...restProps }, index) => (
              <li key={id || index}>
                <a
                  href={link}
                  {...restProps}
                  className='text-sm font-500 text-N-600 hover:text-B-500'>
                  {linkText}
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
