import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.css'

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

    const[clicked, setClicked] = useState(false)

    const toggle = () => {
        setClicked(clicked => !clicked)
    }
    
    return (
        <div className="sidebar" style={{ width: clicked ? '6%' : '20%'}}>
            Sidebar 
            <br />

            <section className="routes">
                    {sidebarData.map((data) => (
                        <NavLink to={data.path} key={data.name} className="link">
                            <div className="icon">
                                {data.icon}
                            </div>

                            <div className="text">
                                {data.name}
                            </div>
                        </NavLink>
                    ))}
                </section>

            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default Sidebar