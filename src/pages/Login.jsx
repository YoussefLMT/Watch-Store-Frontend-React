import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './login.css'

function Login() {

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleChange = (e) => {
        e.persist();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const login = (e) => {
        e.preventDefault();

        const data = {
            email: form.email,
            password: form.password
        }

        dispatch(login(data))
    }


    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form onSubmit={login}>
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
                        <button type="submit" class="btn btn-big">Login</button>
                    </div>
                    <p>Or <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login