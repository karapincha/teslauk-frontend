import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://teslaowners.kp.lk/cms',
  cache: new InMemoryCache(),
})

export default client
