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
      <ApolloProvider client={client}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ApolloProvider>
    </>
  )
}

export default MyApp
