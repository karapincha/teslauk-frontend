import { fetchAPI } from '../../api'

export async function getFeaturedEventsBlock() {
  const data = await fetchAPI(
    `query getFeaturedEventsBlock {
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
