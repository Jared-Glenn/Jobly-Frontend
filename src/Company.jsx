import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";

function Company({ handle, name, description }) {
    return (
        <Link to={`/companies/${ handle }`}>
            <div className="company">
                <h2 className="company-name">{ name }</h2>
                <p>{ description }</p>
            </div>
        </Link>
    )
}

export default Company;