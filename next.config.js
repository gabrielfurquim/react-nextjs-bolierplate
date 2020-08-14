// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `/.env${process.env.ENV}` })
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
