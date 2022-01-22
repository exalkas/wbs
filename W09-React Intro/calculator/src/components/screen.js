import React from 'react'

export default function Screen(props) {
    return (
        <div style={{
            border: '1px solid red',
            width: '100px',
            height: '40px',
            display: 'grid',
            placeItems: 'end'
        }}>
            {props.value}
        </div>
    )
}