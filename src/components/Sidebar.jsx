import React, { useState } from 'react'
import './sidebar.css'

function Sidebar() {

    const[clicked, setClicked] = useState(false)

    const toggle = () => {
        setClicked(clicked => !clicked)
    }
    
    return (
        <div className="sidebar" style={{ width: '20%'}}>
            Sidebar 
            <br />

            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default Sidebar