import { gql } from '@apollo/client'

export const GET_FULL_USER = gql`
  query getFullUser($id: ID!) {
    customer: customer(id: $id) {
      displayName
      date
      databaseId
      email
      firstName
      orders {
        nodes {
          id
          lineItems {
            nodes {
              orderId
              product {
                node {
                  name
                }
              }
            }
          }
          databaseId
          dateCompleted
          date
          datePaid
          status
        }
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
      id
      datePaid
      lastPayment
      nextPayment
      products
      data_json
    }
    orders: userOrders {
      data_json
    }
  }
`
