import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getProduct } from '../features/productsSlice'
import './styles/productDetails.css'
import ClipLoader from "react-spinners/ClipLoader"

function ProductDetails() {

    const dispatch = useDispatch()

    const params = useParams()

    const { product, loading } = useSelector((state) => state.products)

    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(quantity => quantity + 1)
    }

    const decrement = () => {
        if (quantity === 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity => quantity - 1)
        }
    }

    useEffect(() => {
        dispatch(getProduct(params.id))
    }, [dispatch])

    return (
        <>
            <Navbar />
            <div class="p-container">
                <div class="row d-flex justify-content-center">
                    {
                        loading ? <ClipLoader /> :

                            <>
                                <div class="col-md-4">
                                    <img class="details-img" src={'http://127.0.0.1:8000/' + product.image} />
                                </div>
                                <div class="col-md-4">
                                    <Link to="/">Go Back</Link><br /><br />
                                    <h5>{product.name}</h5>
                                    <p><span class="product-details-title">Price:</span> {product.price}DH</p>
                                    <p><span class="product-details-title">Description:</span> {product.description}</p>
                                    <p><span class="product-details-title">Quantity:</span> {product.quantity}</p>
                                    <div class="quantity-toggle">
                                        <button onClick={decrement}>&mdash;</button>
                                        <input type="text" value={quantity} readonly />
                                        <button onClick={increment}>&#xff0b;</button>
                                    </div>
                                    <br />
                                    <button class="btn">Add Product To Cart</button>
                                </div>
                            </>
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails