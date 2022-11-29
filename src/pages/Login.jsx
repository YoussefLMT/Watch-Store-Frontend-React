import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './login.css'

function Login() {
    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form>
                    <h2 class="form-title">Login</h2>
                    <div>
                        <label>Email</label>
                        <input type="email" class="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" class="text-input" />
                    </div>
                    <div>
                        <button type="button" class="btn btn-big">Register</button>
                    </div>
                    <p>Or <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login