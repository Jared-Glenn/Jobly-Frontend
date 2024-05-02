import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Navbar;