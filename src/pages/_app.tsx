import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/styles'
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
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}

export default App
