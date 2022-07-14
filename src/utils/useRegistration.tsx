import React, { useState } from 'react'
import { useRouter } from 'next/router'
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

export const useRegistration = ({ productId }: any) => {
  const router = useRouter()

  /* Mutations ===> */
  const [login, { loading: loadingLogin }] = useMutation(LOGIN)
  const [clearCart, { loading: loadingClearCart }] = useMutation(CLEAR_CART)
  const [logout, { loading: loadingLogout, data: logoutData }] = useMutation(LOGOUT)
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER)
  const [updateOrder, { loading: loadingUpdateOrder }] = useMutation(UPDATE_ORDER)
  const [checkout, { loading: loadingCheckout }] = useMutation(CHECKOUT)
  const [addToCart, { loading: loadingAddToCart }] = useMutation(ADD_TO_CART, {
    variables: {
      productId,
    },
  })

  /* Queries ===> */
  const {
    data: currentUserData,
    loading: loadingCurrentUser,
    refetch: getCurrentUser,
  } = useQuery(GET_CURRENT_USER, {
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
          return onFail(res)
        }
        return
      })
  }

  const runCheckout = async ({ variables, onSuccess, onFail }: any) => {
    addToCart()
      .then(() => {
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
      })
      .catch(() => {})
  }

  const runGetRegisteredUser = async ({ username, password, onSuccess, onFail }: any) => {
    const { data: logoutRes } = await logout()

    if (logoutRes.logout.status === 'SUCCESS') {
      login({
        variables: {
          username,
          password,
        },
      })
        .then(() => {
          getCurrentUser()
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
        })
        .catch(() => {})
    } else {
    }
  }

  const runUpdateOrderStatus = async ({ variables, onSuccess, onFail }: any) => {
    updateOrder({ variables })
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
    runUpdateOrderStatus,
  }
}

export default useRegistration
