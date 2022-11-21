import React, { useState } from 'react'
import logo from '../../logo.svg'
import './navbar.css'

function Navbar() {

  const [clicked, setCicked] = useState(false)

  return (
    <>
      <nav>
        <a href="/"><img src={logo} /></a>
        <div>
          <ul className={clicked ? 'navbar active' : 'navbar'}>
            <li><a href="/">Home</a></li>
            <li><a href="/#">Shop</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </div>
        <div className='mobile' onClick={() => setCicked(clicked => !clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar