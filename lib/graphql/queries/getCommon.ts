import { gql } from '@apollo/client'

export const GET_COMMON = gql`
  query getCommon {
    suppliers(first: 100) {
      nodes {
        id
        title
        slug
        pageSupplier {
          logoInverted {
            mediaItemUrl
          }
          isFeatured
        }
      }
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
