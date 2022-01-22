import React, { createContext, useState } from 'react'

 // each app could have more than one context
export const TweetsContext = createContext() // context is being created and exported

export default function TweetProvider({children}) {

    const [tweets, setTweets] = useState([
        'Hello this is my first tweet',
        'Hello this is tweet No2',
        'Hello this is tweet No3',
        'Hello this is tweet No4',
    ])

    // function to be used in the child component that will consume the context
    const addTweet = item => {

        const oldArray = [...tweets]

        oldArray.push(item)
        setTweets([...oldArray])
    }

    const deleteTweet = id => {

        const oldArray = [...tweets]

        oldArray.splice(id, 1)
        setTweets([...oldArray])
    }

    return (
        <TweetsContext.Provider value = {{tweets, addTweet, deleteTweet}}>
            {children}
        </TweetsContext.Provider>
    )

}