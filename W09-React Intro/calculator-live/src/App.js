import './App.css';
import React, {Component} from 'react'
import Display from './components/display'
import Button from './components/button'

// state
class App extends Component {

  state = {
    value: 0
  }

  handleClick= (text) => {

    this.setState({value: text})
    // value += text
    console.log('Hello from Button', this.state.value)
  }

  resetState = () => {
    this.setState({value: 0})
  }

  render() {
    return (
      <div>
        <Display valueProperty={this.state.value}/>
        <Button 
          text={1} 
          background='red' 
          color='white'
          cb={() => this.handleClick(1)}
        />
        <Button text={2} background='blue' color='orange' cb={() => this.handleClick(2)}/>
        <Button text={'CE'} background='lime' color='orange' cb={this.resetState}/>
      </div>
    );
  }

}

// let value = 0;

// function handleClick(text) {
//   value += text
//   console.log('Hello from Button', value)
// }

// function App1() {
//   return (
//     <div>
//       <Display valueProperty={value}/>
//       <Button 
//         text={1} 
//         background='red' 
//         color='white'
//         cb={() => handleClick(1)}
//       />
//       <Button text={2} background='blue' color='orange'/>
//       <Button text={'CE'} background='lime' color='orange'/>
//     </div>
//   );
// }

export default App;
