import { createGlobalStyle } from "styled-components";
import { GridLayout } from "./components/gridLayout";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Fira Sans", sans-serif;
  }

`;

const data = [
  {
    id: "post1",
    title: "Post 1",
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de cevadiss deixa as pessoas mais interessantis. Delegadis gente finis, bibendum egestas augue arcu ut est.",
  },
  {
    id: "post2",
    title: "Post 2",
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Diuretics paradis num copo é motivis de denguis. Sapien in monti palavris qui num significa nadis i pareci latim.",
  },
  {
    id: "post3",
    title: "Post 3",
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Manduma pindureta quium dia nois paga.",
  },
  {
    id: "post4",
    title: "Post 4",
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Manduma pindureta quium dia nois paga. Quem manda na minha terra sou euzis!",
  },
];

function App() {
  const [title, setTitle] = useState(data[0].title);
  const [content, setContent] = useState(data[0].content);

  function handleClick(id) {
    const novoPost = data.find((item) => {
      return item.id === id;
    });
    setTitle(novoPost.title);
    setContent(novoPost.content);
  }

  return (
    <>
      <GlobalStyle />
      <GridLayout>
        <Header text="Desafio 2 - Bootcamp Brainn.co" />
        <Menu />
        <Sidebar data={data} handleClick={handleClick} />
        <Main title={title} content={content} />
        <Footer text="developed by dticed" />
      </GridLayout>
    </>
  );
}

export default App;
