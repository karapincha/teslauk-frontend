import { useQuery, gql } from '@apollo/client'

export const UPDATE_ORDER = gql`
  mutation UPDATE_ORDER($id: ID) {
    updateOrder(input: { id: $id, status: COMPLETED }) {
      clientMutationId
    }
  }
`
