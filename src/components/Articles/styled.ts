import styled from "styled-components";


export const ArticlesContainer = styled.section` 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.ligth_gray};

  .title {
    width: 80%;
    padding-bottom: 3rem;
  }
`
export const LastArticles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  gap: 1rem;

  @media (max-width: 998px) {
    flex-wrap: wrap;
  }
  
`