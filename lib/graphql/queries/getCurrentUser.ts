import { useQuery, gql } from '@apollo/client'

export const GET_CURRENT_USER = gql`
  {
    viewer {
      databaseId
      description
      email
      firstName
      id
      isRestricted
      lastName
      name
      nicename
      nickname
      registeredDate
      username
      customerExtraFields {
        refSource
        teslaModel
        vinNumber
      }
      avatar {
        url
      }
    }
  }
`
