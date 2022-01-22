import React from 'react'
import AddTweet from '../components/addTweet'

export default function MainLayout(props) {

    return (
        <>
        <AddTweet />
        <div>
            This is from main layout
            
            {props.children}
        </div>
        </>
    )
}