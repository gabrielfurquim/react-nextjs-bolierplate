import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4099FF'
    },
    secondary: {
      main: '#263544'
    },
    error: {
      main: '#FF4262'
    },
    warning: {
      main: '#FFB64D'
    },
    success: {
      main: '#2ED8B6'
    },
    background: {
      default: '#f2f7fb'
    }
  }
})

export default theme
