import React from 'react'

const Search = ({ setSearch }) => {

    return (
        <input type="text" id="search" placeholder="Search by Name, Email or Role" onChange={setSearch}></input>
    )
}

export default Search
