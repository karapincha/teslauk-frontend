import { fetchAPI } from '../../api'

export async function getVerifiedSuppliersBlock() {
  const data = await fetchAPI(
    `query getVerifiedSuppliersBlock {
      block(id: "featured-events", idType: SLUG) {
        blockFeaturedEvents {
          description
          heading
          primaryButtonText
          subHeading
          featuredImage {
            mediaItemUrl
          }
          featuredEvents {
            ... on Event {
              id
              pageEvent {
                contactEmail
                date
                location
                time
                featuredImage {
                  mediaItemUrl
                }
                mapLocation {
                  latitude
                  longitude
                }
              }
              title
              excerpt
            }
          }
        }
        slug
      }
    }
    `
  )
  return data
}
