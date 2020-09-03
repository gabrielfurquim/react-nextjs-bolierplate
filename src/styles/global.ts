import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family:'Roboto';
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/Roboto-Regular.ttf');
  }


`

export default GlobalStyles
