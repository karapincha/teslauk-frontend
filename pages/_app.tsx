import Head from 'next/head'
import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { Common as CommonLayout } from '@/components/layouts'

import 'remixicon/fonts/remixicon.css'
import '@/styles/tailwind.scss'
import '@/styles/typography.scss'
import '@/styles/common.scss'
import '@/styles/custom-form.scss'
import '@/styles/overrides.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <script src='https://polyfill.io/v3/polyfill.min.js?features=default'></script>
        <script
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBlPs-kgyXJNDZuMJ36LsVIL4ahfUjrWtI'
          defer></script>
      </Head>

      <ApolloProvider client={client}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ApolloProvider>
    </>
  )
}

export default MyApp
