import axios from 'axios';
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react';
import {useCookies} from 'react-cookie'

export default function Dashboard(){

    const history = useHistory();

    const [cookies, setCookie, removeCookie] = useCookies(['alan']);
    console.log('Cookies is', cookies)

    useEffect(() => {

        const getData = async() => {

            try {
                
                const response = await axios.get('/users/auth')
    
                console.log('auth: response is', response)
    
                if (!response.data.success) history.push('/')

                removeCookie('alan')
            
            } catch (error) {
                console.log('Auth error:', error.message)
                history.push('/')
            }
        }

        getData();
    })
  
    const handleClick = async () => {
      console.log("Logout button here")
  
      const response = await axios.get('/users/logout')
  
      console.log('logout: reponse is', response.data.success)
  
      history.push('/')
    }
  
    return <div className="dash">
      Hello from Dashboard
      <button onClick={handleClick}>Logout</button>
      </div>
  }