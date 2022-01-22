import './App.css';
import React, {useState} from 'react'
import axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)
  const [blobImage, setBlobImage] = useState()

  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)

  const handleSubmit = (e) => {

    e.preventDefault()

    // 1. Do some validation. If it passes, move on to sending data
    if (!name) console.log('Please type your name')

    // 2. create a formdata object
    let formData = new FormData()

    // 3. add keys and values
    formData.set('name', name)
    formData.set('email', email)
    formData.set('image', blobImage, 'somefilename')

    console.log('formdata is', formData)

    // 4. create formdata configuration
    const config = {
      headers: {'content-type': 'multipart/form-data'}
    }
    
    // 5. send data to server
    const sentData = axios.post('/customers/addImage', formData, config)

    // 6. handle response
    if (!sentData) console.log('there was some error sending your data')
  }

  const handleImageChange = (e) => {

    const file = URL.createObjectURL(e.target.files[0])
    console.log('file is:', file)

    setImage(file)
    setBlobImage(e.target.files[0])

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField 
        
        placeholder='Type your name'
        value = {name}
        onChange={handleNameChange}
        />

      <TextField 
        
        placeholder='Type your email'
        value = {email}
        onChange={handleEmailChange}
        />

       <ImageSelect onchange={handleImageChange} file={image}/> 
        <button style={{marginTop: '20px'}} onClick={handleSubmit}>Submit</button>
      </form>
      <img src='/1641234901917-somefilename.jpg' alt=''/>
    </div>
  );
}

export default App;


function TextField({name, placeholder, value, onChange}) {

  return <div style={{marginTop: '20px'}}>
          <input placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </div>

}

function ImageSelect({onchange, file}) {
  return <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>

          <div style={{display: 'flex', 
          flexDirection:'column', 
          background: 'tomato',
          alignItems: 'center',
          padding: '20px'
          }}> 
            <div style={{
              width: '200px',
              height: '200px' ,
              background: 'black' 
            }}>
              <img src={file} alt='' style={{width: '200px', height: '200px', borderRadius: '20px'}}/>
            </div>
            <label htmlFor='image'>Select Image</label>
            <input type="file" id='image' style={{visibility: 'hidden'}} onChange={onchange}/>
          </div>
         
  </div>
}