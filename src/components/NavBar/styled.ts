import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Header = styled.header`
  width: 80vw;
  height: 5.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    @media (max-width: 998px) {
      display: none;
    }
  }

`

export const Nav = styled.nav`
  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    
    li {
      height: 5.625rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      a {
        text-decoration: none;
        color: ${props => props.theme.colors.grayish_blue};
        font-weight: 400;


        &::before {
          content: ''; 
          position: absolute; 
          bottom: 0; 
          left: 0; 
          width: 100%; 
          height: 5px; 
          background: ${props => props.theme.colors.gradient}; 
          opacity: 0; 
          transition: opacity 0.3s;
          
        }

        &:hover{
          color: ${props => props.theme.colors.dark_blue};
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 998px) {
    &,
    & ul {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
    }

    top: 5.625rem;
    width: 100vw;
    background-color: rgba(1,1,1, .2);    
    height: calc(100vh - 5.625rem);
    transition: all 0.5s ease-in-out;
    display: none;
    z-index: 1;

    & ul {      
      flex-direction: column;
      gap: 0;
      top: 1.5rem;
      width: 80vw;
      height: 300px;      
      max-width: 350px;
      padding: 1.5rem;
      
      background-color: ${props => props.theme.colors.white};
      border-radius: 5px;
      li a {
        color: ${props => props.theme.colors.dark_blue};
      }
    }
    &.open-menu {
      display: block;
    }
  }
`

export const IconMenuMobile = styled.div`
  & {
    display: none;
  }

  @media (max-width: 998px){
    & {
      display: block;
    }

    svg {
      font-size: 2rem;
      color: #2D314D;
    }
  }
`