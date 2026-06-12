import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <div id='nav'>
            <Link to={'/'}>   
            <li>Home</li>
            </Link>
            
            <Link to={'/cart'}> 
            <li>Cart</li>
            </Link>

        </div>
    </div>
  )
}

export default NavBar



