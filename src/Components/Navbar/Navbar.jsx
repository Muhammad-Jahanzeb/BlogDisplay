import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
      <div className="navBar">
        <div className="right">
          <div className="logo">
            Blog
          </div>
          <div className="search">
            <input className="searchBar"placeholder='Enter text here'></input>
          </div>
        </div>
        <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} style={{cursor:'pointer'}}/>
        <FontAwesomeIcon icon={faBell} style={{cursor:'pointer'}}/>
        </div>
      </div>
  )
}

export default Navbar