import { Container, Section, MyForm, Label, Input, Button } from "./styles";

function Form({ getCarros }) {
  function handleForm(e) {
    e.preventDefault();

    const car = {
      image: e.target.elements.imagem.value,
      brandModel: e.target.elements.marca.value,
      year: e.target.elements.ano.value,
      plate: e.target.elements.placa.value,
      color: e.target.elements.cor.value,
    };

    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    };
    fetch("http://localhost:3333/cars", requestOption)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert(response.message);
        }
        getCarros();
      });
  }

  return (
    <Container>
      <Section className="grid grid-form">
        <MyForm onSubmit={handleForm}>
          <Label>Url da Imagem:</Label>
          <Input type="text" name="imagem"></Input>

          <Label>Marca:</Label>
          <Input type="text" name="marca"></Input>

          <Label>Ano:</Label>
          <Input type="number" name="ano"></Input>

          <Label>Placa:</Label>
          <Input type="text" name="placa"></Input>

          <Label>Cor:</Label>
          <Input type="text" name="cor"></Input>

          <Button type="submit">Cadastrar Carro</Button>
        </MyForm>
      </Section>
    </Container>
  );
}

export default Form;
