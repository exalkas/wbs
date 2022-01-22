import React from 'react';

export default function DisplayList(props) {
    return (
        <ul>
            {
                props.favoritesProp.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    )
}