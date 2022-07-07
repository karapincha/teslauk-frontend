import { useQuery, gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation UPDATE_USER {
    updateUser(input: { id: "34", tesla_model: "Model Y", ref_source: "Google", vin: "123" }) {
      clientMutationId
      user {
        customerExtraFields {
          refSource
          teslaModel
          vinNumber
        }
      }
    }
  }
`
