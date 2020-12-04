import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Container-Navbar">
            <ul>
                <li><button>Login</button></li>
                <li><button>Register</button></li>
                <li><Link to="/profile">Profile</Link></li>
                <li ><Link>About</Link></li>
                <li ><Link to ="/">Home</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
