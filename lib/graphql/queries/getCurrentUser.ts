import { useQuery, gql } from '@apollo/client'

export const GET_CURRENT_USER = gql`
  {
    viewer {
      id
      firstName
      lastName
    }
  }
`
