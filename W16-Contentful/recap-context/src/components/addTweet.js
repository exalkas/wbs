import React, {useState, useContext} from 'react'
import {TweetsContext} from './context'

export default function AddTweet() {

    const {addTweet} = useContext(TweetsContext)

    const [value, setValue] = useState('')


    const handleClick = () => addTweet(value)

    return (
        <>
            <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
            <button onClick={() => addTweet(value)}>Add new tweet</button>
            {/* <button onClick={handleClick}>Add new tweet</button> */}
        </>
    )
}