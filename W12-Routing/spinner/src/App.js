import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [ showSpinner, setShowState] = useState(false)

  const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=8f446db7f86ed2c57186b95100795d10'

  useEffect(() => loadWeather(), [])

  const loadWeather = async () => {

    setShowState(true) // show spinner

    try {

      const response = await axios.get(url)
      console.log(response.data)

    } catch (err) {
      console.log(err.message)
      alert(err.message)
    }

    
    setShowState(false) // hide spinner
  }

  return (
    <div className="App">
      This is app components

      {
        showSpinner ? 
          <div className='lds-dual-ring'>Spinner</div>
          :
          <p>Data received</p>
      }

    </div>
  );
}

export default App;
