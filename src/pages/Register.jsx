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

    const handleChange = (e) => {
        e.persist();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form>
                    <h2 class="form-title">Register</h2>
                    <div>
                        <label>Name</label>
                        <input type="text" value={form.name} onChange={handeChange} class="text-input" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={form.email} onChange={handeChange} class="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={form.password} onChange={handeChange} class="text-input" />
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