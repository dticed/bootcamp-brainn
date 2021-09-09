import styled from "styled-components";

export const Container = styled.main`
  grid-area: myMain;
  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const Article = styled.article`
  margin: 30px 60px;
`

export const Paragraph = styled.p`
  padding: 50px;
`