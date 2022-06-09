import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://touk.be.kp.lk.local:8888/cms',
  cache: new InMemoryCache(),
})

export default client
