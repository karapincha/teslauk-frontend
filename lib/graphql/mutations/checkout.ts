import { useQuery, gql } from '@apollo/client'

export const CHECKOUT = gql`
  mutation CHECKOUT(
    $email: String!
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    checkout(
      input: {
        paymentMethod: "none"
        isPaid: true
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
      }
    }
  }
`
