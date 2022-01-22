import { useEffect, useState } from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'
import {io} from 'socket.io-client'

const socket = io('/') // socket is an instance of io

export default function Chat() {

    const [user, setUser] = useState('')
    const [typing, setTyping] = useState({show: false, user: null})
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {

        // register events for socket.io
        socket.on('connect', () => {
            console.log('Connect to socket io server')
        })

        socket.on('message from server', data => {

            console.log('message from server: data', data)
            setMessages(oldData => [...oldData, data])
        })

        socket.on('typing', user => {
            console.log('typing event, user', user)
            setTyping({show: true, user})

            setTimeout(() => setTyping({show: false, user: null}), 1000)
        })

    }, [])

    const handleChange = e => {
        setMessage(e.target.value)
        socket.emit('typing', user)
    }

    const handleSend = () =>{ 
        
        console.log('handlesend here: message:', message)
        socket.emit('message', {message, user})
    }

    return  <div className='chat'>
        <div>
        <input type="text" placeholder='Type your name' value={user} onChange={e => setUser(e.target.value)} />
        </div>
            <ul>
                {
                    messages.map((item, idx) => <li key={idx} className={item.user === user ? 'liright' : null}>{item.user}:{item.message}</li>)
                }
            </ul>
            <div className='textboxContainer'>
                <textarea rows="3" value={message} onChange={handleChange}></textarea>
                <RiSendPlaneFill onClick={handleSend}className='icon send'/>

            </div>
            <p className='status'>{typing.show ? `${typing.user} is typing` : '\u00A0'}</p>
        </div>
}