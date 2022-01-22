import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {CUSTOMER_SERVER} from './utils/servers'

function App() {

  const handleClick = async () => {
    console.log('Hello button')

    const data = await axios.get(`${CUSTOMER_SERVER}`)

    console.log('data=', data.data)
  }

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
        <button onClick={handleClick}>Get Customers</button>
      </header>
    </div>
  );
}

export default App;
