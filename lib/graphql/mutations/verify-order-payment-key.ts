import { gql } from '@apollo/client'

export const VERIFY_ORDER_PAYMENT_KEY = gql`
  mutation VERIFY_ORDER_PAYMENT_KEY($input: VerifyOrderByOrderKeyInput!) {
    verifyOrderByOrderKey(input: $input) {
      orders
    }
  }
`
