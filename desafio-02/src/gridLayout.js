import styled from "styled-components";

export const GridLayout = styled.div`

  background-color: #606369;
  min-height: 100vh;
  padding: 5px;
  display: grid;
  grid-gap: 0.1rem;
  grid-template-areas:
    "myHeader myHeader myHeader myHeader"
    "myMenu myMenu myMenu myMenu"
    "asideLeft myMain myMain myMain"
    "footer footer footer footer";
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
`;