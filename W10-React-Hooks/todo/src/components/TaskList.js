import React from 'react'
import Button from './Button'

export default function TaskList(props) {
    return <div style={{
        height: '400px', 
        width: '300px',
        border: '1px solid',
        }}>
        {
            props.list.length ?
                <ul style={{padding:'20px'}}>
                    {props.list.map((item, idx) =>
                    <div key={idx} style={{marginTop: '10px'}}>
                        <li style={{display: 'flex', justifyContent: 'space-between'}}>{item}
                            <Button inline={true} background='lightblue' text='>' cb={() =>props.editCb(idx)} />
                            <Button inline={true} background='crimson' text='-' cb={() =>props.deleteCb(idx)} />
                        </li>
                    </div>
                    )}
                </ul>
            :
            'No tasks availble'

        }
    </div>
}