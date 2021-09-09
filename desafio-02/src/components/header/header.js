import { Heading1 } from "../headings";
import Grid from "../grid";
import { Container } from "./styles";

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
