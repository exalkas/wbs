import App from './App';
import {Switch, Route, useHistory} from 'react-router-dom';
import PrivateRoute from './hoc/authClient'
import Auth from './utils/auth'
import axios from 'axios';


const Routes = async () => {

    const isAuthed = await Auth()

    return <Switch>

        <Route path="/" exact component={App} />
        <PrivateRoute path="/dashboard" isAuthed={isAuthed}>
        <Dashboard />  
        </PrivateRoute>

    </Switch>
}

export default Routes;

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