import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axiosInstance from '../axios';
import ProductsTable from '../components/ProductsTable';
import Sidebar from '../components/Sidebar'
import './products.css'
import { getProducts } from '../features/productsSlice';
import { useEffect } from 'react';
import { store } from '../app/store';
import Pagination from '../components/Pagination';

function Products() {

    const [form, setForm] = useState({
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: '',
        errors: [],
    });

    const [image, setImage] = useState();

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(5)

    const dispatch = useDispatch()

    const { products, loading } = useSelector((state) => state.products)


    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

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
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleImage = (e) => {
        e.persist();
        setImage({ image: e.target.files[0] })
    }

    const addNewProduct = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', form.name);
        data.append('price', form.price);
        data.append('quantity', form.quantity);
        data.append('category', form.category);
        data.append('description', form.description);
        data.append('image', image.image);

        const response = await axiosInstance.post('/add-product', data)

        if (response.data.status === 200) {
            Toast.fire({
                icon: 'success',
                title: response.data.message
            })
            store.dispatch(getProducts())
        } else {
            setForm({ ...form, errors: response.data.validation_err });
        }
    }

    return (
        <div className='products'>
            <Sidebar />
            <main>
                <h1>Products</h1>

                <div className="card products-card">
                    <div className="card-header">
                        Products Management

                        {/* Button trigger add product modal  */}
                        <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addProductModal">
                            Add Product
                        </button>
                    </div>
                    <div className="card-body">
                        <ProductsTable products={currentProducts} />
                        {loading && <h4 className='text-center'>Loading...</h4>}
                        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={number => setCurrentPage(number)}/>
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
                                <form onSubmit={addNewProduct}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name='name' value={form.name} onChange={handleChange} className="form-control" id="name" />
                                        <span className='text-danger'>{form.errors.name}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="text" name='price' value={form.price} onChange={handleChange} className="form-control" id="price" />
                                        <span className='text-danger'>{form.errors.price}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                        <input type="text" name='quantity' value={form.quantity} onChange={handleChange} className="form-control" id="quantity" />
                                        <span className='text-danger'>{form.errors.quantity}</span>
                                    </div>
                                    <select class="form-select" aria-label="Default select example" name='category' value={form.category} onChange={handleChange}>
                                        <option selected>Category</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                        <option value="sport">Sport</option>
                                        <option value="smart">Smart</option>
                                        <option value="classic">Classic</option>
                                    </select>
                                    <span className='text-danger'>{form.errors.category}</span>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" name='description' value={form.description} onChange={handleChange} className="form-control" id="description" />
                                        <span className='text-danger'>{form.errors.description}</span>
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="image" class="form-label">Image</label>
                                        <input class="form-control" name='image' onChange={handleImage} type="file" id="image" />
                                        <span className='text-danger'>{form.errors.image}</span>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save</button>
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