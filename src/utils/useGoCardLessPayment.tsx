import React, { useState } from 'react'
import axios from 'axios'

export const useGoCardLessPayment = () => {
  /* Handle GoCardLess Payment Processing */
  const handleGoCardLessPayment = async ({ cart, email }: any) => {
    const { data }: any = await axios.post('/api/get-gocardless-payment', {
      cart,
      email,
    })
    return data
  }

  /* Verify GoCardLess Payment */
  const handleVerifyGoCardLessPayment = async (sessionId: any) => {
    const { data }: any = await axios.post('/api/verify-gocardless-payment', {
      sessionId,
    })
    return data
  }

  return {
    handleGoCardLessPayment,
    handleVerifyGoCardLessPayment,
  }
}
