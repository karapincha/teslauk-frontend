import { fetchAPI } from '../../api'

export async function getTestimonialBlock() {
  const data = await fetchAPI(
    `query getTestimonialBlock {
      block(id: "testimonials", idType: SLUG) {
        blockTestimonials {
          description
          heading
          primaryButtonText
          subHeading
          featuredTestimonial {
            ... on Testimonial {
              id
              title
              pageTestimonial {
                author
                role
                testimonial
                image {
                  mediaItemUrl
                }
              }
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
