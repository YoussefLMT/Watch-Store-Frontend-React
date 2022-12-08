import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './styles/login.css'
// import { login } from '../features/authSlice'
import axiosInstance from '../axios'

function Login() {

    const [message, setMessage] = useState('');

    // const dispatch = useDispatch()

    // const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {

    //         if (localStorage.getItem('role') === "user") {
    //             navigate('/')
    //         } else if (localStorage.getItem('role') === "admin") {
    //             navigate('/dashboard')
    //         }

    //     }

    // }, [navigate, dispatch])

    const [form, setForm] = useState({
        email: '',
        password: '',
        errors_list: [],
    });

    const handleChange = (e) => {
        e.persist();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const loginFunc = async (e) => {
        e.preventDefault()

        const data = {
            email: form.email,
            password: form.password
        }

        const response = await axiosInstance.post('/login', data)

        if (response.data.status === 401) {
            setMessage(response.data.message)
        } else if (response.data.role === 'user') {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', response.data.role)
            navigate('/dashboard')
        } else if (response.data.role === 'admin') {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', response.data.role)
            navigate('/')
        }
        else {
            setForm({ ...form, errors_list: response.data.validation_err });
        }

        // dispatch(login(data))
    }


    return (
        <>
            <Navbar />
            <div class="auth-content">
                <form onSubmit={loginFunc}>
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
                        <button type="submit" class="btn-login">Login</button>
                    </div>
                    <p>Or <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login