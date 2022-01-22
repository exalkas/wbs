import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import axios from 'axios';
import PrivateRoute from './hoc/authClient'
import Auth from './utils/auth'

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" exact component={App} />
      <PrivateRoute path="/dashboard" isAuthed={Auth()}>
        <Dashboard />  
      </PrivateRoute>
      
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

function Dashboard(){

  const history = useHistory();

  const handleClick = async () => {
    console.log("Logout button here")

    const response = await axios.get('/users/logout')

    console.log('logout: reponse is', response.data.success)

    if (response?.data.success) history.push('/')
  }

  return <div className="dash">
    Hello from Dashboard
    <button onClick={handleClick}>Logout</button>
    </div>
}