import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
    return (
        <div class="box">
            <div class="imgbox">
                <img src={props.image} />
            </div>
            <div class="text">
                <h3>{props.name}</h3>
                <p>{props.price} DH</p>
                <p>Quantity: {props.quantity}</p>
            </div>
        </div >
    )
}

export default Product