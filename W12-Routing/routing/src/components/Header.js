import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {

return <div>
    <Link to='/'> Home </Link>
    <Link to='/about'> About </Link>
    <Link to='/users'> Users </Link>
    {/* <Link to='/user:123'>User 123</Link> */}
    <NavLink to='/contact'>Contact us</NavLink>
</div>
}