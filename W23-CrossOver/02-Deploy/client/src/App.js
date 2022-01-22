import { useState } from 'react';
import axios from 'axios'
import './App.css';


function App(props) {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const [login, setLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');
  
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('handle submit here')

    if (!username || !pass) {
      alert('Both fields are mandatory')
      return
    }

      const data = {
        username,
        pass
      }
  
      try {

        const response = await axios.post('/users/register', data)
        console.log('response is', response)
      
      } catch (err) {
        console.log('error', err.message)
      }

  
  }
  const handleLogin = async e => {
    e.preventDefault();
    console.log('handle login here')

    if (!login || !passLogin) {
      alert('Both fields are mandatory')
      return
    }

      const data = {
        username: login,
        pass: passLogin
      }
  
      try {

        const response = await axios.post('/users/login', data)
        console.log('response is', response)

        if (response?.data.success) props.history.push('/dashboard')
      
      } catch (err) {
        console.log('error', err.message)
      }

  
  }


  return (
    
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <input value={pass} onChange={e => setPass(e.target.value)} />
        </div>
        <input type="submit" value='Register' onClick={handleSubmit}/>
      </form>
      <hr style={{"width": "100%"}}/>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input value={login} onChange={e => setLogin(e.target.value)} />
        </div>
        <div>
          <input value={passLogin} onChange={e => setPassLogin(e.target.value)} />
        </div>
        <input type="submit" value='Login' onClick={handleLogin}/>
      </form>
    </div>
  );
}
export default App;
