import { useQuery, gql } from '@apollo/client'

export const GET_COMMON = gql`
  query getCommon {
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
