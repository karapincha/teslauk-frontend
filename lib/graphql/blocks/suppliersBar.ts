import { fetchAPI } from '../../api'

export async function getSupplierBlock() {
  const data = await fetchAPI(
    `query getSupplierBlock {
      suppliers {
        nodes {
          id
          title
          slug
          pageSupplier {
            logoInverted {
              mediaItemUrl
            }
          }
        }
      }
    }
    `
  )
  return data
}
