import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Main from './main'
import Footer from './footer'

import {useState} from 'react'

const data = [
  {
    id: 'post1',
    title: 'Post 1',
    content: 'Conteúdo 1'
  },
  {
    id: 'post2',
    title: 'Post 2',
    content: 'Conteúdo 2'
  },
  {
    id: 'post3',
    title: 'Post 3',
    content: 'Conteúdo 3'
  },
  {
    id: 'post4',
    title: 'Post 4',
    content: 'Conteúdo 4'
  }
]

function App() {
  const [title, setTitle] = useState(data[0].title)
  const [content, setContent] = useState(data[0].content)

  function handleClick(id) {
    const novoPost = data.find((item) => {
      return item.id === id
    })
    setTitle(novoPost.title)
    setContent(novoPost.content)
  }

  return (
    <>
      <Header text="Desafio 1 - Bootcamp Brainn.co" />
      <Menu />
      <Sidebar data={data} handleClick={handleClick} />
      <Main title={title} content={content}/>
      <Footer text="developed by dticed" />
    </>
  );
}

export default App;