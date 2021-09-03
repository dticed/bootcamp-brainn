import {Heading1} from './headings'

function Header({text}) {
  return <header className="grid grid-header">
    <Heading1 children={text}/>
    </header>;
}

export default Header