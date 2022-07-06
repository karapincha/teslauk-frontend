import { useQuery, gql } from '@apollo/client'

export const LOGIN = gql`
  mutation LOGIN($username: String!, $password: String!) {
    login(input: { password: $password, username: $username }) {
      authToken
      clientMutationId
      refreshToken
      sessionToken
      user {
        username
        email
        description
        firstName
        lastName
        name
        nicename
        nickname
        slug
        url
        uri
        wooSessionToken
      }
    }
  }
`
