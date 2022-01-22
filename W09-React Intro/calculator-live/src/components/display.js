import React from "react";

export default function display(props) {
    return <div style={{
        border: '1px solid black',
        width: '100px',
        height: '40px',
        display: 'grid',
        placeItems: 'end'
    }}>{props.valueProperty}</div>
}