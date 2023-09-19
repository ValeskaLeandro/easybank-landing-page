import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.font_family};
  }

  body {
    font-size: ${props => props.theme.font_size};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`