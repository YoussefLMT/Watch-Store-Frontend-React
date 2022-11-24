import React from 'react'
import Sidebar from '../components/Sidebar'
import './dashboard.css'

function Dashboard() {
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