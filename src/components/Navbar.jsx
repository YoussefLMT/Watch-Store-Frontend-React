import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './styles/navbar.css'
import { logout } from '../features/authSlice'

function Navbar() {

  const [clicked, setCicked] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <>
      <nav>
        <Link to="/"><h2><span class="txt">W</span>S</h2></Link>
        <div>
          <ul className={clicked ? 'navbar active-navbar' : 'navbar'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
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
            {localStorage.getItem('token') &&
              <>
                <li><button onClick={logOut} className="btn btn-danger">Log out</button></li>
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