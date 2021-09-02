import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Main from './main'
import Footer from './footer'

function App() {
  return (
    <>
      <Header text="Desafio 1 - Bootcamp Brainn.co" />
      <Menu />
      <Sidebar />
      <Main />
      <Footer text="developed by dticed" />
    </>
  );
}

export default App;
