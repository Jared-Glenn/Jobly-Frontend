import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ signedIn }) {

    return (
        <>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            { signedIn ? (
                <h2>Welcome Back!</h2>
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