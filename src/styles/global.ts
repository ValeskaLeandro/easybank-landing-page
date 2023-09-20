import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.font_family};
  }

  body {
    font-size: ${props => props.theme.font_size};
    
  }
`

export const Description = styled.p`
  font-weight: 300;
  color: ${props => props.theme.colors.grayish_blue};
  font-size: 1.125rem;
`

