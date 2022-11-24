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

                <div className='mobile'>
                    <i className="fas fa-bars"></i>
                </div>
            </main>
        </div>
    )
}

export default Dashboard