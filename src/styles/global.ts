import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.cyan};
    font-size: ${props => props.theme.font_size};
    font-family: ${props => props.theme.font_family};
  }
`