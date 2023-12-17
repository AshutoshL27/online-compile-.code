import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <h1>.& Code</h1>
      <div className='linksContainer'>
        <NavLink to={'/'} className='link'>Home</NavLink>
        <NavLink to={'/webdevelopment'} className='link'>Web.</NavLink>
        <NavLink to={'/development'} className='link'>Dev.</NavLink>
      </div>
    </div>
  )
}

export default Navbar