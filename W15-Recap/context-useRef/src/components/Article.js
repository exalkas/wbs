import React from 'react'

// destructuring the props object
export default function Article({item, ...item1}) { // from props object taking the item property
    
    // console.log('props=', props)
    console.log('item1=', item1)

    // const {item, ...rest} = props

    return (
        <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </div>
    )
}