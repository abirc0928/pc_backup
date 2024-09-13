import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul className='navbar'>
        <li><NavLink className='nav-bar-link' to={'/home'}>Home</NavLink></li>
        <li><NavLink className='nav-bar-link' to={'/about'}>About</NavLink></li>       
        <li><NavLink className='nav-bar-link' to={'/user/abir'}>Abir</NavLink></li>
        <li><NavLink className='nav-bar-link' to={'/user/mead'}>Mead</NavLink></li>
        <li><NavLink className='nav-bar-link' to={'/filter'}>Filter</NavLink></li>
        <li><NavLink className='nav-bar-link' to={'/contact'}>Contact</NavLink></li>
      </ul>
      
    </div>
  )
}

export default NavBar
