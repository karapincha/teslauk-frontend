import { useEffect, useState, useRef } from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import { Button } from '@/components/atoms'

export function replaceStringWithComponent(content: any, stringType: string, Component: any) {
  if (content && stringType === 'CTA') {
    const encodedContent = parse(content, {
      replace: (domNode: any) => {
        if (domNode && domNode.type === 'text') {
          const CTA = domNode.data.match(/\[CTA.*?\]/)

          if (CTA) {
            const encoded: any = parse(CTA[0])
            const quotesReplaced = encoded.replace(/[”]+/g, '"')
            const getCTALink = quotesReplaced.match(/\link="(.*?)\"/)
            const getCTAText = quotesReplaced.match(/text=(["\'])?((?:.(?!\1|>))*.?)\1?/)
            const CTAElement = (
              <Link href={getCTALink[1] || ''} passHref>
                <a target='__blank' className='no-underline'>
                  <Button>{getCTAText[2] || 'Click here'}</Button>
                </a>
              </Link>
            )

            return CTAElement
          }
        }
      },
    })

    return encodedContent
  }

  return parse(content)
}
