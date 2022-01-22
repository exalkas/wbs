import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes'
import {BrowserRouter, Redirect, Route, Switch, useHistory} from 'react-router-dom'

import PrivateRoute from './hoc/authClient'


ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);