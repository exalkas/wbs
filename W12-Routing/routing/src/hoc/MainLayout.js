import React from 'react'
import Header from '../components/Header'


export default function MainLayout(props) {
    return <div>
        <Header />
        <div style={{display: 'flex'}}>
            <div style={{height: '400px', backgroundColor: 'red'}}>
                Left column
            </div>
            <div>
                {
                    props.children
                }
            </div>
        </div>
    </div>
}