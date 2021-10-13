import React from 'react'

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {




    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="page">
            <ul className="pagination">
                <li className="page-item"> <a href="!#" className="page-link"
                    onClick={() => paginate(1)}
                >&lt;&lt;</a></li>
                {
                    currentPage > 1 && (
                        <li className="page-item"> <a href="!#" className="page-link"
                            onClick={() => paginate(currentPage - 1)}
                        >&lt;</a></li>
                    )
                }

                {pageNumbers.map(number => (
                    <li id={`page-${number}`} key={number} className="page-item">
                        <a href="!#" className="page-link"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}

                {
                    currentPage < pageNumbers.length && (
                        <li className="page-item"> <a href="!#" className="page-link"
                            onClick={() => paginate(currentPage + 1)}
                        >&gt;</a></li>
                    )
                }
                <li className="page-item"> <a href="!#" className="page-link"
                    onClick={() => paginate(pageNumbers.length)}
                >&gt;&gt;</a></li>

            </ul>

        </nav>
    )
}

export default Pagination
