import React, { useState, useEffect, useContext } from "react";
import "./Profile.css"

import UserContext from "./userContext.jsx";
import ProfileForm from "./ProfileForm.jsx";

function Profile() {

    const { user } = useContext(UserContext);

    
    return (
        <>
            <h1 className="title">Profile</h1>
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