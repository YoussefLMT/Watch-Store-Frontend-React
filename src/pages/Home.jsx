import React from 'react'
import Navbar from "../components/navbar/Navbar"
import './home.css'

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Choose your watch now!</h2>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home