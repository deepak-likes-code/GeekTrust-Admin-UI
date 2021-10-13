import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {




    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Router>



            <nav className="page">
                <ul className="pagination">
                    <li className="page-item"> <Link to="#" className="page-link"
                        onClick={() => paginate(1)}
                    >&lt;&lt;</Link></li>
                    {
                        currentPage > 1 && (
                            <li className="page-item"> <Link to="#" className="page-link"
                                onClick={() => paginate(currentPage - 1)}
                            >&lt;</Link></li>
                        )
                    }

                    {pageNumbers.map(number => (
                        <li id={`page-${number}`} key={number} className="page-item">
                            <Link to="#" className="page-link"
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </Link>
                        </li>
                    ))}

                    {
                        currentPage < pageNumbers.length && (
                            <li className="page-item"> <Link to="#" className="page-link"
                                onClick={() => paginate(currentPage + 1)}
                            >&gt;</Link></li>
                        )
                    }
                    <li className="page-item"> <Link to="#" className="page-link"
                        onClick={() => paginate(pageNumbers.length)}
                    >&gt;&gt;</Link></li>

                </ul>

            </nav>
        </Router>
    )
}

export default Pagination
