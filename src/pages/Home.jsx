import React from 'react'
import Navbar from "../components/Navbar"
import './styles/home.css'
import image from '../assets/watches_PNG101453.png'
import Feature from '../components/Feature'
import img1 from '../assets/watch_p.png'
import img2 from '../assets/cash-on-delivery.png'
import img3 from '../assets/free-delivery.png'
import Category from '../components/Category'
import img4 from '../assets/f_watch.png'
import img5 from '../assets/smart.png'
import img6 from '../assets/classic.png'
import { getLatestProducts } from '../features/specificProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"
import Footer from '../components/Footer'

function Home() {

    const dispatch = useDispatch()

    const { latest_products, home_products, loading } = useSelector((state) => state.specificProducts)

    useEffect(() => {
        dispatch(getLatestProducts())
    }, [dispatch])

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
                            <Link to="/shop" className="shop-btn">SHOP NOW</Link>
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

            <section class="categories">
                <div class="title">
                    <h2 class="title-txt">Our <span>Categories</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div class="content">
                    <Category image={img1} name="Male Watches" />
                    <Category image={img4} name="Female Watches" />
                    <Category image={img5} name="Smart Watches" />
                    <Category image={img6} name="Classic Watches" />

                </div>
            </section>

            <section class="latest-products">
                <div class="title">
                    <h2 class="title-txt">Latest <span>Products</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div class="content">
                    {
                        loading ? <ClipLoader /> :
                            latest_products.map((latest_product) => {
                                return <Product image={`http://127.0.0.1:8000/${latest_product.image}`} name={latest_product.name} price={latest_product.price} quantity={latest_product.quantity} id={latest_product.id}/>
                            })
                    }
                </div>
            </section>

            <section class="home-products">
                <div class="title">
                    <h2 class="title-txt">Our <span>Products</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="content">
                    {
                        loading ? <ClipLoader /> :
                            home_products.map((home_product) => {
                                return <Product image={`http://127.0.0.1:8000/${home_product.image}`} name={home_product.name} price={home_product.price} quantity={home_product.quantity} id={home_product.id}/>
                            })
                    }
                </div>
                <div class="title">
                    <Link to="/shop" class="see-all-btn">See All</Link>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home