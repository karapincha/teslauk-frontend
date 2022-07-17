import { fetchAPI } from '../../api'

export async function getUserOrders() {
  const data = await fetchAPI(`{
    orders {
      nodes {
        id
        date
        dateCompleted
        datePaid
        orderNumber
        needsPayment
        customerIpAddress
        currency
      }
    }
  }`)
  return data?.orders
}
