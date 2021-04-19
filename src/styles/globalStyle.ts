import { createGlobalStyle } from 'styled-components'

// Global Style
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: #131415;
    color: #fff;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
`
export default GlobalStyle
