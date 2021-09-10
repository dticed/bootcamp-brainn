import Form from "./components/form/form";
import Table from "./components/table/table";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { GridLayout } from "./components/grid-layout";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #root {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
  }
`;

function App() {
  const [data, setData] = useState([]);
  console.log("1 executou");

  function getCarros() {
    fetch("http://localhost:3333/cars")
      .then((result) => result.json())
      .then((result) => setData(result));
  }

  useEffect(() => {
    console.log("3 executou");
    getCarros();

    return () => {
      console.log("clean");
    };
  }, []);
  console.log("2 executou");

  return (
    <>
      <GlobalStyle />
      <GridLayout>
        <Form data={data} getCarros={getCarros} />
        <Table data={data} getCarros={getCarros} />
      </GridLayout>
    </>
  );
}

export default App;
