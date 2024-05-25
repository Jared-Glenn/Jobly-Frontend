import React, { useState, useEffect, useContext } from "react";

import UserContext from "./userContext.jsx";
import ProfileForm from "./ProfileForm.jsx";

function Profile() {

    const [ jobs, setJobs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const { user } = useContext(UserContext);

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
    }, [user]);

    
    return (
        <>
            <h1>Profile</h1>
            <ProfileForm />
            <div className="applied-jobs-div">
                <h3>Jobs Applied for by ID:</h3>
                <ul>
                {user.applications.map((application) => {
                    return <li>{ application }</li>
                })}
                </ul>
            </div>
            
        </>
    )
}

export default Profile;