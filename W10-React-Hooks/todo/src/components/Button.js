import React from 'react'

export default function Button(props) {
    return <button style={{
        backgroundColor: props.background,
        marginTop: props.inline ? '0' :'30px',
        // display: props.inline ? 'block' :'inline'
    }}
    onClick={props.cb}
    >
        {props.text}
    </button>
}