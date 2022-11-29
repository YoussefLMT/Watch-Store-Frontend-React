import React from 'react'
import Navbar from "../components/navbar/Navbar"
import './home.css'
import image from '../assets/watches_PNG101453.png'
import Feature from '../components/Feature'
import img1 from '../assets/watch.png'
import img2 from '../assets/cash-on-delivery.png'
import img3 from '../assets/free-delivery.png'


function Home() {
    return (
        <>
            <Navbar />
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 content">
                            <h1>Choose your watch now!</h1>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Delectus assumenda temporibus dolor impedit autem esse in culpa
                                nulla quos magnam veniam reprehenderit enim, perferendis doloremque,
                                maiores ipsa laudantium iure
                            </p>
                            <button className="shop-btn">SHOP NOW</button>
                        </div>
                        <div className="col-md-4">
                            <div className="image">
                                <img src={image} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="title">
                    <h2 class="title-txt">Our <span>Features</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="content">
                    <Feature image={img1} name="Cool Products" description="Lorem ipsum dolor sit amet consectetur adipisicing" />
                    <Feature image={img3} name="Free Delivery" description="Lorem ipsum dolor sit amet consectetur adipisicing" />
                    <Feature image={img2} name="Cash On Delivery" description="Lorem ipsum dolor sit amet consectetur adipisicing" />
                </div>
            </section>
        </>
    )
}

export default Home