import './App.css';
import {useState} from 'react'
import useField from './utils/formUtils'

function App() {

  const [name, setName] = useState('')

  const {reset, ...email} = useField('text','Enter your email')

  // console.log('email contains', email)

  const {...subject} = useField('text','Enter your subject')

  // const {...subject} = useField('text','Enter your subject')

  const handleSubmit = () => {

    //1. build an object with all values
    //2. where and if needed perform validation
    // console.log('value=', value)
    // console.log('subject=', subject)
    if (email.value === '') alert('No email provided')
  }

// DRY = don't repeat yourself
  return (
    <div className="App">
      
      <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' />

      <input {...email} />
      
      <input {...subject} /> 

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
