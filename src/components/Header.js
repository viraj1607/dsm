import React from 'react'
import Logo from "../img/Logo_Banner.png"
import { Link } from 'react-router-dom'
import "../css/site.css"
import "../css/main.css"
import "../css/util.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../fonts/iconic/css/material-design-iconic-font.min.css"

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