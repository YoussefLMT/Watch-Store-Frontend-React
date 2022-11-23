import React from 'react'
import Sidebar from '../components/Sidebar'
import './dashboard.css'

function Dashboard() {
    return (
        <div className='p'>
            <Sidebar />
            <main>
                Dashboard
            </main>
        </div>
    )
}

export default Dashboard