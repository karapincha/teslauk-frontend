import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

import 'remixicon/fonts/remixicon.css'
import '@/styles/tailwind.scss'
import '@/styles/typography.scss'
import '@/styles/common.scss'
import '@/styles/custom-form.scss'
import '@/styles/overrides.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
