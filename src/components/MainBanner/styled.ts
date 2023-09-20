import styled from "styled-components";


export const Section = styled.section`
  display: flex;
  position: relative;
  height: calc(100vh - 5.625rem);
  overflow: hidden;

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(80vh - 5.625rem);
    background: url("./bgs/bg-intro-desktop.svg") ${props => props.theme.colors.ligth_gray} no-repeat;
    background-position: top -350px right -400px;

    @media (max-width: 1300px) {
      background-size: 90%;
      background-position: top -250px right -350px;
    }

    @media (max-width: 998px) {
      background-color: ${props => props.theme.colors.ligth_gray};
      background-image: none;
      height: 100%;
    }
  }
  .left-content {
    width: 80%;
    @media (max-width: 998px) {
      display: flex;
      justify-content: center;
    }
  }
  .content {
    max-width: 450px;

    @media (max-width: 998px) {
      text-align: center;
      padding-bottom: 3rem; 
    }
  }
  p {
    margin-bottom: 1rem;
  }
  @media (max-width: 998px) {
    flex-direction: column-reverse;
    background: url("./bgs/bg-intro-mobile.svg") ${props => props.theme.colors.ligth_gray} no-repeat;
    background-size: 70%;
    background-position: top right;
    height: 100%;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  top: -120px;
  right: -100px;
  height: 100%;

  img {
    width: 100%;
  }
  
  @media (max-width: 1300px) {
    right: -220px;
    img {
      width: 90%;
    }
  }

  @media (max-width: 1100px) {
    right: -320px;
    img {
      width: 80%;
    }
  }
  @media (max-width: 998px) {
    position: static;
    display: flex;
    justify-content: center;
    img {
      margin-top: -200px;
      width: 100%;
      max-width: 600px;
      height: 100%;
      padding-bottom: 1rem; 
    }
  }

`

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.dark_blue};

  @media (max-width: 998px) {
    font-size: 2rem;    
  }
`

