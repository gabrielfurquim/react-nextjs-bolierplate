import withApollo from 'graphql/client'
import { useQuery } from '@apollo/react-hooks'

import GET_SPACEX_ROCKETS from 'graphql/queries/getSpacexRockets'

import Main from 'components/Main'

function Home() {
  const { data } = useQuery(GET_SPACEX_ROCKETS)
  console.log(process.env.API_HOST)
  return (
    <Main
      title="SpaceX Rockets"
      description="Get space-x rockets using graphql public api."
      rockets={data && data.rockets}
    ></Main>
  )
}

export default withApollo({ ssr: true })(Home)
