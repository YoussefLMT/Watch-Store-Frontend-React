import React from 'react'

function Pagination(props) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <button className="page-link">{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination