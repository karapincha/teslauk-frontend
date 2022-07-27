import { useQuery, gql } from '@apollo/client'

export const UPDATE_BILLING = gql`
  mutation UPDATE_BILLING(
    $id: ID!
    $address1: String
    $address2: String
    $city: String
    $company: String
    $country: CountriesEnum
    $email: String
    $firstName: String
    $lastName: String
    $phone: String
    $postcode: String
    $state: String
  ) {
    updateCustomer(
      input: {
        id: $id
        billing: {
          address1: $address1
          address2: $address2
          city: $city
          company: $company
          country: $country
          email: $email
          firstName: $firstName
          lastName: $lastName
          phone: $phone
          postcode: $postcode
          state: $state
        }
      }
    ) {
      customer {
        username
        billing {
          firstName
          lastName
          email
        }
        shipping {
          firstName
          lastName
          email
        }
      }
    }
  }
`

export const UPDATE_SHIPPING = gql`
  mutation UPDATE_SHIPPING(
    $id: ID!
    $address1: String
    $address2: String
    $city: String
    $company: String
    $country: CountriesEnum
    $email: String
    $firstName: String
    $lastName: String
    $phone: String
    $postcode: String
    $state: String
  ) {
    updateCustomer(
      input: {
        id: $id
        shipping: {
          address1: $address1
          address2: $address2
          city: $city
          company: $company
          country: $country
          email: $email
          firstName: $firstName
          lastName: $lastName
          phone: $phone
          postcode: $postcode
          state: $state
        }
      }
    ) {
      customer {
        username
        shipping {
          firstName
          lastName
          email
        }
      }
    }
  }
`
