import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api.js";

function CompanyDetail() {

    const [ company, setCompany ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    let { handle } = useParams();

    useEffect(() => {
        async function getCompany(companyHandle) {
            setIsLoading(true);
            try {
                const res = await JoblyApi.getCompany(companyHandle);
                setCompany(res.company);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getCompany(handle);
    }, []);

    return (
        <>
            <h1>{ company.name }</h1>
        </>
    )
}

export default CompanyDetail;