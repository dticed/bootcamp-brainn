import Grid from "../grid";
import { Container } from "./styles";

function Footer({ text }) {
  return (
    <Container>
      <Grid>{text};</Grid>
    </Container>
  );
}

export default Footer;
