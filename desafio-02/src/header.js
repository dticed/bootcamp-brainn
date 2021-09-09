import { Heading1 } from "./headings";
import Grid from "./grid";
import styled from "styled-components";

const Container = styled.header`
  grid-area: myHeader;
  height: 80px;
  >div {
    height: 100%;
  }
`;

function Header({ text }) {
  return (
    <Container>
      <Grid>
        <Heading1 children={text} />
      </Grid>
    </Container>
  );
}

export default Header;
