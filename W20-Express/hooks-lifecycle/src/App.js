import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  console.log('Component is starting')

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Useeffect is working')
  }, [])

  const handleClick = () => {
    console.log('At the beginning counter is', counter)
    
    let cnt = counter + 1;
    console.log('Now  cnt is', cnt)
    
    setCounter(cnt)
    console.log('Now  counter  is', counter)
  }

  console.log('Component will render now')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={handleClick}></Button>
        Counter is {counter}
      </header>
    </div>
  );
}

export default App;

function Button({onClick}) {
  return <button onClick={onClick}>Click me</button>
}
