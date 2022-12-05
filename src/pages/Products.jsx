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


                {/* Add Car Modal  */}
                <div className="modal fade" id="addCarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Car</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name='name' className="form-control" id="name" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </main>
        </div>
    )
}

export default Products