import React from 'react';

export default function Button(props) {
    
    console.log('Hello from button component')
    return (
        <button onClick={props.cb}>{props.text}</button>
    )
}