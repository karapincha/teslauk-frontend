import { fetchAPI } from '../../api'

export async function getUserOrders() {
  const data = await fetchAPI(`{
    userOrders {
      data_json
    }
  }`)
  return data
}
