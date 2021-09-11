import Grid from "../grid";
import { Container, Section, AsideLinks, Item, Anchor } from "./styles";
import Button from "../button";

function Sidebar({ data, handleClick }) {
  return (
    <Container>
      <Grid>
        <Section>
          <AsideLinks>
            {data.map((item) => (
              <Item key={item.id}>
                <Anchor
                  href={item.id}
                  onClick={(event) => {
                    event.preventDefault();
                    handleClick(item.id);
                  }}
                >
                  {item.title}
                </Anchor>
              </Item>
            ))}
          </AsideLinks>
        </Section>
      </Grid>
    </Container>
  );
}

export default Sidebar;
