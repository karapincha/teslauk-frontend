import { useQuery, gql } from '@apollo/client'

export const LOGIN = gql`
  mutation LOGIN($username: String!, $password: String!) {
    loginWithCookies(input: { password: $password, login: $username }) {
      status
      # authToken
      # clientMutationId
      # refreshToken
      # sessionToken
      # user {
      #   id
      #   username
      #   email
      #   description
      #   firstName
      #   lastName
      #   name
      #   nicename
      #   nickname
      #   slug
      #   url
      #   uri
      #   wooSessionToken
      #   databaseId
      # }
    }
  }
`
