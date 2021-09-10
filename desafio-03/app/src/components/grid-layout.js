import styled from "styled-components";

export const GridLayout = styled.div`
  padding: 20px;
  display: grid;
  grid-template-areas:
    "form table"
    "form table";
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  background-color: #e3e8f3;
  >div {
    .grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
