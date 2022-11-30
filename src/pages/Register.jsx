import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './register.css'
import axiosInstance from '../axios'

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

    const register = async (e) => {
        e.preventDefault();

        const data = {
            name: form.name,
            email: form.email,
            password: form.password
        }

        const response = await axiosInstance.post('/register', data)

        if (response.data.status === 200) {
            console.log(response.data.message)
        } else {
            setForm({ ...form, error_list: response.data.validation_err });
        }
    }

    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form onSubmit={register}>
                    <h2 className="form-title">Register</h2>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} className="text-input" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} className="text-input" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-big">Register</button>
                    </div>
                    <p>Or <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register