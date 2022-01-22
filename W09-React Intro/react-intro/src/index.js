import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';
import Alkis, {numberOfProducts, footerText} from './components/constants';
import SomeComponent from './components/header'
import Rutton from './components/Button'
import List from './components/list'
import {Footer} from './components/footer'
import faker from 'faker';
import { FaBeer } from 'react-icons/fa';
import { BiAt } from 'react-icons/bi';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import whatName from where(where = location in the project - folder/file)

// ReactDOM.render(what to render (component name), where to render it (some id in html))

const favoritesArray = ['crimson', 'mercedes', 'samsung']

function App() {
  return (
    // <> = React Fragment
    <React.Fragment>
      <div className="App">
        <SomeComponent 
          text='Hello from header'
          paragraph='Our Eshop'
        />
        <Rutton 
          text='Press me'
          cb = {() => alert('Hi!!!!')}
        />
        <p>{faker.name.findName()}</p>
        <p>{faker.address.country()}</p>
        
        
        <List favoritesProp={favoritesArray}/>
        <Footer text="footer">
          <p>{faker.animal.dog()}</p>
          <FaBeer />
          <BiAt />
        </Footer>
      </div>
    </React.Fragment>
  );
}


ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
