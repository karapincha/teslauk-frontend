import { useQuery, gql } from '@apollo/client'

export const SEND_MAIL = gql`
  mutation SEND_EMAIL($body: String!, $to: String!, $subject: String!) {
    sendEmail(
      input: {
        to: $to
        from: "no-reply@karapincha.io"
        subject: $subject
        body: $body
        clientMutationId: "test"
      }
    ) {
      origin
      sent
      message
    }
  }
`
