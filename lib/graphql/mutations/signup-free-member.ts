import { useQuery, gql } from '@apollo/client'

export const SIGNUP_FREE_MEMBER = gql`
  mutation SIGNUP_FREE_MEMBER(
    $email: String = ""
    $firstName: String = ""
    $lastName: String = ""
    $password: String = ""
    $username: String = ""
  ) {
    registerCustomer(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        username: $username
      }
    ) {
      authToken
      refreshToken
      viewer {
        email
        capabilities
        firstName
        id
        lastName
        name
        slug
        username
      }
    }
  }
`
