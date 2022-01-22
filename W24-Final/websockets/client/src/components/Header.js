import {IoSettings} from 'react-icons/io5'
import {BsChatLeftDots} from 'react-icons/bs'
import {BiHomeSmile} from 'react-icons/bi'

import {Link} from 'react-router-dom'

export default function  Header() {
    return <div className='header'>
        <Link to ='/home'><BiHomeSmile className='icon' /></Link>
        <Link to ='/chat'><BsChatLeftDots className='icon' /></Link>
        <IoSettings className='icon'/>
    </div>
}