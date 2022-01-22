import React from 'react'

export default function Button(props) {
    return <div
        style={{
            height: '50px',
            width: '50px',
            border: '1px solid deeppink',
            backgroundColor: props.background,
            color: props.color,
            display: 'grid',
            placeItems: 'center'
        }}
        onClick={props.cb}
        >
            {props.text}
        </div>
}