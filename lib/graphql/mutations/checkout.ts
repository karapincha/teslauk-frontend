import { gql } from '@apollo/client'

export const CHECKOUT = gql`
  mutation CHECKOUT(
    $paymentMethod: String!
    $isPaid: Boolean!
    $email: String!
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    checkout(
      input: {
        paymentMethod: $paymentMethod
        isPaid: $isPaid
        billing: { email: $email, firstName: $firstName, lastName: $lastName }
        account: { password: $password, username: $username }
      }
    ) {
      clientMutationId
      redirect
      result
      order {
        databaseId
        id
        databaseId
      }
      customer {
        id
        sessionToken
        jwtUserSecret
        jwtRefreshToken
        jwtAuthToken
        jwtAuthExpiration
      }
    }
  }
`
