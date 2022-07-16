import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useOutsideClick, useLoggedInUser } from '@/utils'
import { useQuery, gql } from '@apollo/client'

import { GET_COMMON } from '../lib/graphql'

const AppContext = createContext({})

export function AppWrapper({ children, values }: any) {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const { user, refetchUser } = useLoggedInUser()
  const wrapperRef = useRef(null)
  const hamburgerRef = useRef(null)

  const {
    data: commonData,
    loading: loadingCommonData,
    refetch: refetchCommonData,
  } = useQuery(GET_COMMON)

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
    refetchUser,
  }

  useOutsideClick(wrapperRef, () => setShowSideMenu(false), hamburgerRef)

  return <AppContext.Provider value={{ ...sharedState, ...values }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
