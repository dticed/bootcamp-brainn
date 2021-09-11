import { Heading3 } from "../headings";
import Grid from "../grid";
import {Container, Article, Paragraph} from './styles'

function Main({ title, content }) {
  return (
    <Container>
      <Grid>
        <Heading3 children={title} />
        <Article>
          <Paragraph>{content}</Paragraph>
        </Article>
      </Grid>
    </Container>
  );
}

export default Main;
