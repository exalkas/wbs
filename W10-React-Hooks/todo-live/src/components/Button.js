import React from 'react'

export default function Button(props) {
    return <button
        style={{backgroundColor: props.background || 'lightblue'}}
        onClick={props.cb}
    >
        {props.text}
    </button>
}