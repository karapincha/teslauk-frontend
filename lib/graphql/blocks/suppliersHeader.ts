import { fetchAPI } from '../../api'

export async function getSuppliersHeaderBlock() {
  const data = await fetchAPI(
    `query getSuppliersHeaderBlock {
      block(id: "suppliers-header", idType: SLUG) {
        slug
        blockSuppliersHeader {
          description
          heading
          image {
            mediaItemUrl
          }
          primaryButtonText
          tagline
        }
      }
    }
    `
  )
  return data
}
