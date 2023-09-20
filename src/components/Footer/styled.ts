import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark_blue};
  padding: 3rem 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    justify-content: space-between;

    .social {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
    } 

    .col-1,
    .col-2 {
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        
        li a {
          font-weight: 300;
          text-decoration: none;
          color: ${props => props.theme.colors.white};
          transition: .4s;

          &:hover {
            color: ${props => props.theme.colors.lime_green};
          }
        }
      }
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 2.5rem;
      grid-column: span 2;

      p {
        font-weight: 300;
        font-size: .9rem;
        color: ${props => props.theme.colors.grayish_blue};
      }
    }
  }

  @media (max-width: 998px) {
    .container {
      display: flex;
      flex-direction: column;

      .col-1,
      .col-2 {
        ul { 
          align-items: center;
          margin-top: 1rem;
        }
      }

      .col-2 {
        margin-bottom: 1.5rem;
      }
      .copy {
        align-items: center;
      }
    }
  }
  

`
export const SocialMedia = styled.div`
  display: flex;
  gap: .5rem;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 1.725rem;
    transition: .4s;

    &:hover {
      color: ${props => props.theme.colors.lime_green};
    }
  }
`