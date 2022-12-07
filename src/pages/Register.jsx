import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './styles/register.css'
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

function Register() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

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
            Toast.fire({
                icon: 'success',
                title: response.data.message
            })
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
                        <span className='text-danger'>{form.error_list.name}</span>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="text-input" />
                        <span className='text-danger'>{form.error_list.email}</span>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} className="text-input" />
                        <span className='text-danger'>{form.error_list.password}</span>
                    </div>
                    <div>
                        <button type="submit" className="btn-register">Register</button>
                    </div>
                    <p>Or <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register