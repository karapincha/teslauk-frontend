import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR_CART,
  UPDATE_USER,
  GET_CURRENT_USER,
  LOGIN,
  LOGOUT,
} from '../../lib/graphql'

export const useRegistration = ({ productId }: any) => {
  const router = useRouter()

  /* Mutations ===> */
  const [login, { loading: loadingLogin }] = useMutation(LOGIN)
  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [logout, { loading: loadingLogout }] = useMutation(LOGOUT)
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER)
  const [checkout, { loading: loadingCheckout }] = useMutation(CHECKOUT)
  const [addToCart, { loading: loadingAddToCart }] = useMutation(ADD_TO_CART, {
    variables: {
      productId,
    },
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
          return onFail(res)
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
          return onFail(res)
        }
        return
      })
  }

  const runGetRegisteredUser = ({ username, password }: any) => {
    logout()
      .then(() => {
        login({
          variables: {
            username,
            password,
          },
        })
      })
      .catch(() => {
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

    /* Functions */
    runClearCart,
    runCheckout,
    runGetRegisteredUser,
  }
}

export default useRegistration
