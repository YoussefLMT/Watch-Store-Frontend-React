import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './register.css'

function Register() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form>
                    <h2 class="form-title">Register</h2>
                    <div>
                        <label>Name</label>
                        <input type="text" class="text-input" />
                    </div>
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
                    <p>Or <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register