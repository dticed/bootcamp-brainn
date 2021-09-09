import styled from "styled-components";

export const Container = styled.aside`
  grid-area: asideLeft;
  >div {
    height: 100%;
  }
`;

export const AsideLinks = styled.ul`
  flex-direction: column;
`

export const Anchor = styled.a`
  color: white;
`

export const Section = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Item = styled.section`
  padding: 10px 50px;
`