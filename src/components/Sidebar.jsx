import React, { useState } from 'react'
import './sidebar.css'

const sidebarData = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <AiFillDashboard />,
    },
    {
        path: "/brands",
        name: "brands",
        icon: <FaCarSide />,
    },
    {
        path: "/cars",
        name: "cars",
        icon: <AiFillCar />,
    },
    {
        path: "/reservations",
        name: "reservations",
        icon: <FaCalendarAlt />,
    },
    {
        path: "/users",
        name: "users",
        icon: <FiUsers />,
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