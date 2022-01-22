import React from 'react'
import Button from './Button'

export default function NewTask(props) {
    return <div>
        <input type='text' onChange={props.inputCb} value={props.inputValue}/>
        <Button 
            text='+' 
            cb={props.addCb}    
        />
    </div>
}