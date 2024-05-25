import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext.jsx";

function Home() {

    const { user, signedIn } = useContext(UserContext);

    return (
        <>
            <h1 id="main" className="title">Jobly</h1>
            <p className="title">All the jobs in one, convenient place.</p>
            { signedIn ? (
                <h2 className="title">Welcome Back, { user.username }!</h2>
            ) : (
                <div>
                    <Link to="/login"><button className="main-button">Log In</button></Link>
                    <Link to="/signup"><button className="main-button">Sign Up</button></Link>
                </div>
            )}
            
        </>
    )
}

export default Home;