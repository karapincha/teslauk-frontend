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

  /* Mutations ===> */
  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [logout, { loading: loadingLogout }] = useMutation(LOGOUT)
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER)
  const [checkout, { loading: loadingCheckout }] = useMutation(CHECKOUT)
  const [addToCart, { loading: loadingAddToCart }] = useMutation(ADD_TO_CART, {
    variables: {
      productId,
    },
  })

  /* Queries ===> */
  const { loading: loadingCurrentUser, refetch: getCurrentUser } = useQuery(GET_CURRENT_USER, {
    skip: true,
  })

  /* Functions ===> */
  const runClearCart = (onSuccess?: any, onFail?: any) => {
    clearCart()
      .then((res: any) => {
        if (onSuccess) {
          return onSuccess(res)
        }
        return
      })
      .catch((res: any) => {
        if (onFail) {
          return onSuccess(res)
        }
        return
      })
  }

  const runCheckout = ({ variables, onSuccess, onFail }: any) => {
    checkout({
      variables,
    })
      .then((res: any) => {
        if (onSuccess) {
          return onSuccess(res)
        }
        return
      })
      .catch((res: any) => {
        if (onFail) {
          return onSuccess(res)
        }
        return
      })
  }

  return {
    /* Mutations */
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

    /* Queries */
    getCurrentUser,
    loadingCurrentUser,

    /* Functions */
    runClearCart,
    runCheckout,
  }
}

export default useRegistration
