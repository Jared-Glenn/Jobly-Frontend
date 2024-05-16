import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <span>Jobly</span>
            <span className="navbar-button">
                <Link className="navbar-link" to="/">Home</Link>
            </span>
            <span className="navbar-button">
            <Link className="navbar-link" to="/companies">Companies</Link>
            </span>
            <span className="navbar-button">
            <Link className="navbar-link" to="/jobs">Jobs</Link>
            </span>
            <span className="navbar-button">
            <Link className="navbar-link" to="/profile">Profile</Link>
            </span>
        </div>
    )
}

export default Navbar;

//Photo by <a href="https://unsplash.com/@orlovamaria?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maria Orlova</a> on <a href="https://unsplash.com/photos/a-close-up-view-of-a-blue-water-surface-Q3Ea7QQQ6MA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  