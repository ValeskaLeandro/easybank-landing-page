import styled from "styled-components";

export const Button = styled.button`
  padding: .75rem 1.75rem;
  border-radius: 25px;
  border: none;
  background: ${props => props.theme.colors.gradient}; 
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  cursor: pointer;
  position: relative;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: inherit;
  }
`