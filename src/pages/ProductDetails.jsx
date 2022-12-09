import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getProduct } from '../features/productsSlice'
import './styles/productDetails.css'
import ClipLoader from "react-spinners/ClipLoader"
import Swal from 'sweetalert2'
import axiosInstance from '../axios'

function ProductDetails() {

    const dispatch = useDispatch()

    const params = useParams()

    const { product, loading } = useSelector((state) => state.products)

    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    })

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

    const addToCart = async () => {
        if (!localStorage.getItem("token")) {
            Toast.fire({
                icon: "error",
                title: "Please login first",
            });
        } else {
            if (quantity > product.quantity) {
                Toast.fire({
                    icon: "error",
                    title: "Quantity you choose is more what we have!",
                });
            } else {
                const response = await axiosInstance.post(`add-to-cart/${params.id}`, { quantity: quantity });
                if (response.data.status === 406) {
                    Toast.fire({
                        icon: "error",
                        title: response.data.message,
                    });
                } else if (response.data.status === 200) {
                    Toast.fire({
                        icon: "success",
                        title: response.data.message,
                    });
                }
            }
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
                                <div class="col-md-4 tt">
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
                                    <button onClick={addToCart} class="add-to-cart-btn">Add Product To Cart</button>
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