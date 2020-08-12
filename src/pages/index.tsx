import withApollo from 'graphql/client'
import { useQuery } from '@apollo/react-hooks'

import GET_SPACEX_ROCKETS from 'graphql/queries/getSpacexRockets'

import Main from 'components/Main'

function Home() {
  const { data } = useQuery(GET_SPACEX_ROCKETS)
  return <Main rockets={data && data.rockets}></Main>
}

export default withApollo({ ssr: true })(Home)
