import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import './dashboard.css'

function Dashboard() {

    const [clicked, setCicked] = useState(false)

    return (
        <div className='p'>
            <Sidebar />
            <main>
                Dashboard

                <div className='mobile' onClick={() => setCicked(clicked => !clicked)}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </main>
        </div>
    )
}

export default Dashboard