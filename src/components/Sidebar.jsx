import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './styles/sidebar.css'
import { logout } from '../features/authSlice'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const sidebarData = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <i class="fa-solid fa-gauge"></i>,
    },
    {
        path: "/products",
        name: "products",
        icon: <i class="fa-solid fa-shop"></i>,
    },
];

function Sidebar() {

    const [clicked, setClicked] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const toggle = () => {
        setClicked(clicked => !clicked)
    }

    const logOut = () => {
        dispatch(logout())

        Toast.fire({
            icon: 'success',
            title: 'Signed out successfully'
        })

        navigate("/login")
    }

    return (
        <div className="sidebar" style={{ width: clicked ? '5%' : '18%' }}>
            <section className="routes">
                {sidebarData.map((data) => (
                    <NavLink to={data.path} key={data.name} className="sidebar-link">
                        <div className="icon">
                            {data.icon}
                        </div>

                        <div className="text">
                            {!clicked && data.name}
                        </div>
                    </NavLink>
                ))}
            </section>
            <div className="log-out">
                <button onClick={logOut} className="btn btn-danger">Log out</button>
            </div>
            <div className="toggle-icon">
                <i className={clicked ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-left"} onClick={toggle}></i>
            </div>
        </div>
    )
}

export default Sidebar