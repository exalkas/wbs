import React, {useContext} from 'react'
import { useParams } from 'react-router'
import { TweetsContext } from './context'

export default function TweetPage() {

    const {tweets} = useContext(TweetsContext)

    const {id} = useParams()

    return (
        <div>This is the tweet with id{id}: {tweets[id]}</div>
    )
}