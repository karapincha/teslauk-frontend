import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useOutsideClick, useSessionStorage } from '@/utils'

const AppContext = createContext({})

export function AppWrapper({ children, values }: any) {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [token, setToken] = useState<any>('')
  const wrapperRef = useRef(null)
  const hamburgerRef = useRef(null)
  const { value: sessionToken, set, remove } = useSessionStorage('token', '')

  useEffect(() => {
    setToken(sessionToken)
  }, [sessionToken])

  let sharedState = {
    sideMenu: { showSideMenu, setShowSideMenu, wrapperRef, hamburgerRef },
    token,
    setToken,
  }

  useOutsideClick(wrapperRef, () => setShowSideMenu(false), hamburgerRef)

  return <AppContext.Provider value={{ ...sharedState, ...values }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
