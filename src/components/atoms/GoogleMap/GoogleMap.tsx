import React, { useEffect, useRef, ReactElement, FC } from 'react'
import CN from 'classnames'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

export interface GoogleMapProps {
  [x: string]: any
}
const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return <></>
}

export function GoogleMap({ center, title }: { center: google.maps.LatLngLiteral; title: string }) {
  const ref = useRef<any>()
  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const image = '/images/marker_map_icon.svg'

  useEffect(() => {
    const myStyle = [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#A1AFC1',
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#D8E1EC',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#728197',
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#728197',
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#A1AFC1',
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#A1AFC1',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#A1AFC1',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#728197',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#ffffff',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#000000',
          },
          {
            lightness: 30,
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f2f2f2',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#fefefe',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#fefefe',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
    ]

    const map = new window.google.maps.Map(ref.current, {
      mapTypeControlOptions: {
        mapTypeIds: ['myStyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN],
      },
      center,
      zoom: 11,
      mapTypeId: 'myStyle',
      disableDefaultUI: true,
    })

    new google.maps.Marker({
      position: center,
      map,
      title: title,
      icon: image,
    })

    map.mapTypes.set('myStyle', new google.maps.StyledMapType(myStyle, { name: title }))
  })

  return <div ref={ref} id='map' />
}

GoogleMap.defaultProps = {}

export default GoogleMap
