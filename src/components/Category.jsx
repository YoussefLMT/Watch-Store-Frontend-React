import React from 'react'

function Category(props) {
    return (
        <div class="box">
            <div class="imgbox">
                <img src={props.image} />
            </div>
            <div class="text">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default Category