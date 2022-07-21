import { fetchAPI } from '../../api'

export async function getRegions() {
  const data = await fetchAPI(`
  {
    regions {
      nodes {
        slug
        title
        pageRegion {
          description
          events {
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
          regionSpecificSocialMedia {
            facebook
            twitter
          }
          organisers {
            ... on TeamMember {
              title
              slug
              pageTeam {
                email
                emailVisibleToPublic
                linkedin
                picture {
                  mediaItemUrl
                }
                role
                roleType
              }
            }
          }
        }
      }
    }
  `)
  return data?.teamMembers
}
