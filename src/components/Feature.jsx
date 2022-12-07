import React from 'react'
import './styles/feature.css'

function Feature(props) {
    return (
        <div class="feature-box">
            <div class="feature-imgbox">
                <img src={props.image} />
            </div>
            <div class="feature-text">
                <h4>{ props.name }</h4>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default Feature