import { useQuery, gql } from '@apollo/client'

export const LOGOUT = gql`
  mutation LOGOUT {
    logout(input: {}) {
      status
    }
  }
`
