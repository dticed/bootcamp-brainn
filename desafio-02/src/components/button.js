import styled from 'styled-components'


const primary = {
  kind: 'primary',
  bgColor: '#606369',
  hoverColor: '#44567a'
}

const secondary = {
  kind: 'secondary',
  bgColor: '#44567a',
  hoverColor: '#606369'
}

const MyButton = styled.button`
  width: 12vw;
  height: 3vw;
  background-color: ${(props) => props.kind === 'primary' ? primary.bgColor : secondary.bgColor};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  :hover {
    background-color: ${(props) => props.kind === 'primary' ? primary.hoverColor : secondary.hoverColor};;
  }
`


function Button({kind, text}) {
  return(
    <MyButton kind={kind}>{text}</MyButton>
  )
}

export default Button