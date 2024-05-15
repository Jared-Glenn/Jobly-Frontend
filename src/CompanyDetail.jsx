import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api.js";
import "./CompanyDetail.css"

import Job from "./Job.jsx";

function CompanyDetail() {

    const [ company, setCompany ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    let params = useParams();

    useEffect(() => {
        async function getCompany(handle) {
            setIsLoading(true);
            try {
                const res = await JoblyApi.getCompany(handle);
                setCompany(res.company);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getCompany(params.company);
    }, []);

    return (
        <>
        {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                <>
                    <h3 className="company-info">{ company.name }</h3>
                    <p className="company-info">{ company.description }</p>
                    <div>
                        {company.jobs.map(job => <Job key={job.id} {...job} />)}
                    </div>
                </>
            )}
            
        </>
    )
}

export default CompanyDetail;