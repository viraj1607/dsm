import React from 'react'
import Logo from "../img/Logo_Banner.png"
import { Link } from 'react-router-dom'
import "../css/site.css"

const Header = () => {
  return (
    <div className='header-container'>
        <Link to="/"><img src={Logo}/></Link>
        <ul>
            <li><Link to="/form">Form</Link></li> 
        </ul>
    </div>
  )
}

export default Header