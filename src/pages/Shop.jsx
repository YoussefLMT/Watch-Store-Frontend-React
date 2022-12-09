import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { getProducts } from '../features/productsSlice'
import './styles/shop.css'
import ClipLoader from "react-spinners/ClipLoader"
import { useState } from 'react'

function Shop() {

    const dispatch = useDispatch()

    const { products, loading } = useSelector((state) => state.products)

    // const [category, setCategory] = useState('')

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // const filteredProducts = products.filter((product) => {
    //     return product.category === category
    // })


    return (
        <div>
            <Navbar />
            <div class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mx-auto">
                            {/* <label for="category" class="form-label">Select a category</label>
                            <select class="form-select" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option se value="all">All</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="sport">Sport</option>
                                <option value="smart">Smart</option>
                                <option value="classic">Classic</option>
                            </select> */}
                        </div>
                    </div>
                </div>
                <div class="content">
                    {
                        loading ? <ClipLoader /> :
                            // category === "all" ? 
                            products.map((product) => {
                                return <Product image={`http://127.0.0.1:8000/${product.image}`} name={product.name} price={product.price} quantity={product.quantity} id={product.id} />
                            }) 
                            
                            // : 

                            // filteredProducts.map((product) => {
                            //     return <Product image={`http://127.0.0.1:8000/${product.image}`} name={product.name} price={product.price} quantity={product.quantity} id={product.id} />
                            // })
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Shop