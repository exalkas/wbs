import React, {Component} from 'react'
import {Helmet} from 'react-helmet'


class ClassComponent extends Component{

    state = {
        counter: 0
    }

    componentDidMount() {
        console.log('This is componentDidMount')
    }

    componentDidUpdate() {
        console.log('This is copmonentDidUpdate')
        alert('This is copmonentDidUpdate')
    }

    componentWillUnmount() {
        alert('THis is from COMPONENT WILL UNMOUNT  !!')
        // remove event listeners
        // clear intervals
    }
    

    handleClick = () => {
        let counter = this.state.counter

        counter++

        console.log('Handle Click: counter=', counter)

        this.setState({counter}) // it's the same like {counter: counter} property value shorthand
    }
    
    render(){
        
        console.log('This is from render')

        return <div>
            <Helmet>
                <title>Helmet Demo along with Lifecycle demo</title>
                <meta name="description" content="This description from helmet"/>
            </Helmet>
            Hello from Class Component
            <button onClick={this.handleClick}>Hit me!</button>
        </div>
    }
}

export default ClassComponent