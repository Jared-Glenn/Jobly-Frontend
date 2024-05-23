import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

import UserContext from "./userContext.jsx";

function Navbar() {
    const { user, token, signedIn, setUser, setToken, setSignedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        setUser({});
        setToken({});
        setSignedIn(false);
        navigate("/");
    }

    return (
        <div className="navbar">
            <span>
            <Link className="navbar-home" to="/">Jobly</Link>
            </span>
            {
                signedIn ? (
                <span>
                    <span className="navbar-button">
                        <Link className="navbar-link" to="/companies">Companies</Link>
                    </span>
                    <span className="navbar-button">
                        <Link className="navbar-link" to="/jobs">Jobs</Link>
                    </span>
                    <span className="navbar-button">
                        <Link className="navbar-link" to="/profile">Profile</Link>
                    </span>
                    <span className="navbar-button">
                        <button className="navbar-link" onClick={ logout }>Log out { user.username }</button>
                    </span>
                </span>
                ) : (
                    <span>
                        <span className="navbar-button">
                            <Link className="navbar-link" to="/login">Login</Link>
                        </span>
                        <span className="navbar-button">
                            <Link className="navbar-link" to="/signup">Sign Up</Link>
                        </span>
                    </span>
                )

            }
        </div>
    )
}

export default Navbar;

//Photo by <a href="https://unsplash.com/@orlovamaria?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maria Orlova</a> on <a href="https://unsplash.com/photos/a-close-up-view-of-a-blue-water-surface-Q3Ea7QQQ6MA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  