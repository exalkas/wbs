// A component can have variables/functions/classes
// Also a module can have more of any of those or a combination of them

// React language = JSX = Javascript XML, XML = Extended Markup Language
// HTML = hypertext MARKUP lang
// extended = we can have any tagname <div> </div>
// in XML <anyname_whatever></anyname_whatever>
// <anyname_whatever />



import logo from './logo.svg';
import './App.css';
import text from './components/constants'

function App() {
  return (
    <div className="App">
      {text}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
