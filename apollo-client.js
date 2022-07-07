import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

const link = createHttpLink({
  uri: 'https://teslaowners.kp.lk/cms',
  credentials: 'include',
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
