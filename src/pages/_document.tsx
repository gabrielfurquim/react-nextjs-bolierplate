import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/core/styles'

import theme from 'styles/theme'

class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialUiSheet = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(
              materialUiSheet.collect(<App {...props} />)
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialUiSheet.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </>
        )
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
