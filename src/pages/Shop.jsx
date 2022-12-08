import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { getProducts } from '../features/productsSlice'
import './styles/shop.css'
import ClipLoader from "react-spinners/ClipLoader"

function Shop() {

    const dispatch = useDispatch()

    const { products, loading } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <div class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mx-auto mt-3">

                        </div>
                    </div>
                </div>
                <div class="content">
                    {
                        loading ? <ClipLoader /> :
                            products.map((product) => {
                                return <Product image={`http://127.0.0.1:8000/${product.image}`} name={product.name} price={product.price} quantity={product.quantity} id={product.id} />
                            })
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Shop