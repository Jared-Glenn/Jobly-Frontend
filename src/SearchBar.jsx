import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {

    const [ formData, setFormData ] = useState({ searchTerm: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data, 
            [ name ]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = formData;
        onSearch(searchTerm);
        setFormData({ searchTerm: "" });
    }

    return (
        <>
            <form className="searchForm" onSubmit={ handleSubmit }>
                <input className="searchBar"
                    id="searchTerm"
                    type="text"
                    name="searchTerm"
                    placeholder="Enter search term"
                    value={formData.searchTerm || ""}
                    onChange={ handleChange }
                />
                <button className="searchButton" onClick={ handleSubmit }>Search</button>
            </form>
        </>
    )
}

export default SearchBar;