import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>

    <Route path="/" exact component={App} />
    <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

function Dashboard(){
  return <div>Hello from Dashboard</div>
}