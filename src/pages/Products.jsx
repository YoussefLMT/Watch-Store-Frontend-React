import React from 'react'
import Sidebar from '../components/Sidebar'
import './products.css'

function Products() {
    return (
        <div className='products'>
            <Sidebar />
            <main>
                <h1>Products</h1>

                <div className="card products-card" style={{ width: "1100px" }}>
                    <div className="card-header">
                        Cars Management

                        {/* Button trigger add product modal  */}
                        <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addCarModal">
                            Add Product
                        </button>
                    </div>
                </div>    
            </main>
        </div>
    )
}

export default Products