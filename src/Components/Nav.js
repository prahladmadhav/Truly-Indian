import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to='/'>
                <h3>Truly Indian</h3>
            </Link>
            <ul className='nav-links'>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/contact-us'>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
