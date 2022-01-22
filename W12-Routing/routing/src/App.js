// Routing = to route/drive
// React Router dom
// Hiding/showing components
// import { useState, useEffect } from 'react';
// install npm i react-router-dom
// https://reactrouter.com/web

import React, {useState, useEffect} from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect, useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Home from './components/Home/Home';
import MainLayout from './hoc/MainLayout';
import SimpleLayout from './hoc/SimpleLayout';



function App() {

  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => loadWeather(), [])
  let history = useHistory()

  console.log('History=', history)
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=8f446db7f86ed2c57186b95100795d10'

  const loadWeather = async () => {
    
    await setShowSpinner(true)
    
    try {
      
      const response = await axios.get(url)
      console.log(response.data)
    } catch (err) {
      alert(err.message)
      console.log(err.message)
      history.push({pathname: '/about'})
    }


    await setShowSpinner(false)

  } 
  // const [something, setSomething]  = useState()

  // useEffect(async () => {
  //   await setSomething('Here I am')

  //   console.log(something)
  // }, [])

  // const showState = () => {
  //   setSomething('Here I am from menu')
  //   console.log(something)
  // }

  return (
    <div className="App">

      {
        showSpinner ? <Spinner  /> : <Heading />
      }

      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <div onClick={()=> history.push('/about')}>Testing</div>
            <MainLayout>
              <Route component={Home}/>
            </MainLayout>
          </Route>

          <Route path='/about' exact >
            <MainLayout>
                <Route component={About}/>
              </MainLayout>
          </Route>

          <Route path='/users' exact >
            <SimpleLayout>
                <Route component={Users}/>
            </SimpleLayout>
          </Route>
          <Route path='/user:id' exact component={User}>
            <SimpleLayout>
                <Route component={Users}/>
            </SimpleLayout>
          </Route>
          
          <Redirect from='/login' to='/users'/>
          
          <Route  exact component={NotFound}>
            <SimpleLayout>
                <Route component={Users}/>
            </SimpleLayout>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;


function About() {
  return <h2>About</h2>
}
function Users() {
  const userId= '456'
  return <h2>Users for user click <Link to={`/user:${userId}`}>here</Link></h2>
}
function User() {
  const {id} = useParams()
  return <h2>Hello this is user {id}</h2>
}
function NotFound() {
  return <h2>Page Not Found</h2>
}

function Spinner() {
  return <div class="lds-dual-ring">This is a spinner</div>
}

function Heading() {
  return <h2>This is a heading</h2>
}
