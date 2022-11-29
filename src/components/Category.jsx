import React from 'react'
import './category.css'

function Category(props) {
    return (
        <div class="box">
            <div class="imgbox">
                <img src={props.image} />
            </div>
            <div class="text">
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

export default Category