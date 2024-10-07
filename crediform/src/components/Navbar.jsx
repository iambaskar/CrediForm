import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
        <p className="logo">Crediform</p>
        <ul className="links">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='features'>Features</NavLink></li>
          <li><NavLink to='components'>Components</NavLink></li>
        </ul>
            <button className="navbar-btn">Get Started</button>
    </div>
  )
}
