import './App.css';
import axios from 'axios'
import {CUSTOMER_SERVER} from './utils/servers'
import {useState} from 'react'

function App() {

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([])

  const handleClick = async () => {
    console.log('Hello button')

    const response = await axios.get(`${CUSTOMER_SERVER}/find?name=${search}`)

    console.log('data=', response.data)
    setUsers(response.data)
  }
  const handleClickParams = async () => {
    console.log('Hello Params button')

    const response = await axios.get(`${CUSTOMER_SERVER}/find/${search}`)

    console.log('data=', response.data)
    setUsers(response.data)
  }

  const handleAdd = async () => {

    const customer = {
      username: 'ir23232',
      name: 'Irene',
      address: 'berlin',
    }

    const response = await axios.post(`${CUSTOMER_SERVER}/add`, customer)

    console.log('data=', response.data)
  }

  const handleUpdate = async () => {

    const customer = {
      id: '61b79742e021d6834a7e299b',
      username: 'ir23232',
      name: 'IreneUpdated3',
      address: 'berlin',
      email: 'newemail@wbs.de'
    }

    const response = await axios.put(`${CUSTOMER_SERVER}/update`, customer)

    console.log('update response is', response.data)
  }

  const handleDelete = async (e) => {
    
    const id = e.target.id

    if (!id) return

    console.log('id is', id)

    const response = await axios.delete(`${CUSTOMER_SERVER}/delete?id=${id}`)

    console.log('data=', response.data)
    if (response.data ==='User Not found') return

    // remove an item from an array of objects
    const oldData = [...users]

    // find index of user inside users array
    const idx = oldData.findIndex( item => item._id === id)

    oldData.splice(idx, 1)

    setUsers(oldData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder='search' />
        <button onClick={handleClick}>Get Customers</button>
        <button onClick={handleClickParams}>Get Customers PARAMS</button>
        <button onClick={handleAdd}>Add Customer</button>
        <button onClick={handleUpdate}>Update Customer</button>
        {
          users?.map((user, idx) => 
          <div key={user._id} onClick={handleDelete} id={user._id}>{user.username}</div>)
        }
      </header>
    </div>
  );
}

export default App;
