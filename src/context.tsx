import _ from 'lodash'

import Router from 'next/router'
import NProgress from 'nprogress'

import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useOutsideClick, useLoggedInUser } from '@/utils'
import { useQuery, gql } from '@apollo/client'

import { GET_COMMON, GET_FULL_USER, GET_CART } from '../lib/graphql'

const AppContext = createContext({})

export function AppWrapper({ children, values }: any) {
  const wrapperRef = useRef(null)
  const hamburgerRef = useRef(null)

  const { user, refetchUser } = useLoggedInUser()

  const [isPageLoading, setIsPageLoading] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [_orders, _setOrders] = useState<any>()
  const [isSupporter, setIsSupporter] = useState<any>(null)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
      setIsPageLoading(true)
    })
    Router.events.on('routeChangeComplete', () => {
      NProgress.done()
      setIsPageLoading(false)
      setShowSideMenu(false)
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
      setIsPageLoading(false)
      setShowSideMenu(false)
    })

    return () => {
      Router.events.off('routeChangeStart', () => {
        NProgress.start()
        setIsPageLoading(true)
      })
      Router.events.off('routeChangeComplete', () => {
        NProgress.done()
        setIsPageLoading(false)
        setShowSideMenu(false)
      })
      Router.events.off('routeChangeError', () => {
        NProgress.done()
        setIsPageLoading(false)
        setShowSideMenu(false)
      })
    }
  }, [])

  const { data: commonData, loading: loadingCommonData } = useQuery(GET_COMMON)
  const { data: cart, loading: loadingCart, refetch: refetchCart } = useQuery(GET_CART)

  const {
    data: fullUser,
    refetch: refetchFullUser,
    loading: fullUserLoading,
  } = useQuery(GET_FULL_USER, {
    variables: {
      id: user?.id,
    },
  })

  useEffect(() => {
    if (user && user?.id) {
      refetchFullUser()
    }
  }, [user])

  useEffect(() => {
    /* User Orders */
    if (fullUser?.customer?.orders) {
      _setOrders(fullUser?.customer?.orders?.nodes)
    }
  }, [fullUser])

  useEffect(() => {
    const userSubscriptions = fullUser?.activeSubscriptions?.map((subscription: any) => {
      const { data_json, ...restSubscription } = subscription
      const productsJson = restSubscription?.products ? JSON.parse(restSubscription?.products) : {}

      const isSupporter = productsJson.some(({ product_id }: any) => {
        if (product_id === Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_FREE_ID)) {
          setIsSupporter(false)
          return false
        }

        setIsSupporter(true)
        return true
      })

      const mergedSubscriptionData = {
        ...restSubscription,
        products: productsJson,
        isSupporter,
      }

      return mergedSubscriptionData
    })

    console.log('userSubscriptions', userSubscriptions)
  }, [fullUser])

  useOutsideClick(wrapperRef, () => setShowSideMenu(false), hamburgerRef)

  let sharedState = {
    isLoading: isPageLoading || loadingCommonData,
    sidemenu: {
      showSideMenu,
      setShowSideMenu,
      wrapperRef,
      hamburgerRef,
      menuItems: commonData?.menu?.blockGlobalHeader?.sidemenuLinks,
    },
    header: commonData?.menu?.blockGlobalHeader,
    footer: commonData?.footer?.blockFooter,
    suppliers: commonData?.suppliers?.nodes,
    user,
    fullUser,
    fullUserLoading,
    userOrders: _orders,
    refetchUser,
    refetchFullUser,
    cart: cart?.cart,
    refetchCart,
    isSupporter,
  }

  return <AppContext.Provider value={{ ...sharedState, ...values }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
