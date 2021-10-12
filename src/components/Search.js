import React from 'react'

const Search = ({ setSearch }) => {



    return (
        <input type="text" id="search" placeholder="search by name, id or role" onChange={setSearch}></input>
    )
}

export default Search
