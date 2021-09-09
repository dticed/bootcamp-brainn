import Grid from "./grid";
import styled from "styled-components";

const Container = styled.footer`
  grid-area: footer;
  height: 80px;
  >div {
    height: 100%;
  }
`;

function Footer({ text }) {
  return (
    <Container>
      <Grid>{text};</Grid>
    </Container>
  );
}

export default Footer;
