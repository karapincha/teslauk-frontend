import React, { useState, createContext, useContext, useRef } from 'react'
import { useOutsideClick } from '@/utils'

const AppContext = createContext({})

export function AppWrapper({ children, values }: any) {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const wrapperRef = useRef(null)
  const hamburgerRef = useRef(null)

  let sharedState = {
    sideMenu: { showSideMenu, setShowSideMenu, wrapperRef, hamburgerRef },
  }

  useOutsideClick(wrapperRef, () => setShowSideMenu(false), hamburgerRef)

  return <AppContext.Provider value={{ ...sharedState, ...values }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
