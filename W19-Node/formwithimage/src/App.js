import './App.css';
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)
  const [blobImage, setBlobImage] = useState()

  const handleSubmit = e => {

      e.preventDefault()

      // 1. validation
      if (!name || !email ) {
        toast.error('Please add your name and email', {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          return
      }

    // 2. create a formData object

    // custom object to be sent
    // const formData = {
    //   name,
    //   email
    // }

    console.log('name', name, 'email', email)
    // let formData = new FormData()

    // // 3. add keys and values
    // formData.set('name', name)
    // formData.set('email', email)
    let formData = new FormData()

    // 3. add keys and values
    formData.set('name', name)
    formData.set('email', email)
    formData.set('image', blobImage, 'someFilename.jpg')

    // 4. configure formdata

    const config = {
      headers: {'content-type': 'multipart/form-data'}
    }

    console.log('formdata is', formData.get('name'))

    // . send data to the server
    const sentData = axios.post('api', formData, config)
  }

  const handleImage = (e) => {

    const file = URL.createObjectURL(e.target.files[0])
    
    console.log('file is:', file)

    setImage(file)
    setBlobImage(e.target.files[0])
  }

  return (
    <div className="App">
      <form>
        <TextField 
          placeholder='type your name' 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField 
          placeholder='type your email'
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ImageSelect onChange={handleImage} file={image}/>
        <Button onClick={handleSubmit}/>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;

function TextField({placeholder, type, value, onChange}) {

  return <div style={{marginTop: '20px'}}>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required
        
      />
    </div>
}

function Button({value, onClick}) {

  return <div style={{marginTop: '20px'}}>
      <input 
        type='submit' 
        value={value}
        onClick={onClick}
      />
    </div>
}

function ImageSelect({file, onChange}) {
  return <div style={{display: 'flex',  flexDirection: 'column', alignItems:'center', marginTop: '20px'}}>
      <div style={{
        height:'200px', 
        width:'200px', 
        background:'black'
        
        }}>
        <img src={file} alt='' style={{height:'200px', 
        width:'200px', objectFit: 'cover'}}/>
      </div>
      <label htmlFor="imageSelector">Select Image</label>
      
      <input style={{display:'none'}} type="file" id="imageSelector" onChange={onChange}/>
    </div>
}
