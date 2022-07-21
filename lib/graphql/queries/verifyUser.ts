import { gql } from '@apollo/client'

export const VERIFY_USER = gql`
  query VERIFY_USER($email: String, $username: String) {
    verifyUser(email: $email, username: $username) {
      byUsername {
        id
        username
      }
      byEmail {
        id
        username
      }
    }
  }
`
