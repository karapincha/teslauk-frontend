import { fetchAPI } from '../../api'

export async function getAllTestimonials() {
  const data = await fetchAPI(`
  {
    testimonials(first: 100) {
      nodes {
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
  `)
  return data?.testimonials
}
