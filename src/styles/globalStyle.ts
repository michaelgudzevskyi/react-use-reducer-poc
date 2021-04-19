import { createGlobalStyle } from 'styled-components'

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: #131415;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
`
export default GlobalStyle
