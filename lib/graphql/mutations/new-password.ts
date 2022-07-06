import { useQuery, gql } from '@apollo/client'

export const NEW_PASSWORD = gql`
  mutation NEW_PASSWORD($key: String!, $password: String!, $login: String!) {
    resetUserPassword(input: { key: $key, login: $login, password: $password }) {
      user {
        email
      }
    }
  }
`
