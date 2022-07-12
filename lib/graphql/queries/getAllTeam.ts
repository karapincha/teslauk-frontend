import { fetchAPI } from '../../api'

export async function getAllTeam() {
  const data = await fetchAPI(`
  {
    teamMembers(first: 100) {
      nodes {
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
  `)
  return data?.teamMembers
}
