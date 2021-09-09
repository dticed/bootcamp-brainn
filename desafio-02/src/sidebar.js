import Grid from "./grid";

import styled from "styled-components";

const Container = styled.aside`
  grid-area: asideLeft;
  >div {
    height: 100%;
  }
`;

const AsideLinks = styled.ul`
  flex-direction: column;
`

const Anchor = styled.a`
  color: white;
`

const Section = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Li = styled.section`
  padding: 10px 50px;
`

function Sidebar({ data, handleClick }) {
  return (
    <Container>
      <Grid>
        <Section>
          <AsideLinks>
            {data.map((item) => (
              <Li key={item.id}>
                <Anchor
                  href={item.id}
                  onClick={(event) => {
                    event.preventDefault();
                    handleClick(item.id);
                  }}
                >
                  {item.title}
                </Anchor>
              </Li>
            ))}
          </AsideLinks>
        </Section>
      </Grid>
    </Container>
  );
}

export default Sidebar;
