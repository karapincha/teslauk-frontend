import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR_CART,
  UPDATE_USER,
  GET_CURRENT_USER,
  LOGOUT,
} from '../../lib/graphql'

export const useRegistration = ({ productId }: any) => {
  const router = useRouter()

  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [logout, { loading: loadingLogout }] = useMutation(LOGOUT)
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER)
  const [checkout, { loading: loadingCheckout }] = useMutation(CHECKOUT)
  const [addToCart, { loading: loadingAddToCart }] = useMutation(ADD_TO_CART, {
    variables: {
      productId,
    },
  })

  return {
    logout,
    loadingLogout,
    updateUser,
    loadingUpdateUser,
    addToCart,
    loadingAddToCart,
    clearCart,
    loadingClearCart,
    checkout,
    loadingCheckout,
  }
}

export default useRegistration
