import { Switch, Route } from "react-router-dom"
import App from './App';
import Dashboard from './components/Dashboard'

export default  function Routes() {
    return  <Switch>

    <Route path="/" exact component={App} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
}