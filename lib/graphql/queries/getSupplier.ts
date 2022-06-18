import { fetchAPI } from '../../api'

export async function getSupplier(slug: any) {
  const data = await fetchAPI(`
  {
    supplier(id: "${slug}", idType: SLUG) {
      id
      title
      supplierTags {
        nodes {
          name
          slug
        }
      }
      pageSupplier {
        address
        description
        email
        isFeatured
        isVerified
        location {
          latitude
          longitude
        }
        logo {
          mediaItemUrl
        }
        name
        phone
        excerpt
        website
      }
    }
  }
  `)
  return data
}
