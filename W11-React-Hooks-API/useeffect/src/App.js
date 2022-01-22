import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DisplayMars from './components/nasa';
import ApolloComponent from './components/ApolloComponent';

function App() {

  const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=8f446db7f86ed2c57186b95100795d10'
  
  const [weather, setWeather] = useState()

  // side effects
  useEffect(() => loadWeather(), []) // accepts a callback function and a dependencies array

  const loadWeather = async () => { // async/await 

    const response = await axios.get(url) // this is a  synchronous operation
    console.log(response)

    setWeather(response.data) // here we update the state

  }

  return ( // main effect of the function
    <div className="App">
      {
        weather ? //can be true or false 1 + 3 = 4
          <p>The weather in {weather?.name} is {weather?.weather[0]?.main}</p>
          // <p>test</p>

          :
          <p>Weather is not available</p>
      }
      <DisplayMars />
      <ApolloComponent />
    </div>
  );
}

export default App;
