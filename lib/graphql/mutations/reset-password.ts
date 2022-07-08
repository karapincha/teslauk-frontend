import { gql } from '@apollo/client'

export const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($username: String!) {
    sendPasswordResetEmail(input: { username: $username }) {
      user {
        email
      }
    }
  }
`
