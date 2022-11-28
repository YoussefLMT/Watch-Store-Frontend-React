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
                        <div className="col-md-4 content">
                            <h2>Choose your watch now!</h2>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Delectus assumenda temporibus dolor impedit autem esse in culpa
                                nulla quos magnam veniam reprehenderit enim, perferendis doloremque,
                                maiores ipsa laudantium iure
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home