import _ from 'lodash'

import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useOutsideClick, useLoggedInUser } from '@/utils'
import { useQuery, gql } from '@apollo/client'

import { GET_COMMON, GET_FULL_USER } from '../lib/graphql'

const AppContext = createContext({})

export function AppWrapper({ children, values }: any) {
  const wrapperRef = useRef(null)
  const hamburgerRef = useRef(null)

  const [showSideMenu, setShowSideMenu] = useState(false)
  const [_orders, _setOrders] = useState<any>()

  const { user, refetchUser } = useLoggedInUser()

  const { data: commonData, loading: loadingCommonData } = useQuery(GET_COMMON)
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
    if (user && user?.id) {
      fetchFullUser()
    }
  }, [user])

  useEffect(() => {
    /* User Orders */
    if (fullUser?.orders) {
      _setOrders(
        fullUser?.orders?.map((order: any) => {
          return JSON.parse(order?.data_json)
        })
      )
    }
  }, [fullUser])

  let sharedState = {
    isLoading: loadingCommonData,
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
  }

  useOutsideClick(wrapperRef, () => setShowSideMenu(false), hamburgerRef)

  return <AppContext.Provider value={{ ...sharedState, ...values }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
