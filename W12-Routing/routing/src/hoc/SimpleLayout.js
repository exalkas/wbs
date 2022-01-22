import React from 'react'
import Header from '../components/Header'


export default function MainLayout(props) {
    return <div>
        <Header />
        <div style={{display: 'flex'}}>
            <div style={{height: '500px', backgroundColor: 'lime'}}>
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