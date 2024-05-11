import React, { useState, useEffect } from "react";
import './Companies.css';
import JoblyApi from "./api.js";

import Company from "./Company";
import SearchBar from "./SearchBar";

function Companies() {

    const [ companies, setCompanies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        async function getCompanies() {
            setIsLoading(true);
            try {
                const res = await JoblyApi.getCompanies();
                setCompanies(res.companies);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getCompanies();
    }, []);

    return (
        <div className="centered">
            {/* Move className to the actual components. */}
            <SearchBar className="centered" />
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                companies.map(company => <Company className="centered" key={company.handle} {...company} />)
            )}
        </div>
    );
}

export default Companies;