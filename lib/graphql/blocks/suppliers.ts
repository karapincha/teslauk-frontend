import { fetchAPI } from '../../api'

export async function getSupplierBlock() {
  const data = await fetchAPI(
    `query getSupplierBlock {
      block(id: "suppliers", idType: SLUG) {
        blockSuppliers {
          logos {
            image {
              mediaItemUrl
            }
            link
            name
          }
        }
        slug
      }
    }
    `
  )
  return data
}
