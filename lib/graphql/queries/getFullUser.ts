import { gql } from '@apollo/client'

export const GET_FULL_USER = gql`
  query getFullUser($id: ID!) {
    customer: customer(id: $id) {
      id
      billing {
        address1
        city
        address2
        company
        country
        email
        firstName
        lastName
        phone
        postcode
        state
      }
      calculatedShipping
      databaseId
      date
      displayName
      email
      firstName
      hasCalculatedShipping
      isPayingCustomer
      lastName
      orderCount
      orders {
        nodes {
          databaseId
          date
          datePaid
          dateCompleted
          id
          lineItems {
            nodes {
              productId
              product {
                node {
                  name
                  slug
                  sku
                  status
                }
              }
              subtotal
              quantity
              total
              totalTax
            }
          }
          modified
          orderKey
          orderNumber
          orderVersion
          status
          total
          totalTax
        }
      }
      username
      totalSpent
      shipping {
        address1
        address2
        city
        company
        country
        email
        firstName
        lastName
        phone
        postcode
        state
      }
    }
    memberships: userMemberships {
      membershipId
      id
      name
      slug
      data_json
    }
    subscriptions: userSubscriptions {
      datePaid
      lastPayment
      nextPayment
      data_json
    }
    activeSubscriptions: userActiveSubscriptions {
      data_json
      datePaid
      id
      lastPayment
      nextPayment
      products
      start
      status
      end
      date_created
    }
    orders: userOrders {
      data_json
    }
  }
`
