import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 250px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};

  .image img {
    width: 100%;
    max-height: 160px;
  }
  .infos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

    h3 {
      font-weight: 400;
      color: ${props => props.theme.colors.dark_blue};
    }

    span {
      font-weight: 300;
      font-size: .8rem;
      color: ${props => props.theme.colors.grayish_blue};
    }

    p {
      font-weight: 300;
      font-size: 1rem;
      color: ${props => props.theme.colors.grayish_blue};
    }
  }
`