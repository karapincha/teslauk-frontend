import { gql } from '@apollo/client'

export const UPDATE_ORDER = gql`
  mutation UPDATE_ORDER($orderId: Int, $status: OrderStatusEnum = ON_HOLD) {
    updateOrder(input: { orderId: $orderId, status: $status }) {
      clientMutationId
    }
  }
`
