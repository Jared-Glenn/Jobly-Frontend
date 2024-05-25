import React from "react";
import "./Company.css";

function Company({ handle, name, description }) {
    return (
        <a href={`/companies/${ handle }`}>
            <div className="company">
                <h2 className="company-name">{ name }</h2>
                <p>{ description }</p>
            </div>
        </a>
    )
}

export default Company;