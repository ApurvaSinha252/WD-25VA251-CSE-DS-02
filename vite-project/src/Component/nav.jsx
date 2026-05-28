import React from 'react'
import { Link , NavLink } from 'react-router-dom'

function Nav(){
    return(
        <div>
            <nav>
                <h2>MY SITE</h2>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Gallery">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}