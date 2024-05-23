import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext.jsx";

function Home() {

    const { user, signedIn } = useContext(UserContext);

    return (
        <>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            { signedIn ? (
                <h2>Welcome Back, { user.username }!</h2>
            ) : (
                <div>
                    <Link to="/login"><button>Log In</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>
            )}
            
        </>
    )
}

export default Home;