import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'

function Navbar() {

  const [clicked, setCicked] = useState(false)

  return (
    <>
      <nav>
        <Link to="/"><h2><span class="txt">W</span>S</h2></Link>
        <div>
          <ul className={clicked ? 'navbar active' : 'navbar'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#">Shop</Link></li>
            <li><Link to="/#">About</Link></li>
            <li><Link to="/#">Contact</Link></li>
            {!localStorage.getItem('token') &&
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            }
            {localStorage.getItem('role') === 'admin' &&
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </>
            }
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