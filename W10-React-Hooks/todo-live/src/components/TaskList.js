import React from "react";
import Button from "./Button";

export default function TaskList(props) {
    return <div style={{
        height: '400px',
        width: '300px',
        border: '1px solid'
    }}>
        {
            props.list.length ? // expression ? expression : expression
                <ul>
                    {
                        props.list.map((item, idx) => <div key={idx}> 
                                <li >
                                    {item}
                                    <Button background='lime' text='>' cb={() => props.editCb(idx)}/>
                                    <Button background='crimson' text='-' cb={() => props.deleteCb(idx)}/>
                                </li>
                            </div>
                            )
                    }
                </ul>
                :
                'No tasks available'
        }
    </div>
}