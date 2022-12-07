import React from 'react'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../axios';
import { getProducts } from '../features/productsSlice';
import { store } from '../app/store';

function ProductsTable(props) {

    const [product, setProduct] = useState({})
    const [id, setId] = useState(0)
    const [errors, setErrors] = useState([]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleChange = (e) => {
        e.persist();
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const deleteProduct = async (e, id) => {
        const deleteBtn = e.currentTarget;
        try {
            await axiosInstance.delete(`/delete-product/${id}`)
            deleteBtn.closest('tr').remove();
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async (id) => {
        setId(id)
        try {
            const response = await axiosInstance.get(`get-product/${id}`)
            setProduct(response.data.product)
        } catch (error) {
            console.log(error)
        }
    }

    
    const updateProduct = async (e) => {
        e.preventDefault();
        const response = await axiosInstance.put(`update-product/${id}`, product)
        if (response.data.status === 200) {
            Toast.fire({
                icon: 'success',
                title: response.data.message
            })
            store.dispatch(getProducts())
        } else if (response.data.status === 422) {
            setErrors(response.data.validation_err)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.category}</td>
                                    <td>{product.description}</td>
                                    <img src={`http://127.0.0.1:8000/${product.image}`} />
                                    <td>
                                        <button type="button" onClick={(e) => deleteProduct(e, product.id)} class="btn btn-danger"><i class="fa-sharp fa-solid fa-trash"></i></button>
                                        <button type="button" style={{ marginLeft: '10px', color: 'white' }} data-bs-toggle="modal" data-bs-target="#updateProductModal" onClick={() => getProduct(product.id)} class="btn btn-warning"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* update product modal */}
            <div className="modal fade" id="updateProductModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateProduct}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name='name' value={product?.name || 'Loading...'} onChange={handleChange} className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="text" name='price' value={product?.price || 'Loading...'} onChange={handleChange} className="form-control" id="price" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantity" className="form-label">Quantity</label>
                                    <input type="text" name='quantity' value={product?.quantity || 'Loading...'} onChange={handleChange} className="form-control" id="quantity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <input type="text" name='category' value={product?.category || 'Loading...'} onChange={handleChange} className="form-control" id="category" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" name='description' value={product?.description || 'Loading...'} onChange={handleChange} className="form-control" id="description" />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsTable