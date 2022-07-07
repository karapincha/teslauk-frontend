import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

const httpLink = new HttpLink({
  uri: 'https://teslaowners.kp.lk/cms',
})

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
  /**
   * If session and auth data exist in local storage, set value as header.
   */
  const session = localStorage.getItem('woo-session')
  const token = localStorage.getItem('token')

  if (session || token) {
    operation.setContext(({ headers = {} }) => {
      if (session && session !== 'undefined' && token && token !== 'undefined') {
        return {
          headers: {
            'woocommerce-session': session && `Session ${session}`,
            'Authorization': token && `Bearer ${token}`,
          },
        }
      }

      if ((session || session !== 'undefined') && (!token || token === 'undefined')) {
        return {
          headers: {
            'woocommerce-session': session && `Session ${session}`,
          },
        }
      }

      if ((!session || session === 'undefined') && token && token !== 'undefined') {
        return {
          headers: {
            Authorization: token && `Bearer ${token}`,
          },
        }
      }
    })
  }

  return forward(operation)
})

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext()
    const {
      response: { headers },
    } = context
    const session = headers.get('woocommerce-session')
    const authToken = headers.get('X-JWT-Auth')
    if (session) {
      if (localStorage.getItem('woo-session') !== session) {
        localStorage.setItem('woo-session', headers.get('woocommerce-session'))
      }
    }
    if (authToken) {
      if (localStorage.getItem('token') !== authToken) {
        localStorage.setItem('token', headers.get('authToken'))
      }
    }

    return response
  })
})

const client = new ApolloClient({
  link: middleware.concat(afterware.concat(httpLink)),
  cache: new InMemoryCache(),
  clientState: {},
})

export default client
