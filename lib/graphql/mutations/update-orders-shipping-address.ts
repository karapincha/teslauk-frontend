import { gql } from '@apollo/client'

export const UPDATE_ORDERS_SHIPPING_ADDRESS = gql`
  mutation UPDATE_ORDERS_SHIPPING_ADDRESS(
    $customerId: String!
    $address1: String
    $address2: String
    $city: String
    $country: String
    $email: String
    $first_name: String
    $last_name: String
    $phone: String
    $postcode: String
    $state: String
  ) {
    updateOrdersShippingAddress(
      input: {
        customerId: $customerId
        shipping_address_1: $address1
        shipping_address_2: $address2
        shipping_city: $city
        shipping_country: $country
        shipping_email: $email
        shipping_first_name: $first_name
        shipping_last_name: $last_name
        shipping_phone: $phone
        shipping_postcode: $postcode
        shipping_state: $state
      }
    ) {
      customerId
    }
  }
`
