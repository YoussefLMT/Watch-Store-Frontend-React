import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './login.css'

function Login() {

    const [form, setForm] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleChange = (e) => {
        e.persist();
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form>
                    <h2 class="form-title">Login</h2>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} class="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} class="text-input" />
                    </div>
                    <div>
                        <button type="submit" class="btn btn-big">Register</button>
                    </div>
                    <p>Or <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login