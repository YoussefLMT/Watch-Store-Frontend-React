import React from 'react'
import './styles/category.css'

function Category(props) {
    return (
        <div class="category-box">
            <div class="category-imgbox">
                <img src={props.image} />
            </div>
            <div class="category-text">
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

export default Category