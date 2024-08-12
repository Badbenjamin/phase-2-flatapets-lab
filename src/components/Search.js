import {useState} from 'react'

function Search({setSearchText, text}){
    

    function handleOnChange(e){
        setSearchText(e.target.value)
    }

    

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                onChange={handleOnChange}
                type="text"
                id="search"
                placeholder="Type a name to search..."
                text={text}
            />
        </div>
    )
}

export default Search;