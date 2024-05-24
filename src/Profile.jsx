import React, { useContext } from "react";

import UserContext from "./userContext.jsx";
import ProfileForm from "./ProfileForm.jsx";

function Profile() {

    const { user } = useContext(UserContext);

    console.log("APPLICATIONS!!!!!", user.applications)

    return (
        <>
            <h1>Profile</h1>
            <ProfileForm />
            {user.applications.map((application) => {
                <p>{ application.job_id }</p>
            })}
        </>
    )
}

export default Profile;