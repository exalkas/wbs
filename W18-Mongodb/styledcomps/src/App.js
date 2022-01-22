import './App.css';
import styled from 'styled-components';
import {Button} from './Button';
import {BrowserRouter , Link} from 'react-router-dom'

// `` -> template strings
// tagged template string functionName``


const Main = styled.div`
  background-color: black;
  min-height: 100vh;
  color: white;
  font-size: 30px;
  display: grid;
  place-content: center
`

const DivInMain = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
`

const ExtendedButton = styled(Button)`
  border-radius: 10px;
`
const ExtendedLink = styled(Link)`
  background-color: red;
  color: white;

`

function App() {

  // const name = 'alkis'
  // const address = 'berlin'
  // console.log(`${name} is living at ${address}`)

  // const tagLiteral = (string, ...restParams) => {
  //   console.log('TagLiteral: string is:', string)
  //   console.log('TagLiteral: Rest parameters are:', restParams)
  
  // }
  
  // tagLiteral`${name} is living at ${address} and he is a web teacher`
  
  // const tagLiteral2 = (string) => { console.log('TagLiteral2: string is:', string)}
  
  // tagLiteral2(`${name} is living at ${address}`)

  return (
    <BrowserRouter>
    <Main>
      Hello world from styled components
      <div>A div inside main</div>
      <DivInMain></DivInMain>
      <Button back='blue' onClick={() => alert('Im clicked')}>First Button</Button>
      <Button 
      back='blue' 
      primary
      onClick={() => alert('Im clicked')}>First Button</Button>

      <ExtendedButton back='crimson'>Submit</ExtendedButton>
      <Link to='https://google.com'>Google</Link>
      <ExtendedLink to='https://twitter.com'>Twitter</ExtendedLink>
    </Main>
    </BrowserRouter>
  );
}

export default App;
