import { fetchAPI } from '../../api'

export async function getBlockTestimonial() {
  const data = await fetchAPI(`{
    testimonials: block(id: "testimonials", idType: SLUG) {
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
  }`)
  return data
}
