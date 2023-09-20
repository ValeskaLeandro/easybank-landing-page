import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  
  img, h2 {
    margin-bottom: 1.5rem;

  }
  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.dark_blue};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.grayish_blue};
    padding-bottom: 1rem;
  }

  @media (max-width: 998px) {
    text-align: center;
  }
`