import React from 'react'
import { Link } from 'react-router-dom'
import './styles/product.css'

function Product(props) {
    return (
        <div class="product-box">
            <div class="product-imgbox">
                <img src={props.image} />
            </div>
            <div class="product-text">
                <h3>{props.name}</h3>
                <p>{props.price} DH</p>
                <p>Quantity: {props.quantity}</p>
            </div>
            <Link to={`shop/${props.id}`} class="product-btn-show">Show</Link>
        </div >
    )
}

export default Product