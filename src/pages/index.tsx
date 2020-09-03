import React from 'react'
import withApollo from 'graphql/client'
import { useQuery } from '@apollo/react-hooks'

import GET_SPACEX_ROCKETS from 'graphql/queries/getSpacexRockets'
import Layout from 'containers/Layout'

type Rocket = {
  id: string
}

function Home() {
  const { data } = useQuery(GET_SPACEX_ROCKETS)

  return (
    <>
      <Layout pageTitle="Home">
        <ul>
          {data &&
            data.rockets.map((rocket: Rocket) => (
              <li key={rocket.id}>{rocket.id}</li>
            ))}
        </ul>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
