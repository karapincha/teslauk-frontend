import _ from 'lodash'

import Router from 'next/router'
import NProgress from 'nprogress'

import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useOutsideClick, useLoggedInUser } from '@/utils'
import { useQuery, gql } from '@apollo/client'

import { GET_COMMON, GET_FULL_USER, GET_CART } from '../lib/graphql'

const AppContext = createContext({})

export function AppWrapper({ children, values }: any) {
  const [isPageLoading, setIsPageLoading] = useState(false)
  const { data: commonData, loading: loadingCommonData } = useQuery(GET_COMMON)
  const { data: cart, loading: loadingCart, refetch: refetchCart } = useQuery(GET_CART)

  const wrapperRef = useRef(null)
  const hamburgerRef = useRef(null)

  const [showSideMenu, setShowSideMenu] = useState(false)
  const [_orders, _setOrders] = useState<any>()

  const { user, refetchUser } = useLoggedInUser()

  const {
    data: fullUser,
    refetch: fetchFullUser,
    loading: fullUserLoading,
  } = useQuery(GET_FULL_USER, {
    variables: {
      id: user?.id,
    },
  })

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

  useEffect(() => {
    if (user && user?.id) {
      fetchFullUser()
    }
  }, [user])

  useEffect(() => {
    /* User Orders */
    if (fullUser?.customer?.orders) {
      _setOrders(fullUser?.customer?.orders?.nodes)
    }
  }, [fullUser])

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
    fetchFullUser,
    cart: cart?.cart,
    refetchCart,
  }

  useOutsideClick(wrapperRef, () => setShowSideMenu(false), hamburgerRef)

  return <AppContext.Provider value={{ ...sharedState, ...values }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
