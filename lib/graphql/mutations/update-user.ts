import { useQuery, gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $id: ID!
    $model: String!
    $source: String!
    $vin: String!
    $gocardlessId: String
    $stripeId: String
  ) {
    updateUser(
      input: {
        id: $id
        tesla_model: $model
        ref_source: $source
        vin: $vin
        gocardless_customer_id: $gocardlessId
        stripe_customer_id: $stripeId
      }
    ) {
      clientMutationId
      user {
        customerExtraFields {
          refSource
          teslaModel
          vinNumber
          gocardlessCustomerId
          stripeCustomerId
        }
      }
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation UPDATE_PROFILE(
    $id: ID!
    $email: String
    $firstName: String
    $lastName: String
    $password: String
  ) {
    updateUser(
      input: {
        id: $id
        firstName: $firstName
        email: $email
        lastName: $lastName
        password: $password
      }
    ) {
      user {
        userId
      }
    }
  }
`
