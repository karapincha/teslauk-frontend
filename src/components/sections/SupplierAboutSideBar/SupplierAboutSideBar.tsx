import React, { FC, useState, useEffect } from 'react'
import CN from 'classnames'
import { Bookmark, Compass, Globe, Mail, MapPin, Phone } from 'react-feather'
import { Button, TextField, GoogleMap } from '@/components/atoms'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useRouter } from 'next/router'
import Link from 'next/link'

export interface SupplierAboutSideBarProps {
  [x: string]: any
}

export const SupplierAboutSideBar: FC<SupplierAboutSideBarProps> = ({
  className,
  data,
  ...restProps
}: SupplierAboutSideBarProps) => {
  const SupplierAboutSideBarClasses = CN(
    `supplier-about-side-bar flex flex-col md:flex-row-reverse md:gap-[24px] lg:w-[368px] lg:flex-col lg:gap-0`,
    className
  )
  const router = useRouter()

  const [mapData, setMapData] = useState<any>()
  const [myLocation, setMyLocation] = useState<any>()

  useEffect(() => {
    if (data !== undefined && data?.pageSupplier?.location !== undefined) {
      const center = {
        lat: data?.pageSupplier?.location?.latitude,
        lng: data?.pageSupplier?.location?.longitude,
      }

      setMapData(center)
    }
  }, [data])

  return (
    <div className={SupplierAboutSideBarClasses} {...restProps}>
      {/* Contact details */}
      <div className='flex flex-col gap-[24px] lg:gap-[40px]'>
        <div className='flex flex-col gap-[16px]'>
          {/* Address */}
          {data?.pageSupplier?.address && (
            <div className='flex items-center gap-[8px]'>
              <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <MapPin size={16} />
              </div>
              <Link href={`http://maps.google.com/?q=${data?.pageSupplier?.address}`} passHref>
                <p className='cursor-pointer text-md font-500 text-N-600 hover:text-R-400'>
                  {data?.pageSupplier?.address || ''}
                </p>
              </Link>
            </div>
          )}

          {/* Phone number */}
          {data?.pageSupplier?.phone && (
            <div className='flex items-center gap-[8px]'>
              <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Phone size={16} />
              </div>
              <a href={`tel:${data?.pageSupplier?.phone}`} target='_blank'>
                <p className='cursor-pointer text-md font-500 text-N-600 hover:text-R-400'>
                  {data?.pageSupplier?.phone || ''}
                </p>
              </a>
            </div>
          )}

          {/* Email */}
          {data?.pageSupplier?.email && (
            <div className='flex items-center gap-[8px]'>
              <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Mail size={16} />
              </div>
              <a href={`mailto:${data?.pageSupplier?.email}`} target='_blank'>
                <p className='cursor-pointer text-md font-500 text-N-600 hover:text-R-400'>
                  {data?.pageSupplier?.email || ''}
                </p>
              </a>
            </div>
          )}

          {/* Website*/}
          {data?.pageSupplier?.website && (
            <div className='flex items-center gap-[8px]'>
              <div className='h-[32px] w-[32px] rounded-full bg-N-100 px-[8px] py-[8px] text-N-800'>
                <Globe size={16} />
              </div>
              <a href={data?.pageSupplier?.website} target='_blank'>
                <p className='hover:text-R-400 cursor-pointer text-md font-500 text-N-600'>{data?.pageSupplier?.website || ''}</p>
              </a>
            </div>
          )}
        </div>

        <div className='flex'>
          <Button
            iconAfter={<Bookmark size={20} />}
            appearance='neutral'
            className='w-full lg:w-[unset]'
            onClick={() => {
              alert(
                'Press ' +
                  (navigator.userAgent.toLowerCase().indexOf('mac') != -1
                    ? 'Command/Cmd'
                    : 'CTRL') +
                  ' + D to bookmark this page.'
              )
            }}>
            Bookmark
          </Button>
        </div>
      </div>

      {/* Map */}
      <div className='flex flex-col gap-[24px] pt-[24px] md:pt-0 lg:gap-[20px] lg:pt-[40px]'>
        {mapData !== undefined && mapData.lng && mapData.lng && (
          <>
            <Wrapper apiKey='AIzaSyBlPs-kgyXJNDZuMJ36LsVIL4ahfUjrWtI'>
              <GoogleMap
                title={data?.title}
                center={{ lat: Number(mapData.lat), lng: Number(mapData.lng) }}
              />
            </Wrapper>

            <div className='flex flex-col gap-[16px]'>
              <TextField
                placeholder='Your location'
                onChange={(e: any) => setMyLocation(e.target.value)}
              />

              <div className='flex'>
                <Button
                  iconAfter={<Compass size={20} />}
                  appearance='primary'
                  className='w-full lg:w-[unset]'
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      const url = myLocation
                        ? `https://www.google.com/maps?saddr=${myLocation}&daddr=${Number(
                            mapData.lat
                          )},${Number(mapData.lng)}`
                        : `https://www.google.com/maps?daddr=${Number(mapData.lat)},${Number(
                            mapData.lng
                          )}`

                      const w = window.open(url, '_blank')

                      if (w) {
                        w.focus()
                      }
                    }
                  }}>
                  {myLocation ? 'Get directions' : 'Open in Google Maps'}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

SupplierAboutSideBar.defaultProps = {}

export default SupplierAboutSideBar
