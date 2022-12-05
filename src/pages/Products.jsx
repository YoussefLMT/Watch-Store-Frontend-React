import React from 'react'
import Sidebar from '../components/Sidebar'
import './products.css'

function Products() {
    return (
        <div className='products'>
            <Sidebar />
            <main>
                <h1>Products</h1>

                <div className="card products-card">
                    <div className="card-header">
                        Cars Management

                        {/* Button trigger add product modal  */}
                        <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addProductModal">
                            Add Product
                        </button>
                    </div>
                </div>


                {/* Add Product Modal  */}
                <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Product</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name='name' className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="text" name='price' className="form-control" id="price" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                        <input type="text" name='quantity' className="form-control" id="quantity" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <input type="text" name='category' className="form-control" id="category" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" name='description' className="form-control" id="description" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="image" class="form-label">Image</label>
                                        <input class="form-control" type="file" id="image" />
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