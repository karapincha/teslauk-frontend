import React, { useState, createContext, useContext, useEffect } from 'react'
import App from 'next/app'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { ToastContainer } from '@/components/molecules'
import { AppWrapper } from '@/context'

import Script from 'next/script'

import 'remixicon/fonts/remixicon.css'
import '@/styles/tailwind.scss'
import '@/styles/typography.scss'
import '@/styles/common.scss'
import '@/styles/custom-form.scss'
import '@/styles/overrides.scss'
import 'nprogress/nprogress.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tesla Owners UK</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <Script src='https://polyfill.io/v3/polyfill.min.js?features=default' />
        <Script
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDZg69S5y7fCcl0iiDqd_Q_Vvi_F213OKw'
          defer
        />
      </Head>

      <ApolloProvider client={client}>
        <AppWrapper>
          <Component {...pageProps} />
          <ToastContainer />
        </AppWrapper>
      </ApolloProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
