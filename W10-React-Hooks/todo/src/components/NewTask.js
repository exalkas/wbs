import React from 'react'
import Button from './Button'

export default function NewTask(props) {
    return <div>
                <input type="text" onChange={props.cb} value={props.value}/>
                <Button text="+" background='lime' cb={props.buttonCb}/>
            </div>
}