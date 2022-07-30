import React, { useState } from 'react'
import axios from 'axios'

export const useStripePayment = () => {
  /* Handle Stripe Payment Processing */
  const handleStripePayment = async (cart: any) => {
    const { data }: any = await axios.post('/api/get-stripe-payment', {
      cart,
    })
    return data?.session?.url
  }

  /* Verify Stripe Payment */
  const handleVerifyStripePayment = async (sessionId: any) => {
    const { data }: any = await axios.post('/api/verify-stripe-payment', {
      sessionId,
    })
    return data
  }

  return {
    handleStripePayment,
    handleVerifyStripePayment,
  }
}
