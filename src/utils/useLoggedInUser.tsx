import React, { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR_CART,
  UPDATE_USER,
  GET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  UPDATE_ORDER,
} from '../../lib/graphql'

export const useLoggedInUser = () => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER)
  const { viewer } = data || {}

  useEffect(() => {
    console.log(`user`, viewer)
  }, [data])

  return { user: viewer }
}

export default useLoggedInUser
