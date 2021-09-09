import { Heading3 } from "./headings";
import Grid from "./grid";

import styled from "styled-components";

const Container = styled.main`
  grid-area: myMain;
  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Article = styled.article`
  margin: 30px 60px;
`

const Paragraph = styled.p`
  padding: 50px;
`

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
