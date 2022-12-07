import React from 'react'
import Sidebar from '../components/Sidebar'
import './styles/dashboard.css'

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