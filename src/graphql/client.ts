import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: process.env.SPACEX_GRAPHQL_HOST,
  cache: new InMemoryCache()
})

export default withApollo(apolloClient)
