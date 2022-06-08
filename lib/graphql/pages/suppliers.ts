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
      supplierBar: block(id: "suppliers-bar", idType: SLUG) {
        blockSuppliersBar {
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
      footer: block(id: "footer", idType: SLUG) {
        slug
        blockFooter {
          address
          bottomLinks {
            link
            name
          }
          description
          email
          linkBlock1Heading
          linkBlock1Links {
            link
            name
          }
          linkBlock2Heading
          linkBlock2Links {
            link
            name
          }
          linkBlock3Heading
          linkBlock3Links {
            link
            name
          }
          phone
        }
      }
    }
    `
  )
  return data
}
