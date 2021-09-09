import Grid from "./grid";
import styled from 'styled-components'

const Container = styled.nav`
  grid-area: myMenu;
  height: 80px;
  >div {
    height: 100%;
  }
`;

const Item = styled.section`
  padding: 10px 50px;
`

const List = styled.ul`
  display: flex;
  list-style: none;
`

function Menu() {
  return (
    <Container>
      <Grid>
        <List>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </List>
      </Grid>
    </Container>
  );
}

export default Menu;
