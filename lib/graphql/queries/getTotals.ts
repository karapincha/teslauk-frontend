import { fetchAPI } from '../../api'

export async function getTotals() {
  const data = await fetchAPI(`
  {
    guides(first: 1000, where: {status: PUBLISH}) {
      pageInfo {
        total
      }
    }
  }
  `)
  return data
}
