import React, {Component} from 'react'
import './App.css';
import Screen from './components/screen';
import Button from './components/Button';


class App extends Component {
  state = {
    value: 0
  }

  handleOnClick = (text) => {
    // value += +text;
    console.log('Hello from here. Value is', value)
    this.setState({value: text})
  }

  render() {
    return (
      <div>
      <Screen value={this.state.value}/>
      <Button 
        text='2'
        backgroundColor={'red'}
        // cb={(value) => handleOnClick(value)}
        cb={this.handleOnClick}
      />
      <Button 
        text={4}
        backgroundColor={'red'}
        // cb={(value) => handleOnClick(value)}
        cb={this.handleOnClick}
      />
    </div>
    )
  }

}

let value = 0

function handleOnClick(text) {
  value += +text;
  console.log('Hello from here. Value is', value)
}

function App1() {
  return (
    <div>
      <Screen value={value}/>
      <Button 
        text={2}
        backgroundColor={'red'}
        // cb={(value) => handleOnClick(value)}
        cb={handleOnClick}
      />
    </div>
  )
}

export default App;
