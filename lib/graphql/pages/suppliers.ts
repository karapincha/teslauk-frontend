import { fetchAPI } from '../../api'

export async function getSuppliersPage() {
  const data = await fetchAPI(
    `query getSuppliersPage {
      header: block(id: "suppliers-header", idType: SLUG) {
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
      keyPartners: block(id: "key-partners", idType: SLUG) {
        slug
        blockPartners {
          heading
          subHeading
          primaryButtonText
          partners {
            link
            name
            image {
              mediaItemUrl
            }
          }
        }
      }
      verifiedSuppliers: block(id: "verified-suppliers", idType: SLUG) {
        slug
        blockVerifiedSuppliers {
          description
          heading
          primaryButtonText
          subHeading
        } 
      }
      supplierTags(first: 100) {
        nodes {
          name
          slug
        }
      }
      suppliers(first: 100) {
        nodes {
          id
          title
          slug
          supplierTags {
            edges {
              node {
                slug
                name
              }
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
            name
            phone
            excerpt
            website
            logo {
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
