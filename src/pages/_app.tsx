import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplate - G2L</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-toutch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="description" content="A simple project with react." />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
