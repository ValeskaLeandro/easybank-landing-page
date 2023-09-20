import styled from "styled-components";

export const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 5rem ;
  .container {
    width: 80%;
  }

  .titles {
    max-width: 600px;
    margin-top: -50px;
    margin-bottom: 5rem;
    @media (max-width: 998px) {
      margin-top: 2rem; 
      text-align: center;
      max-width: 100%;
    }
    
  }
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 698px) {
    justify-content: center;
  }
`