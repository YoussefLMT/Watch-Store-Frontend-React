import React from 'react'

function ProductsTable(props) {
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
                                    <img src={`http://127.0.0.1:8000/${product.image}`}/>
                                    <td>
                                        <button type="button" class="btn btn-danger"><i class="fa-sharp fa-solid fa-trash"></i></button>
                                        <button type="button" style={{marginLeft: '10px', color: 'white'}} data-bs-toggle="modal" data-bs-target="#updateUserModal" class="btn btn-warning"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductsTable