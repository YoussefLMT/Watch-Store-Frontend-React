import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getProduct } from '../features/productsSlice'

function ProductDetails() {

    const dispatch = useDispatch()

    const params = useParams()

    const { product } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProduct(params.id))
    }, [dispatch])
    return (
        <>
            <Navbar />
            <div class="row d-flex justify-content-center">
                <div class="col-md-4">
                    <img class="details-img" src={'http://127.0.0.1:8000/' + product.image} />
                </div>
                <div class="col-md-4">
                    <router-link to="/">Go Back</router-link><br /><br />
                    <h5>{product.name}</h5>
                    <p><span class="title">Price:</span> {product.price}DH</p>
                    <p><span class="title">Description:</span> {product.description}</p>
                    <p><span class="title">Quantity:</span> {product.quantity}</p>

                    <br />
                    <button class="btn">Add Product To Cart</button>
                </div >
            </div >
            <Footer />
        </>
    )
}

export default ProductDetails