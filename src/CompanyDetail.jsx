import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api.js";

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
                    <h3>{ company.name }</h3>
                    <p>{ company.description }</p>
                </>
            )}
            
        </>
    )
}

export default CompanyDetail;