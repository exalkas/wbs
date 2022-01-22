import React from 'react'

export default function Button(props) {
    
    return <div 
        style={{
            backgroundColor: props.backgroundColor,
            height:'50px',
            width: '50px',
            display: 'grid',
            placeItems: 'center',
            border: '1px solid black',
            color: 'white',
            borderCollapse: 'collapse'
            }}
        
            onClick= {() => props.cb(props.text)}
            >
        
            {props.text}
        
        </div>
}