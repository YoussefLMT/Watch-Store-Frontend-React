import React from 'react'
import './feature.css'

function Feature(props) {
    return (
        <div class="box">
            <div class="imgbox">
                <img src={props.image} />
            </div>
            <div class="text">
                <h4>{ props.name }</h4>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default Feature