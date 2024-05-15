import React, { useState, useEffect } from "react";
import './Companies.css';
import JoblyApi from "./api.js";

import Company from "./Company";
import SearchBar from "./SearchBar";

function Companies() {

    const [ companies, setCompanies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ searchTerm, setSearchTerm ] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    useEffect(() => {
        async function getCompanies() {
            setIsLoading(true);
            try {
                const res = await JoblyApi.getCompanies(searchTerm);
                setCompanies(res.companies);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getCompanies();
    }, [searchTerm]);

    return (
        <>
            <SearchBar className="centered" onSearch={ handleSearch } />
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                companies.map(company => <Company key={company.handle} {...company} />)
            )}
        </>
    );
}

export default Companies;