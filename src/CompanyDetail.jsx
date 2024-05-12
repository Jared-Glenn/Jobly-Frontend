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
            <h1>{ company.name }</h1>
        </>
    )
}

export default CompanyDetail;