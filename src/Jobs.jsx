import React, { useState, useEffect } from "react";
import "./Jobs.css";
import JoblyApi from "./api.js";

import Job from "./Job.jsx";
import SearchBar from "./SearchBar.jsx";

function Jobs() {

    const [ jobs, setJobs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ searchTerm, setSearchTerm ] = useState("")

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    useEffect(() => {
        async function getJobs() {
            setIsLoading(true);
            try {
                const res = await JoblyApi.getJobs(searchTerm);
                setJobs(res.jobs);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getJobs();
    }, [searchTerm]);


    return (
        <>
            <SearchBar className="centered" onSearch={ handleSearch } />
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                jobs.map(job => <Job key={job.id} {...job} />)
            )}
        </>
    )
}

export default Jobs;