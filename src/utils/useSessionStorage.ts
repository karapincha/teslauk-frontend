import { useState, useEffect } from 'react'

export const useSessionStorage = (key: any, defaultValue: any = null) => {
  const [value, setValue] = useState(getValueFromSessionStorage(key))

  function init() {
    const initialValue = getValueFromSessionStorage(key)
    if (initialValue === null || initialValue === 'null') {
      set(defaultValue)
    }
  }

  function getValueFromSessionStorage(key: any) {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key)
    }
  }

  function saveValueToSessionStorage(key: any, value: any) {
    return sessionStorage.setItem(key, value)
  }

  function set(newValue: any) {
    setValue(newValue)
    saveValueToSessionStorage(key, newValue)
  }

  function remove() {
    set(null)
    sessionStorage.removeItem(key)
  }

  function clear() {
    set(null)
    sessionStorage.clear()
    localStorage.clear()
  }

  useEffect(() => {
    init()
  }, [])

  return {
    value,
    set,
    remove,
    clear,
  }
}

export default useSessionStorage
