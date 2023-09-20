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
    background-color: ${props => props.theme.colors.light_grayish_blue};    
  }
`

export const Description = styled.p`
  font-weight: 300;
  color: ${props => props.theme.colors.grayish_blue};
  font-size: 1.125rem;
`

export const Title = styled.h1`
  font-weight: 400;
  color: ${props => props.theme.colors.dark_blue};
  font-size: 2.5rem;
`
