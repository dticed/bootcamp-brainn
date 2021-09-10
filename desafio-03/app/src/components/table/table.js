import {Container, Section, MyTable, TableBody, TableRow, TableHeader, TableData, Image, Button} from './styles'

function Table({ data, getCarros }) {
  function handleClick(e) {
    e.preventDefault();

    const car = data.find((car) => car.plate === e.target.value);

    const requestOption = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    };
    fetch("http://localhost:3333/cars", requestOption)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        getCarros();
      });
  }

  return (
    <Container>
      <section className="grid grid-table">
        <MyTable>
          <TableBody>
            <TableRow>
              <TableHeader>Carro</TableHeader>
              <TableHeader>Marca</TableHeader>
              <TableHeader>Ano</TableHeader>
              <TableHeader>Placa</TableHeader>
              <TableHeader>Cor</TableHeader>
              <TableHeader>Editar</TableHeader>
            </TableRow>
            {data.length !== 0 &&
              data.map((item) => (
                <TableRow key={item.plate}>
                  <TableData>
                    <Image src={item.image} alt="carro"></Image>
                  </TableData>
                  <TableData>{item.brandModel}</TableData>
                  <TableData>{item.year}</TableData>
                  <TableData>{item.plate}</TableData>
                  <TableData>{item.color}</TableData>
                  <TableData>
                    <Button onClick={handleClick} value={item.plate}>
                      Remover
                    </Button>
                  </TableData>
                </TableRow>
              ))}
          </TableBody>
        </MyTable>
      </section>
    </Container>
  );
}

export default Table;
