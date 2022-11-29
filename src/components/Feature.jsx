import React from 'react'

function Feature(props) {
    return (
        <div class="box">
            <div class="imgbox">
                <img src={props.image} />
            </div>
            <div class="text">
                <h3>{ props.name }</h3>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default Feature