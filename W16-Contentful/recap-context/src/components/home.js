import React, {useContext} from 'react'
import { TweetsContext } from './context'
import {Link} from 'react-router-dom'

export default function Home () {

    // destructuring 
    const {tweets, deleteTweet} = useContext(TweetsContext)

    return (
        <div>
            This is home
            {
                tweets?.map((item, key) => 
                <div key={key}>
                    <div  onClick={()=> deleteTweet(key)}>{item}<Link to={`/tweet/${key}`}> Edit</Link></div>
                </div>
                
                )}
        </div>)
}