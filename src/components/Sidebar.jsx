import React, { useState } from 'react'
import './sidebar.css'

const sidebarData = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <i class="fa-solid fa-gauge"></i>,
    },
    {
        path: "/products",
        name: "brands",
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

            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default Sidebar